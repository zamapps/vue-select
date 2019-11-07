export default {
  //  delete
  8: e => this.maybeDeleteValue(),

  //  tab
  9: e => this.onTab(),

  //  enter.prevent
  13: e => {
    e.preventDefault();
    return this.typeAheadSelect();
  },

  //  esc
  27: e => this.onEscape(),

  //  up.prevent
  38: e => {
    e.preventDefault();
    return this.typeAheadUp();
  },

  //  down.prevent
  40: e => {
    e.preventDefault();
    return this.typeAheadDown();
  },
};
