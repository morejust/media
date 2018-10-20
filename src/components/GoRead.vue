<template>

        <v-form>
          <v-container>

            <v-layout row wrap>

              <v-flex xs12>
                <v-text-field
                  v-model="url"
                  label="Read any article"
                  required
                  solo
                  >

                  <v-btn
                    slot="append-outer"
                    style="top: -58px"
                    offset-y
                    class="blue lighten-2 mt-5"
                    dark
                    large
                    :href="`/read?url=${url}`"
                  >
                    Process
                  </v-btn>

              </v-text-field>
            </v-flex>
          </v-layout>
        </v-container>
      </v-form>

</template>

<script>
export default {
  name: 'GoRead',

  data: ({ url }) => ({
    url: url
  })
}
</script>
