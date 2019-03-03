import { expect } from 'chai';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';

import Header from '@/components/Header.vue';
import Button from '@/components/Button.vue';
import { UPLOAD_DATA, FETCH_DATA } from '../../src/store/action-types';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('Header.vue', () => {
    let store = null;
    let isFetched = false;
    let dataUploaded = false;
    let dataFetched = false;

    let actions = {
        [UPLOAD_DATA]: () => dataUploaded = true,
        [FETCH_DATA]: () => dataFetched = true
    };

    beforeEach(() => {
        dataUploaded = false;
        dataFetched = false;

        store = new Vuex.Store({
            state: {
                get isFetched () {
                    return isFetched;
                }
            },

            actions
        });
    });

    it('Should render header and two buttons', () => {
        const wrapper = shallowMount(Header, { store, localVue });

        expect(wrapper.find('h1').text()).eql('Transcriptions');
        expect(wrapper.findAll(Button).length).eql(2);
    });

    it('upload button should be disabled if data is not fetched', () => {
        const wrapper = shallowMount(Header, { store, localVue });

        expect(wrapper.findAll(Button).wrappers[0].attributes('disabled')).eql('true');
    });

    it('upload button should be enabled if itemsNumber is greater than zero', () => {
        isFetched = true;

        const wrapper = shallowMount(Header, { store, localVue });

        expect(wrapper.findAll(Button).wrappers[0].attributes('disabled')).not.to.exist;
    });

    it('Should Upload transcriptions on first button click', () => {
        isFetched = true;

        const wrapper = shallowMount(Header, { store, localVue });

        wrapper.findAll(Button).wrappers[0].trigger('click');

        expect(dataUploaded).eql(true);
    });

    it('Should Fetch transcriptions on second button click', () => {
        const wrapper = shallowMount(Header, { store, localVue });

        wrapper.findAll(Button).wrappers[1].trigger('click');

        expect(dataFetched).eql(true);
    });
});
