import Vue from 'vue';
import Vuex from 'vuex';
import DRState from './DRState';
import mutations from './mutations';
import actions from './actions';
import getters from './getters';

Vue.use(Vuex);

export default new Vuex.Store({
  state: new DRState(),
  mutations,
  actions,
  getters,
  modules: {
  },
});
