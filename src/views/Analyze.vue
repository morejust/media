<template>
  <v-content>
    <section>
      <v-parallax :src="plane" dark height="600">
        <v-layout
          column
          align-center
          justify-center
          class="white--text"
        >
          <a href="/">
            <img src="../assets/logo.png" alt="more just media" height="200">
          </a>

          <GoRead />
        </v-layout>
      </v-parallax>
    </section>

    <section>
      <InfoCard />
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
