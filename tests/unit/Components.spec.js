import Vue from 'vue';
import { mountDefault, selectWithProps } from '../helpers';
import components from '../../src/components/childComponents';

describe('Components API', () => {

  it('uses the default components', () => {
    const Select = mountDefault();
    expect(Select.contains(components.Deselect)).toBeTruthy();
    expect(Select.contains(components.OpenIndicator)).toBeTruthy();
  });

  it('swap the Deselect component', () => {
    const Deselect = Vue.component('Deselect', {
      render: (createElement) => createElement('span', 'remove'),
    });

    const Select = selectWithProps({components: {Deselect}, multiple: true});

    expect(Select.contains(Deselect)).toBeTruthy();
  });

  it('swap the OpenIndicator component', () => {
    const OpenIndicator = Vue.component('OpenIndicator', {
      render: (createElement) => createElement('i', '^'),
    });

    const Select = selectWithProps({components: {OpenIndicator}});

    expect(Select.contains(OpenIndicator)).toBeTruthy();
  });

});
