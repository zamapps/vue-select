import { mountDefault } from '../helpers';

/**
 * Breaking change to the slot signature: {option} is no longer a valid key
 * Breaking change: removed selected-option-container
 */

describe('Scoped Slots', () => {
  let receiveProps = props => receivedSlotProps = props;
  let receivedSlotProps;

  beforeEach(() => receivedSlotProps = null);

  describe('Slot: selected-option', () => {
    it('receives an option object in the selected-option slot', () => {
      mountDefault(
        {value: 'one'},
        {scopedSlots: {'selected-option': receiveProps}},
      );
      expect(receivedSlotProps.label).toEqual('one');
      expect(receivedSlotProps.hasOwnProperty('bindings')).toBeTruthy();
      expect(receivedSlotProps.hasOwnProperty('events')).toBeTruthy();
      expect(receivedSlotProps.hasOwnProperty('deselect')).toBeTruthy();
    });

    xit('opens the dropdown when clicked', () => {
        const Select = mountDefault(
          {value: 'one'},
          {
            scopedSlots: {
              'selected-option': `<span class="my-option" slot-scope="option">{{ option.label }}</span>`,
            },
          });

        Select.find('.my-option').trigger('mousedown');
        expect(Select.vm.open).toEqual(true);
      });
  });

  describe('Slot: option', () => {
    it('receives an option object in the option slot', async () => {
      const {vm} = mountDefault(
        {value: 'one', options: ['one']},
        {scopedSlots: {option: receiveProps}},
      );
      vm.open = true;

      await vm.$nextTick();
      expect(receivedSlotProps.label).toEqual('one');
      expect(receivedSlotProps.hasOwnProperty('attributes')).toBeTruthy();
      expect(receivedSlotProps.hasOwnProperty('events')).toBeTruthy();
    });
  });

});
