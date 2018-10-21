<template>
<v-container>

  <Tip v-if="isShowingTip" :text="tip" class="tip" />

  <article class="reading-mode simple-container">

    <h1>
      {{ article.title }}
    </h1>

    <v-layout justify-center>
      <v-flex xs12 sm8>
        <v-img :src="article.image" max-width="600px">
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

</v-container>
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

  .tip {

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

      console.log('highlight', { offset, type, content, sentiment })

      this.tip = `
        "${content}"

        Google API shows sentiment of ${sentiment} with ${magnitude}.

        Pay attention to strong emotional message text sends.
        Usually, it can be used to manipulate your opinion.
      `
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
    tip: '',

    isHTMLReady: false,
    isAIReady: false,
    rawHtml: '',
    highlights: [],
  })
}
</script>
