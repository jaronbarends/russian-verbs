import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import * as types from './types';
import getters from './getters';

export const store = new Vuex.Store({
	state: {
    verbs: [],
    cardConfig: {
      sideA: {
        rank: false,
        verb: true,
        translation: false,
        imperfective: true,
        perfective: false,
      },
      sideB: {
        rank: false,
        verb: false,
        translation: true,
        imperfective: false,
        perfective: true,
      },
      questionSide: 'sideA',
    },
    progress: {
      currIdx: 0,
    }
	},
	getters,
});
