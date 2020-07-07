export const state = () => ({
  list: []
})

export const mutations = {
  add (state, text) {
    state.list.push({
      text,
      done: false
    })
  },
  remove (state, { tapioca }) {
    state.list.splice(state.list.indexOf(tapioca), 1)
  },
  toggle (state, tapioca) {
    tapioca.done = !tapioca.done
  }
}
