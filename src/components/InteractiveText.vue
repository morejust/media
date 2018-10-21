<template>
  <p @mouseover="mouseOver" @mouseout="mouseOut" v-html="html">
  </p>
</template>

<script>
export default {
  props: ['html', 'callback', 'highlightClass'],
  data: ({ html, callback, highlightClass }) => ({
    highlight: highlightClass || 'highlight'
  }),
  methods: {
    mouseOver: function ({ target }) {
      const isHighlight = target.className.split(' ').includes(this.highlight)

      if (isHighlight) {
        this.callback(target)
      }
    },
    mouseOut: function ({ target }) {
      const isHighlight = target.className.split(' ').includes(this.highlight)

      if (isHighlight) {
        this.callback(false)
      }
    },
  }
}
</script>
