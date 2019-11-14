import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import * as types from './types';
import getters from './getters';

export const store = new Vuex.Store({
	state: {
		verbs: null,
	},
	getters,
});