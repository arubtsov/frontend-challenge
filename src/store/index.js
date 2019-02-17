import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

import {
    ADD_TRANSCRIPTION,
    REMOVE_TRANSCRIPTION,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAIL,
    UPLOAD_DATA_SUCCESS,
    UPLOAD_DATA_FAIL
} from './mutatuion-types';
import { FETCH_DATA, UPLOAD_DATA } from './action-types';
import { getNewId } from './utils';

const ENDPOINT_URL = "http://www.mocky.io/v2/5ae1c5792d00004d009d7e5c";

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
        },

        [FETCH_DATA_FAIL] (state, error) {
            //TODO: refactor error notification
            alert(error);
        },

        [UPLOAD_DATA_SUCCESS] () {
            //TODO: implement visual feedback
        },

        [UPLOAD_DATA_FAIL] (state, error) {
            //TODO: refactor error notification
            alert(error);
        }
    },

    actions: {
        [FETCH_DATA] ({ commit }) {
            return axios
                .get(ENDPOINT_URL)
                .then(response => commit(FETCH_DATA_SUCCESS, response.data))
                .catch(error => commit(FETCH_DATA_FAIL, error));
        },

        [UPLOAD_DATA] ({ commit, state }) {
            return axios
                .post(ENDPOINT_URL, {
                    data: state.transcriptions
                })
                .then(() => commit(UPLOAD_DATA_SUCCESS))
                .catch(error => commit(UPLOAD_DATA_FAIL, error));
        }
    }
});