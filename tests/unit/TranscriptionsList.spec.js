import { expect } from 'chai';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';

import TranscriptionsList from '@/components/TranscriptionsList.vue';
import Transcription from '@/components/Transcription.vue';
import Button from '@/components/Button.vue';
import { ADD_TRANSCRIPTION } from '../../src/store/mutatuion-types';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('TranscriptionsList.vue', () => {
  let store = null;
  let transcriptions = [];
  let isAddCalled = false;
  let mutations = {
    [ADD_TRANSCRIPTION]: () => {
      isAddCalled = true;
    }
  };

  beforeEach(() => {
    transcriptions.length = 0;
    isAddCalled = false;

    store = new Vuex.Store({
      state: {
        get transcriptions () {
          return transcriptions;
        },

        checked: {}
      },

      mutations
    });
  });

  it('should not render list and button if there is no transcriptions', () => {
    const wrapper = shallowMount(TranscriptionsList, { store, localVue });

    expect(wrapper.contains('ul')).eql(false);
    expect(wrapper.findAll(Button).length).eql(0);
  });

  it('should render Transcription component for each item in state and "add" button', () => {
    transcriptions = [{ id: 0, voice: '', text: '' }, { id: 1, voice: '', text: '' }];

    const wrapper = shallowMount(TranscriptionsList, { store, localVue });

    expect(wrapper.contains('ul')).eql(true);
    expect(wrapper.findAll(Transcription).length).eql(2);
    expect(wrapper.findAll(Button).length).eql(1);
  });

  it('should add transcription on add button click', () => {
    transcriptions = [{ id: 0, voice: '', text: '' }];

    const wrapper = shallowMount(TranscriptionsList, { store, localVue });

    wrapper.find(Button).trigger('click');

    expect(isAddCalled).eql(true);
  });
})
