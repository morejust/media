<template>
<div>

  <Tip v-if="isShowingTip" :text="tip" :y="tipOffset + 32" class="tip" />

  <article class="reading-mode simple-container">

    <h1>
      {{ article.title }}
    </h1>

    <p v-if="article.fake">
      <i style="color: #dd0000;">This source is known for publishing fake news</i>
    </p>

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

  .highlight {
    /* -webkit-text-decoration: underline;
    -webkit-text-decoration-color: #f4e842;
    text-decoration: underline;
    text-decoration-color: #f4e842; */

    border-bottom: 2px solid #f4e842;
    /* background: #f4e842; */
  }

  .highlight-fact {
    /* -webkit-text-decoration-color: #ff49bc;
    text-decoration-color: #ff49bc; */
    border-bottom: 2px solid #ff49bc;
    /* background: #ff49bc; */
  }

  .highlight-generalization {
    /* -webkit-text-decoration-color: #fcb423;
    text-decoration-color: #fcb423; */
    border-bottom: 2px solid #fcb423;
    /* background: #fcb423; */
  }
</style>

<script>
import Tip from '@/components/Tip.vue'
import InteractiveText from '@/components/InteractiveText.vue'

import { getTipMessage } from '@/services/highlights'

import {
  extract, convertHtml, convertTokens,
} from '@/services/hairsplitter'

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
        this.tipOffset = element.offsetTop
        this.showTip(element.dataset)
      } else {
        this.isShowingTip = false
      }
    },
    showTip: function (data) {
      this.tip = getTipMessage(data)
    },
    highlight: function () {
      const { title, text, html_tags, entities } = this.article

      if (!title) return

      const html_tokens = convertHtml(text, html_tags)

      const ai_tokens = convertTokens(text, entities)

      console.log(text)
      console.log(ai_tokens)

      this.highlights = [
        ...ai_tokens,
        ...html_tokens,
      ]

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
    tipOffset: 0,
    tip: {},

    isHTMLReady: false,
    isAIReady: false,
    rawHtml: '',
    highlights: [],
  })
}
</script>
