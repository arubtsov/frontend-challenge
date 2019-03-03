import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

import {
    ADD_TRANSCRIPTION,
    REMOVE_TRANSCRIPTION,
    TOGGLE_TRANSCRIPTION_CHECKED,
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
        transcriptions: [],
        checked: {}
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

        [TOGGLE_TRANSCRIPTION_CHECKED] (state, id) {
            state.checked = {
                ...state.checked,
                [id]: !state.checked[id]
            };
        },

        [FETCH_DATA_SUCCESS] (state, transcriptions) {
            state.transcriptions = transcriptions;
        },

        [FETCH_DATA_FAIL] (state, error) {
            //TODO: refactor error notification
            alert(error);
        },

        [UPLOAD_DATA_SUCCESS] () {
            //TODO: refactor visual feedback
            alert('Transcriptions have been uploaded.');
        },

        [UPLOAD_DATA_FAIL] (state, error) {
            //TODO: refactor error notification
            alert(error);
        }
    },

    actions: {
        async [FETCH_DATA] ({ commit }) {
            try {
                const response = await axios.get(ENDPOINT_URL);

                return commit(FETCH_DATA_SUCCESS, response.data);
            }
            catch (error) {
                return commit(FETCH_DATA_FAIL, error);
            }
        },

        async [UPLOAD_DATA] ({ commit, state }) {
            try {
                await axios.post(ENDPOINT_URL, { data: state.transcriptions });
                
                return commit(UPLOAD_DATA_SUCCESS);
            }
            catch (error) {
                return commit(UPLOAD_DATA_FAIL, error);
            }
        }
    }
});