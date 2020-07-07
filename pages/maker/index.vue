<template>
  <section class="container">
    <div>
      <Tapioca
      :color='color'
       />
    </div>
  </section>
</template>
<script>
import Tapioca from '~/components/items/Tapioca.vue' // コンポーネント読み込み
export default {
  components: {
    Tapioca // コンポーネントの登録
  },
  data () {
    return {
      color: {
        cup: 'fill:rgb(249,249,249)',
        backCup: 'fill:rgb(234,234,234)',
        teaFront: 'fill:rgb(208,181,147)',
        teaTop: 'fill:rgb(218,194,164)',
        tapioca: 'fill:rgb(120,88,63)',
        straw: 'fill:rgb(234,70,69)',
        lid: 'fill:rgb(244,244,244)',
        strawTop: 'fill:rgb(194,59,58)'
      }
    }
  }
}
</script>
