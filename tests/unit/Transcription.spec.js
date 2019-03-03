import { expect } from 'chai';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';

import Transcription from '@/components/Transcription.vue';
import CheckBox from '@/components/CheckBox.vue';
import Button from '@/components/Button.vue';
import { TOGGLE_TRANSCRIPTION_CHECKED, REMOVE_TRANSCRIPTION } from '../../src/store/mutatuion-types';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('Transcription.vue', () => {
    let store = null;
    let checked = {};
    let checkedId = -1;
    let removedId = -1;
    const item = {
        id: 123,
        voice: 'Some name',
        text: 'Lorem ipsum'
    };

    let mutations = {
        [TOGGLE_TRANSCRIPTION_CHECKED]: (state, id) => {
            checkedId = id;
        },

        [REMOVE_TRANSCRIPTION]: (state, id) => {
            removedId = id;
        }
    };

    beforeEach(() => {
        checked = {};
        checkedId = -1;
        removedId = -1;

        store = new Vuex.Store({
            state: {
                get checked () {
                    return checked;
                }
            },

            mutations
        });
    });

    it('should render data from passed item', () => {
        const wrapper = shallowMount(Transcription, { store, localVue, propsData: { item } });
        const checkBox = wrapper.find(CheckBox);

        expect(wrapper.find(CheckBox)).to.exist;
        expect(checkBox.vm.checked).eql(false);
        expect(wrapper.find('input').element.value).eql(item.voice);
        expect(wrapper.find('textarea').element.value).eql(item.text);
    });

    it('should take checked state from store', () => {
        checked = { [item.id]: true };

        const wrapper = shallowMount(Transcription, { store, localVue, propsData: { item } });

        expect(wrapper.vm.checked).eql(true);
    });

    it('should change checked state by id', () => {
        const wrapper = shallowMount(Transcription, { store, localVue, propsData: { item } });

        wrapper.find(CheckBox).trigger('click');

        expect(checkedId).eql(item.id);
    });

    it('should remove item by id', () => {
        const wrapper = shallowMount(Transcription, { store, localVue, propsData: { item } });

        wrapper.find(Button).trigger('click');

        expect(removedId).eql(item.id);
    });
});


