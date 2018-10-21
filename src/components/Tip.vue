<template>

  <v-layout class="fixed">
    <v-flex xs12 sm6>
      <v-card class="popover">

        <v-card-title primary-title>
          <div>
            {{ text }}
          </div>
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
.fixed {
  position: fixed;
}
</style>

<script>
export default {
  props: ['text']
}
</script>
