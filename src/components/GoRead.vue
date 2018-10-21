<template>

  <v-form v-on:submit.prevent="submitForm">
    <v-container>

      <v-layout row wrap>

        <v-flex xs12>
          <v-text-field
            v-model="url"
            label="Article URL or topic"
            required
            class="search-url"
            solo
            >

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
  'Catalunia',
  'HackUPC',
  'Germany',
  'Spain',
  'TheOnion',
]

export default {
  name: 'GoRead',

  methods: {
    fillExample: function () {
      this.url = randomElement(topics)
    },

    submitForm: async function () {
      const isURL = /^http(s)?:\/\//.test(this.url)

      if (!isURL) {
        const topic = this.url
        const { url } = await api.loadURL(topic)
        this.url = url
      }

      this.loadURL(this.url)
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
