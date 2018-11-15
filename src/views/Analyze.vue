<template>
  <v-content>
    <section>

      <v-container fluid fill-height >
        <v-layout
          justify-center
          align-center
          class="white--text"
          >
          <v-flex text-xs-center>
              <br>
              <br>
              <br>
              <a href="/">
                <img src="../assets/logo.png" alt="more just media" height="200">
              </a>
              <br>
              <br>
              <br>
              <GoRead />
          </v-flex>
        </v-layout>
      </v-container>

    </section>

  </v-content>
</template>

<script>
import GoRead from '@/components/GoRead.vue'
import InfoCard from '@/components/InfoCard.vue'

import plane from '@/assets/plane.jpg'

export default {
  name: 'analyze',
  components: {
    GoRead,
    InfoCard
  },
  data: () => ({ plane })
}
</script>
