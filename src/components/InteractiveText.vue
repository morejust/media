<template>
  <p
    @mouseover="doHighlight"
    v-html="html" v-on:click="onClick">
  </p>
</template>

<script>
export default {
  props: ['html', 'callback', 'highlightClass'],
  data: ({ html, callback, highlightClass }) => ({
    highlight: highlightClass || 'highlight',
    focus: null
  }),
  methods: {
    onClick: function ({ target }) {
      if (target === this.focus) {
        this.undoHighlight()
      } else {
        this.doHighlight({ target })
      }
    },

    doHighlight: function ({ target }) {
      const isHighlight = target.className.split(' ').includes(this.highlight)

      if (isHighlight) {
        this.callback(target)
        this.focus = target
      } else {
        this.undoHighlight()
      }
    },

    undoHighlight: function () {
      this.callback(false)
      this.focus = null
      // const isHighlight = target.className.split(' ').includes(this.highlight)
      //
      // if (isHighlight) {
      // }
    }
  }
}
</script>
