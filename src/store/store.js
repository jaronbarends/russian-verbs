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
        rank: true,
        verb: false,
        mainVerb: true,
        oppositeVerb: false,
        translation: false,
        imperfective: true,
        perfective: false,
      },
      sideB: {
        rank: true,
        verb: false,
        mainVerb: false,
        oppositeVerb: true,
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
