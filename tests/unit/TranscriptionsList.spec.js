import { expect } from 'chai';
import { mount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';

import TranscriptionsList from '@/components/TranscriptionsList.vue';
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
  }

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

  it('should not render list if there is no transcriptions', () => {
    const wrapper = mount(TranscriptionsList, { store, localVue });

    expect(wrapper.contains('ul')).eql(false);
  });

  it('should render list item for each transcription', () => {
    transcriptions = [{ id: 0, voice: '', text: '' }, { id: 1, voice: '', text: '' }];

    const wrapper = mount(TranscriptionsList, { store, localVue });

    expect(wrapper.contains('ul')).eql(true);
    expect(wrapper.findAll('li').length).eql(2);
  });

  it('should add transcription on add button click', () => {
    const wrapper = mount(TranscriptionsList, { store, localVue });

    wrapper.find('button').trigger('click');

    expect(isAddCalled).eql(true);
  });
})
