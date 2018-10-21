<template>

  <v-form v-on:submit.prevent="submitForm">
    <v-container>

      <v-layout column wrap>
        <v-flex xs12>
          <v-text-field
            v-model="url"
            label="Article URL or topic"
            required
            class="search-url"
            solo
            >
          </v-text-field>
        </v-flex>
        <v-flex xs12>
            <v-btn
              slot="append-outer"
              style="top: -58px"
              offset-y
              class="blue lighten-2 mt-5"
              dark
              large
              v-on:click="submitForm"
            >
              Process
            </v-btn>

            <v-btn
              slot="append-outer"
              style="top: -58px"
              offset-y
              class="lighten-2 mt-5"
              dark
              large
              v-on:click="fillExample"
            >
              Example
            </v-btn>

          </v-text-field>
        </v-flex>
      </v-layout>
    </v-container>
  </v-form>

</template>

<style>

@media only screen and (max-width: 1201px) {
  .search-url {
    min-width: 600px;
  }
}

@media only screen and (max-width: 780px) {
  .search-url {
    min-width: 200px;
  }
}

</style>

<script>
import api from '@/services/api'
import router from '@/router'

const randomElement = arr => arr[ Math.floor(Math.random() * arr.length) ]

const topics = [
  'iPhone',
  'Donald Trump',
  'Putin',
  'Germany',
  'Spain',
]

export default {
  name: 'GoRead',

  methods: {
    fillExample: async function () {
      const topic = randomElement(topics)
      const { url } = await api.loadURL(topic)
      this.url = url
    },

    submitForm: async function () {
      try {
        if (!this.url) {
          return
        }

        const isURL = /^http(s)?:\/\//.test(this.url)

        if (!isURL) {
          const topic = this.url
          const { url } = await api.loadURL(topic)
          this.url = url
        }

        this.loadURL(this.url)

      } catch (err) {
        this.url = ''
      }
    },

    loadURL: url => {
      router.push(`/read?url=${url}`)
    }
  },

  data: ({ url }) => ({
    url: url
  })
}
</script>
