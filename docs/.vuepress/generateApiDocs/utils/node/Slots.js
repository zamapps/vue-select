module.exports = class Slots {
  constructor (slots = {}) {
    this.slots = slots;
  }

  add (name, slot) {
    this.slots[name] = slot;
    return this;
  }

  get definitions () {
    return this.slots;
  }

  absorb (slots) {
    this.slots.map()
  }
};
