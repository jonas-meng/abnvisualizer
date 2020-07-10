import axios from 'axios';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const SERVER_URL = "http://localhost:3000";

export default new Vuex.Store({
    state: () => ({
        selectedNode: null,
        root: null
    }),
    mutations: {
        selectNode: (state, node) => {
            state.selectedNode = node;
        },
        deselectNode: (state) => {
            state.selectedNode = null;
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
    },
    getters: {
        selected: (state) => {
            return state.selectedNode ? true : false;
        },
        selectedNode: (state) => {
            return state.selectedNode;
        },
        name: (state) => {
            return state.selectedNode !== null ? state.selectedNode.name : '';
        },
        description: (state) => {
            return state.selectedNode !== null ? state.selectedNode.description : '';
        },
        root: (state) => {
            return state.root;
        }
    }
});