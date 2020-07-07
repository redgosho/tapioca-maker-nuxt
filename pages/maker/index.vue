<template>
  <v-container>
    <v-row
      :align="alignment"
      :justify="justify"
    >
      <v-col cols='12'>
        <v-row
          :align="alignment"
          :justify="justify"
        >
          <div
            class="pa-6 text-center grey lighten-2 rounded-lg"
          >
            <Tapioca
              :color='color'
            />
          </div>

        </v-row>
      </v-col>
        <v-col cols='12'>
          <ColorTab />
        </v-col>
    </v-row>
  </v-container>
</template>
<script>
// コンポーネント読み込み
import Tapioca from '~/components/items/Tapioca.vue'
import ColorTab from '~/components/Atom/ColorTab.vue'
// import ColorPalette from '~/components/items/ColorPalette.vue'

export default {
  components: {
    Tapioca,
    ColorTab
  },
  computed: {
    color () {
      return this.$store.getters.color
    }
  },
  data () {
    return {
      alignmentsAvailable: [
        'start',
        'center',
        'end',
        'baseline',
        'stretch'
      ],
      alignment: 'center',
      dense: false,
      justifyAvailable: [
        'start',
        'center',
        'end',
        'space-around',
        'space-between'
      ],
      justify: 'center'
    }
  }
}
</script>
