<template>
  <v-row justify="space-around">
    <v-color-picker class="ma-2"
     show-swatches
     hide-canvas
     hide-inputs
     hide-mode-switch
     v-model="color"
     ></v-color-picker>
     <!-- {{color}} -->
  </v-row>
</template>

<script>
export default {
  props: {
    partsType: {
      type: String,
      require: true,
      default: () => 'cup'
    }
  },
  data: () => ({
    types: ['hex', 'hexa', 'rgba', 'hsla', 'hsva'],
    type: 'rgba',
    hex: '#FF00FF',
    hexa: '#FF00FFFF',
    rgba: { r: 255, g: 0, b: 255, a: 1 },
    hsla: { h: 300, s: 1, l: 0.5, a: 1 },
    hsva: { h: 300, s: 1, v: 1, a: 1 }
    // swatches: [
    //   ['#FF0000', '#AA0000', '#550000'],
    //   ['#FFFF00', '#AAAA00', '#555500'],
    //   ['#00FF00', '#00AA00', '#005500'],
    //   ['#00FFFF', '#00AAAA', '#005555'],
    //   ['#0000FF', '#0000AA', '#000055']
    // ]
  }),
  computed: {
    color: {
      get () {
        return this[this.type]
      },
      set (choiceColor) {
        this[this.type] = choiceColor
        this.colorChange(this[this.type])
      }
    }
  },
  methods: {
    colorChange (color) {
      return this.$store.commit('changeColor', { color: color, partsType: this.partsType })
    }
  }
}
</script>
