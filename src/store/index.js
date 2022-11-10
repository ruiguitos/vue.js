// noinspection JSAnnotator

import Vue from 'vue'
import Vuex from 'vuex'
import 'firebase/compat/auth'
import 'firebase/compat/database'

import actions from './actions'
import getters from './getters'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    categories: {},
    forums: {},
    threads: {},
    posts: {},
    users: {},
    authId: 'VXjpr2WHa8Ux4Bnggym8QFLdv5C3'
  },

  getters,
  actions,
  mutations
})
