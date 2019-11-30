module.exports = {
  // Commons
  get UIComponent() {
    return require('./commons').UIComponent;
  },
  get forwardRef() {
    return require('./commons').forwardRef;
  },

  // Helpers
  get Constants() {
    return require('./helpers').Constants;
  },
  // Style
  get Colors() {
    return require('./style').Colors;
  },
  get BorderRadiuses() {
    return require('./style').BorderRadiuses;
  },
  get Spacings() {
    return require('./style').Spacings;
  },
  get Components() {
    return require('./style').Components;
  },
  get ThemeManager() {
    return require('./style').ThemeManager;
  },
  get Typography() {
    return require('./style').Typography;
  },
};
