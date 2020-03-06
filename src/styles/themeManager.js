import _ from 'lodash';

class ThemeManager {
  theme = {
    colors: require('./colors').default,
    spacings: require('./spacings').default,
    typography: require('./typography').default,
    borderRadiuses: require('./borderRadiuses').default,
  };

  setTheme(overrides) {
    this.theme = _.merge(this.theme, overrides);
  }

  getTheme() {
    return this.theme;
  }

  setItem(key, value) {
    _.set(this.theme, key, value);
  }

  getItem(key) {
    // return this.theme[key];
    return _.get(this.theme, key);
  }

  getFontFamily() {
    return this.theme.typography['fontFamily'];
  }

  setFontFamily(fontFamily) {
    this.theme.typography['fontFamily'] = fontFamily;
  }
}

export default new ThemeManager();
