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
    return require('./styles').Colors;
  },
  get BorderRadiuses() {
    return require('./styles').BorderRadiuses;
  },
  get Spacings() {
    return require('./styles').Spacings;
  },
  get ThemeManager() {
    return require('./styles').ThemeManager;
  },
  get Typography() {
    return require('./styles').Typography;
  },
};
