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
  changeColor (state, payload) {
    console.log('payload:', payload)
    const partsList = {
      tea: ['teaTop', 'teaFront'],
      tapioca: ['tapioca'],
      straw: ['straw', 'strawTop'],
      lid: ['lid'],
      cup: ['backCup', 'cup']
    }
    const color = `fill:rgb(${payload.color.r},${payload.color.g},${payload.color.b})`
    const colorDark = `fill:rgb(${payload.color.r - 50},${payload.color.g - 50},${payload.color.b - 50})`
    partsList[payload.partsType].forEach((partsType, index) => {
      console.log('partsType:', partsType)
      console.log('color:', color)
      console.log('colorDark:', colorDark)
      if (index === 0) {
        state.color[partsType] = color
      } else {
        state.color[partsType] = colorDark
      }
    })
  }
}
