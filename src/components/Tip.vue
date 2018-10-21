<template>

  <v-layout class="absolute popover" :style="'top: ' + (y || 0) + 'px'">
    <v-flex xs12 sm4 offset-sm8>
      <v-card class="card">

        <v-card-title primary-title>
          <p>
            {{ text.title }}
          </p>
          <p v-html="text.message">
          </p>
        </v-card-title>
      </v-card>
    </v-flex>
  </v-layout>


</template>

<style type="text/css">
.popover {
  pointer-events: none;
  z-index: 99999;
}
.absolute {
  position: absolute;
}
.fixed {
  position: fixed;
}
</style>

<script>
export default {
  props: ['text', 'y']
}
</script>
