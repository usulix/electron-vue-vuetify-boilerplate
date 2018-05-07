const state = {
  foobars: [
    {name: 'thing1'},
    {name: 'thing2'},
    {name: 'thing3'},
    {name: 'thing4'},
    {name: 'thing5'},
  ]
}

const getters = {
  getFooBars (state) {
    return state.foobars
  }
}

const actions = {
  //
}

const mutations = {
  //
}

export default {
  state,
  getters,
  actions,
  mutations
}