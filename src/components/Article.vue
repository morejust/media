<template>
<div>

  <Tip v-if="isShowingTip" :text="tip" class="tip" />

  <article class="reading-mode simple-container">

    <h1>
      {{ article.title }}
    </h1>

    <v-layout justify-center>
      <v-flex xs12>
        <v-img :src="article.image" max-heigth="400px">
        </v-img>
      </v-flex>
    </v-layout>

    <p></p>

    <v-container v-if="isHTMLReady">
      <InteractiveText :html="rawHtml" :callback="onHighlight" />
      <p>
        Source: <a :href="article.url" target="_blank">{{ article.url }}</a>
      </p>
    </v-container>

    <p v-else>
      Markup is getting ready...
      <br> <br>
      {{ article.text }}
    </p>
  </article>

</div>
</template>

<style type="text/css">
  .reading-mode {
    text-align: left;
    max-width: 700px;

    font-family: 'Merriweather', serif;
    line-height: 1.6;
    font-size: 20px;
    color: #111;
    text-rendering: optimizeLegibility;
  }

  .reading-mode h1 {
    margin-bottom: 50px;
  }

  .reading-mode img {
    max-width: 100%;
    height: auto;
  }

  .tip {
    font-family: 'Merriweather', serif;
    line-height: 1.6;
    font-size: 16px;
  }
  .tip .card {
    background: #f4e842;
  }
</style>

<script>
import Tip from '@/components/Tip.vue'
import InteractiveText from '@/components/InteractiveText.vue'

import { extract, convertHtml, convertAiTokens } from '@/services/hairsplitter'

export default {
  name: 'Article',
  props: ["article"],
  created: async function () {

  },
  watch: {
    article: function (article) {
      console.log('new value', article)
      if (!article) return

      this.isHTMLReady = false
      this.highlight()
    }
  },
  components: {
    InteractiveText,
    Tip,
  },
  methods: {
    onHighlight: function (element) {
      if (element) {
        this.isShowingTip = true
        this.showTip(element.dataset)
      } else {
        this.isShowingTip = false
      }
    },
    showTip: function (data) {
      const { offset, type, content, sentiment, magnitude } = data

      const _sentiment = parseFloat(sentiment) || 0.0

      console.log('highlight', { offset, type, content, sentiment })

      const tip_title = `
        '${content}' has ${
          _sentiment > 0 ? 'positive' : 'negative'}
          sentiment here (${_sentiment.toFixed(2)})
      `

      const tip_message = `
        Pay attention to strong emotional message text sends.
        Usually, it can be used to manipulate your opinion.
      `

      this.tip = {
        title: tip_title,
        message: tip_message
      }
    },
    highlight: function () {
      const { title, text, html, entities } = this.article

      if (!title) return

      const html_tokens = convertHtml(text, html)

      const filteredEntities = entities
        .filter(entity => entity.salience > 0.01)
        .flatMap(entity => entity.mentions)
        .filter(entity => entity.magnitude != 0)

      const ai_tokens = convertAiTokens(text, filteredEntities)

      console.log(text)

      this.highlights = [ ...ai_tokens, ...html_tokens ]

      const tokens = extract(text, this.highlights)

      console.log(tokens)
      const rawHtml = tokens.map(token => token.html || token.content).join('')

      console.log(rawHtml)

      if (rawHtml) {
        this.rawHtml = rawHtml
        this.isHTMLReady = true
      }

    }
  },
  data: ({ article: { url, title, text, html, entities } }) => ({
    url,
    title,
    text,
    html,
    entities,

    isShowingTip: false,
    tip: {},

    isHTMLReady: false,
    isAIReady: false,
    rawHtml: '',
    highlights: [],
  })
}
</script>
