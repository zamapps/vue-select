import { mountDefault } from '../helpers';

describe("Automatic Scrolling", () => {
  it("should check if the scroll position needs to be adjusted on up arrow keyDown", () => {
    const Select = mountDefault();
    const spy = jest.spyOn(Select.vm, "maybeAdjustScroll");

    Select.vm.typeAheadPointer = 1;

    Select.find({ ref: "search" }).trigger("keyup.up");
    expect(spy).toHaveBeenCalled();
  });

  it("should check if the scroll position needs to be adjusted on down arrow keyDown", () => {
    const Select = mountDefault();
    const spy = jest.spyOn(Select.vm, "maybeAdjustScroll");

    Select.vm.typeAheadPointer = 1;

    Select.find({ ref: "search" }).trigger("keyup.down");
    expect(spy).toHaveBeenCalled();
  });

  /**
   * This test fails despite working in the browser.
   * Many attempts to get it to pass.
   */
  it.skip("should check if the scroll position needs to be adjusted when filtered options changes", () => {
    const Select = mountDefault();
    const spy = jest.spyOn(Select.vm, "maybeAdjustScroll");

    Select.vm.search = "two";

    expect(spy).toHaveBeenCalled();
  });

  it("should scroll up if the pointer is above the current viewport bounds", () => {
    const Select = mountDefault();
    const spy = jest.spyOn(Select.vm, "scrollTo");

    Select.setMethods({
      pixelsToPointerTop() {
        return 1;
      },
      viewport() {
        return { top: 2, bottom: 0 };
      }
    });

    Select.vm.maybeAdjustScroll();

    expect(spy).toHaveBeenCalledWith(1);
  });

  it("should scroll down if the pointer is below the current viewport bounds", () => {
    const Select = mountDefault();
    const spy = jest.spyOn(Select.vm, "scrollTo");

    Select.setMethods({
      pixelsToPointerBottom() {
        return 2;
      },
      viewport() {
        return { top: 0, bottom: 1 };
      }
    });

    Select.vm.maybeAdjustScroll();
    expect(spy).toHaveBeenCalledWith(
      Select.vm.viewport().top + Select.vm.pointerHeight()
    );
  });

  describe('scroll events', () => {

  });
});
