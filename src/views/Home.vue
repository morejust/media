<template>
  <v-content>
    <section>
      <v-parallax :src="nasa" height="600">
        <v-layout
          column
          align-center
          justify-center
          class="white--text"
        >
          <a href="/">
            <img src="../assets/logo.png" alt="more just media" height="200">
          </a>

          <h1 class="white--text mb-2 display-1 text-xs-center">Reading. Reinvented.</h1>
          <div class="subheading mb-3 text-xs-center">Powered by morejust.media</div>

          <div>

            <v-btn
              class="green lighten-1 mt-5"
              dark
              large
              href="https://chrome.google.com/webstore/detail/more-just-media-less-irra/cllododbccgoimpahfgglohebdefpffh"
              target="_blank"
            >
              Install for Chrome
            </v-btn>

            <v-btn
              class="blue lighten-1 mt-5"
              dark
              large
              href="https://gramup.typeform.com/to/yOuqQI"
              target="_blank"
            >
              We Have Questions!
            </v-btn>

            <v-btn
            class="blue lighten-1 mt-5"
            dark
            large
            href="/analyze"
            >
            Try Demo
            </v-btn>

            <v-btn
              class="lighten-2 mt-5"
              dark
              large
              href="https://docs.google.com/presentation/d/1db-guO3xtcdDKcN0wTpQYKKzHxqpMlEDBWBgLyHKQWc/edit#slide=id.g57f08ed57f_4_41"
              target="_blank"
            >
              Learn More
            </v-btn>

          </div>

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
                    Most of people form prejudices since childhood.
                    Biases during the life prevents people from thinking openly and making right decisions.
                    Learn to be independent of prejudices, then you will understand more of this world.
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
                    Being only on the one side of the issue, you will never see the whole picture.
                    You risk to miss a lot of in this case.
                    Don't restrict your position and you will reach the golden mean.
                    <br><br><br>
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
                    Embrace the growth to make yourself and the world better!
                    <br><br>
                    Images are the courtesy of Airbnb 😊
                    <br><br><br><br>
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
import nasa from '@/assets/nasa1965.jpg'
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
    nasa,
    hero: hero,
    plane: plane,
    section: section
  })
}
</script>
