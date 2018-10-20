<template>
  <v-content>
    <section>
      <v-parallax :src="hero" height="600">
        <v-layout
          column
          align-center
          justify-center
          class="white--text"
        >
          <a href="#/">
            <img src="../assets/logo.png" alt="more just media" height="200">
          </a>

          <h1 class="white--text mb-2 display-1 text-xs-center">Reading. Reinvented.</h1>
          <div class="subheading mb-3 text-xs-center">Powered by morejust.media</div>
          <v-btn
            class="blue lighten-2 mt-5"
            dark
            large
            href="#/analyze"
          >
            Get Started
          </v-btn>
        </v-layout>
      </v-parallax>
    </section>

    <section style="background-color: #fefefe">
      <v-layout
        column
        wrap
        class="my-5"
        align-center
      >
        <v-flex xs12 sm4 class="my-3">
          <div class="text-xs-center">
            <h2 class="headline">We humans are flawed.</h2>
            <span class="subheading">
              Fortunately, we humans are smart enough to fix it.
            </span>
          </div>
        </v-flex>
        <v-flex xs12>
          <v-container grid-list-xl>
            <v-layout row wrap align-center>
              <v-flex xs12 md4>
                <v-card class="elevation-0 transparent">
                  <v-card-text class="text-xs-center">
                    <img src="https://airbnb.design/anotherlens/img/balance.gif" />
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline text-xs-center">Balance your bias</div>
                  </v-card-title>
                  <v-card-text>
                    Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                    Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.
                  </v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs12 md4>
                <v-card class="elevation-0 transparent">
                  <v-card-text class="text-xs-center">
                    <img src="https://airbnb.design/anotherlens/img/opposite.gif" />
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline">Consider the opposite</div>
                  </v-card-title>
                  <v-card-text>
                    Images are the courtesy of Airbnb. :)
                    <br><br>
                    Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                    Nullam in aliquet odio.
                  </v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs12 md4>
                <v-card class="elevation-0 transparent">
                  <v-card-text class="text-xs-center">
                    <img src="https://airbnb.design/anotherlens/img/growth.gif" />
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline text-xs-center">Embrace growth</div>
                  </v-card-title>
                  <v-card-text>
                    Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                    Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.
                  </v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
      </v-layout>
    </section>

    <section>
      <v-parallax :src="hero" height="380">
        <v-layout column align-center justify-center>
          <div class="headline white--text mb-3 text-xs-center">
            Want to learn to read again?
          </div>
          <em>
            Read any article
          </em>

          <GoRead />

        </v-layout>
      </v-parallax>
    </section>

    <section>
      <InfoCard />
    </section>

    <v-footer class="red darken-2">
      <v-layout row wrap align-center>
        <v-flex xs12>
          <div class="white--text ml-3">
            See more @ <a class="white--text" href="https://github.com/morejust">morejust</a>
          </div>
        </v-flex>
      </v-layout>
    </v-footer>
  </v-content>
</template>

<script>
import hero from '@/assets/hero.jpeg'
import plane from '@/assets/plane.jpg'
import section from '@/assets/section.jpg'
// @ is an alias to /src
import GoRead from '@/components/GoRead.vue'
import InfoCard from '@/components/InfoCard.vue'

export default {
  name: 'home',
  components: {
    GoRead,
    InfoCard
  },
  data: () => ({
    hero: hero,
    plane: plane,
    section: section
  })
}
</script>
