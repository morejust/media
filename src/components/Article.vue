<template>

  <article class="reading-mode simple-container">

    <h1>
      {{ article.title }}
    </h1>

    <p v-if="isHTMLReady" v-html="rawHtml">
    </p>

    <p v-else>
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
export default {
  name: 'Article',
  props: ["article"],
  created: async function () {
    const { article } = this

    console.log('this', article)

    

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
