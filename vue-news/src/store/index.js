/* eslint-disable */

import Vue from 'vue';
import Vuex from 'vuex';
import { fetchAskList, fetchJobsList, fetchNewsList } from '../api/index.js';
import mutations from './mutations.js';
import actions from './actions.js';
//상태관리 도구.


// Vue.use(Vuex);


export const store = new Vuex.Store({
    state : {
        news: [],
        jobs: [],
        ask: [],
        user: {},
        item: [],
    },
    getters: {
        fetchedAsk(state) {
            return state.ask;
        },
        fetchedItem(state) {
            return state.item;
        }
    },
    mutations:mutations,
    actions : actions,
})