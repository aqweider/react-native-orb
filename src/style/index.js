module.exports = {
  get Spacings() {
    return require('./spacings').default;
  },
  get Colors() {
    return require('./colors').default;
  },
  get Typography() {
    return require('./typography').default;
  },
  get ThemeManager() {
    return require('./themeManager').default;
  },
  get BorderRadiuses() {
    return require('./borderRadiuses').default;
  },
};
