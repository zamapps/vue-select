import { shallowMount } from '@vue/test-utils';
import VueSelect from "../../src/components/Select";
import { mountDefault, mountWithoutTestUtils } from '../helpers';
import typeAheadMixin from '../../src/mixins/typeAheadPointer';
import Vue from 'vue';

describe("Moving the Typeahead Pointer", () => {

  it('should set the pointer to zero when the filteredOptions watcher is called', async () => {
    const Select = shallowMount(VueSelect, {
      propsData: { options: ['one', 'two', 'three'] },
      sync: false
    });

    Select.vm.search = 'one';

    await Select.vm.$nextTick();
    expect(Select.vm.typeAheadPointer).toEqual(0);
  });

  it("should move the pointer visually up the list on up arrow keyDown", () => {
    const Select = mountDefault();

    Select.vm.typeAheadPointer = 1;

    Select.find({ ref: "search" }).trigger("keyup.up");

    expect(Select.vm.typeAheadPointer).toEqual(0);
  });

  it("should move the pointer visually down the list on down arrow keyDown", () => {
    const Select = mountDefault();

    Select.vm.typeAheadPointer = 1;

    Select.find({ ref: "search" }).trigger("keyup.down");

    expect(Select.vm.typeAheadPointer).toEqual(2);
  });

  it("should not move the pointer past the end of the list", () => {
    const Select = mountDefault();

    Select.vm.typeAheadPointer = 2;
    Select.vm.typeAheadDown();
    expect(Select.vm.typeAheadPointer).toEqual(2);
  });

  describe("Measuring pixel distances", () => {
    it("should calculate pointerHeight as the offsetHeight of the pointer element if it exists", () => {
      const Select = mountDefault();

      // Drop down must be open for $refs to exist
      Select.vm.open = true;

      /**
       * Since JSDom doesn't render layouts, set the offsetHeight explicitly
       * to 25px for each list item.
       *
       * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty
       */
      let i = 0;
      for (let option of Select.vm.$refs.dropdownMenu.children) {
        Object.defineProperty(option, "offsetHeight", {
          value: 1 + i
        });
        i++;
      }

      //  Fresh instances start with the pointer at -1
      Select.vm.typeAheadPointer = -1;
      expect(Select.vm.pointerHeight()).toEqual(0);

      Select.vm.typeAheadPointer = 0;
      expect(Select.vm.pointerHeight()).toEqual(1);

      Select.vm.typeAheadPointer = 1;
      expect(Select.vm.pointerHeight()).toEqual(2);

      Select.vm.typeAheadPointer = 2;
      expect(Select.vm.pointerHeight()).toEqual(3);
    });
  });
});
