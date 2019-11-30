module.exports = {
  get UIComponent() {
    return require('./UIComponent').default;
  },
  get asBaseComponent() {
    return require('./asBaseComponent').default;
  },
  get forwardRef() {
    return require('./forwardRef').default;
  },
};
