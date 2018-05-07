import {checkAccountInCredentialsFile} from '../../services/awsCredentialsService'

const state = {
  account: null,
  aws_access_key_id_exists: false,
  aws_secret_access_key_exists: false
}

const getters = {
  credentialsFound (state) {
    return state.account = 'ez-aws' && state.aws_access_key_id_exists && state.aws_secret_access_key_exists
  }
}

const actions = {
  checkForCredentials ({commit}) {
    if(checkAccountInCredentialsFile()){
      commit('setCredentials')
    }
  }
}

const mutations = {
  setCredentials (state) {
    state.account = 'ez-aws'
    state.aws_access_key_id_exists = true
    state.aws_secret_access_key_exists = true
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}