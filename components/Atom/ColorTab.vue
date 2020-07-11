<template>
  <v-row
    :align="alignment"
    :justify="justify"
  >
    <v-tabs
      v-model="tab"
      background-color="transparent"
      grow
    >
      <v-tab
        v-for="item in items"
        :key="item"
      >
        {{ item }}
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item
        v-for="(item, index) in items"
        :key="item"
      >
        <v-card
          color="basil"
          flat
        >
          <ColorPalette :partsType='partsType[index]' />
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-row>
</template>

<script>
import ColorPalette from '~/components/items/ColorPalette.vue'
export default {
  components: {
    ColorPalette
  },
  data () {
    return {
      tab: null,
      items: [
        'ドリンク', 'タピオカ', 'ストロー', 'フタ', 'カップ'
      ],
      partsType: [
        'tea', 'tapioca', 'straw', 'lid', 'cup'
      ],
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
