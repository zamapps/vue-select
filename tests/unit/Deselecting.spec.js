import { mount } from '@vue/test-utils';
import { selectWithProps } from '../helpers';
import VueSelect from '../../src/components/Select.vue';

describe("Removing values", () => {
  it("can remove the given tag when its close icon is clicked", () => {
    const Select = mount(VueSelect, {
      propsData: {
        multiple: true,
        options: ['foo', 'bar'],
        value: 'foo',
      },
    });

    const deselect = jest.spyOn(Select.vm, 'deselect');

    Select.find("button.vs__deselect").trigger("click");

    expect(deselect).toHaveBeenCalled();
  });

  it("should not remove tag when close icon is clicked and component is disabled", () => {
    const Select = selectWithProps({
      value: ["one"],
      options: ["one", "two", "three"],
      multiple: true,
      disabled: true
    });

    Select.find(".vs__deselect").trigger("click");
    expect(Select.vm.selectedValue).toEqual(["one"]);
  });

  it("should remove the last item in the value array on delete keypress when multiple is true", () => {
    const Select = selectWithProps({
      multiple: true,
      options: ["one", "two", "three"]
    });

    Select.vm.$data._value = ["one", "two"];

    Select.find('.vs__search').trigger('keydown.backspace')

    expect(Select.emitted().input).toEqual([[['one']]]);
    expect(Select.vm.selectedValue).toEqual(["one"]);
  });

  it("should set value to null on delete keypress when multiple is false", () => {
    const Select = selectWithProps({
      options: ["one", "two", "three"]
    });

    Select.vm.$data._value = 'one';

    Select.vm.maybeDeleteValue();
    expect(Select.vm.selectedValue).toEqual([]);
  });

  describe("Clear button", () => {
    it("should be displayed on single select when value is selected", () => {
      const Select = selectWithProps({
        options: ["foo", "bar"],
        value: "foo"
      });

      expect(Select.vm.showClearButton).toEqual(true);
      expect(Select.find('.vs__clear').isVisible()).toBe(true);
    });

    it("should not be displayed on multiple select", () => {
      const Select = mount(VueSelect, {
        propsData: {
          multiple: true,
          options: ['foo', 'bar'],
          value: 'foo',
        },
      });

      expect(Select.vm.showClearButton).toEqual(false);
      expect(Select.find('.vs__clear').isVisible()).toBe(false);
    });

    it("should remove selected value when clicked", async () => {
      const Select = mount(VueSelect, {
        propsData: {
          options: ['foo', 'bar'],
          value: 'foo',
        },
      });

      const spy = jest.spyOn(Select.vm, 'clearSelection');

      Select.find('button.vs__clear').trigger("click");

      expect(spy).toHaveBeenCalled();
    });

    it("should be disabled when component is disabled", () => {
      const Select = mount(VueSelect, {
        propsData: {
          disabled: true,
          options: ['foo', 'bar'],
          value: 'foo',
        },
      });

      expect(Select.find("button.vs__clear").attributes().disabled).toEqual(
        "disabled"
      );
    });
  });
});
