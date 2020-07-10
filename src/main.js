import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';
import axios from 'axios';
import './assets/css/main.scss';

Vue.use(Vuex);
Vue.config.productionTip = false;

const SERVER_URL = "http://localhost:3000";

const store = new Vuex.Store({
  state: {
    selected: false,
    selectedNode: null,
    root: null
  },
  mutations: {
    selectNode: (state, node) => {
      state.selectedNode = node;
      state.selected = true;
    },
    deselectNode: (state) => {
      state.selectedNode = null;
      state.selected = false;
    },
    assignRoot: (state, root) => {
      let assignId = (current, id) => {
        if (!current) {
          return id;
        }
        current.id = id;
        for (let element of current.children) {
          id = assignId(element, id + 1);
        }
        return id;
      };
      state.root = root;
      assignId(state.root, 0);
    }
  },
  actions: {
    fetchData: ({ commit }) => {
      axios.get(SERVER_URL).then(response => {
        if (response.status == 200) {
          commit('assignRoot', response.data);
        }
      });
    }
  }
})


new Vue({
  render: h => h(App),
  store: store
}).$mount('#app')
