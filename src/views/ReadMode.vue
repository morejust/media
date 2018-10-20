<template>
    <v-content>
    <section>
      <v-layout
      column
      align-center
      justify-center
      >
        <a href="#/">
          <img src="../assets/logo.png" alt="more just media" height="200">
        </a>

        <p>
          <a href="#">{{ url }}</a>
        </p>

        <h1 v-if="isLoading">Loading...</h1>

        <h2 v-if="!!error" red>{{ error }}</h2>

        <Article v-else :article="article" />

      </v-layout>
    </section>
  </v-content>
</template>


<script>
import api from '@/services/api'
import Article from '@/components/Article.vue'


export default {
  name: 'ReadMode',
  props: ['url'],
  created: async function () {
    const { url } = this

    this.loadArticle(url)
  },
  data: function ({ url }) {
    return {
      isLoading: true,
      error: '',
      article: {}
    }
  },
  watch: {
    url: function (newUrl) {
      this.isLoading = true
      this.error = false

      this.loadArticle(newUrl)
    }
  },
  methods: {
    loadArticle: async function (url) {
      try {
        const parsing_result = await api.analyse(url)
        console.log(parsing_result)

        const { post, html, entities } = parsing_result

        if (!post) throw new Error(`Bad API response: No post data`)

        const { title, text, image } = post

        if (!text) throw new Error(`Bad API response: Empty text`)

        this.article = { title, text, html, image, entities }

        console.log('this.article', this.article)
      }
      catch (err) {
        this.error = err.message
        console.log('err', err.message)
      }
      finally {
        this.isLoading = false
      }
    }
  },
  components: {
    Article,
  }
}
</script>
