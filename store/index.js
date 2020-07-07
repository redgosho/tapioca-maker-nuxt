export const state = () => ({
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
})
export const getters = {
  color: state => {
    return state.color
  }
}
export const mutations = {
  changeColor (state) {
    state.counter++
  }
}
