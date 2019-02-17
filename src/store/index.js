import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

import { ADD_TRANSCRIPTION, REMOVE_TRANSCRIPTION, FETCH_DATA_SUCCESS } from './mutatuion-types';
import { FETCH_DATA } from './action-types';
import { getNewId } from './utils';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        transcriptions: []
    },

    mutations: {
        [ADD_TRANSCRIPTION] (state) {
            state.transcriptions = [
                ...state.transcriptions,
                {
                    id: getNewId(state.transcriptions),
                    voice: '',
                    text: ''
                }
            ];
        },

        [REMOVE_TRANSCRIPTION] (state, id) {
            state.transcriptions = state.transcriptions.filter(item => item.id !== id);
        },

        [FETCH_DATA_SUCCESS] (state, transcriptions) {
            state.transcriptions = transcriptions;
        }
    },

    actions: {
        [FETCH_DATA] ({ commit }) {
            return axios
                .get("http://www.mocky.io/v2/5ae1c5792d00004d009d7e5c")
                .then(response => commit(FETCH_DATA_SUCCESS, response.data));
        }
    }
});