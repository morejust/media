<template>

  <article class="reading-mode simple-container">

    <h1>
      {{ article.title }}
    </h1>

    <p v-if="isHTMLReady" v-html="rawHtml">
    </p>

    <p v-else>
      Markup is getting ready...

      {{ article.text }}
    </p>
  </article>

</template>

<style type="text/css">
  .reading-mode {
    text-align: left;
    max-width: 800px;

    font-family: 'Merriweather', serif;
    line-height: 1.6;
    font-size: 20px;
    color: #111;
    text-rendering: optimizeLegibility;
  }

  .reading-mode h1 {
    margin-bottom: 50px;
  }
</style>

<script>
import { split, extract, glue } from '@/services/hairsplitter'

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
  methods: {
    highlight: function () {
      const { title, text, html, entities } = this.article

      if (!title) return

      const html_tokens = html.map(tag => {
        const [ offset, html ] = tag

        return { type: 'html', offset, html, content: '' }
      })

      const ai_tokens = entities
      .filter(entity => entity.salience > 0.01)
      .flatMap(entity => {
        return entity.mentions
      })
      .map(entity => {
        const { offset, content, sentiment, magnitude } = entity

        const highlightColor = sentiment > 0
          ? `hsla(118, ${(Math.abs(sentiment.toFixed(3)) + 0.5) * 100}%, 50%, ${Math.abs(magnitude.toFixed(3))})`
          : `hsla(360, ${(Math.abs(sentiment.toFixed(3)) + 0.5) * 100}%, 50%, ${Math.abs(magnitude.toFixed(3))})`
        const style = `background-color: ${highlightColor}`

        const html = (`
          <span style="${style}">
            ${content}
          </span>
        `)

        return { type: 'sentiment', offset, html, content }
      })

      console.log(text)
      // console.log(ai_tokens)
      // console.log(html_tokens)

      const tokens = extract(text, [ ...ai_tokens, ...html_tokens ])

      console.log(tokens)
      const rawHtml = tokens.map(token => token.html || token.content).join('')

      console.log('rawHtml', rawHtml)
      if (rawHtml) {
        this.rawHtml = rawHtml
        this.isHTMLReady = true
      }

    }
  },
  data: ({ article: { title, text, html, entities } }) => ({
    title,
    text,
    html,
    entities,

    isHTMLReady: false,
    isAIReady: false,
    rawHtml: '',
  })
}
</script>
