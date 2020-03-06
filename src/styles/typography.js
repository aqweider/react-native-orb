import _ from 'lodash';
import { Constants } from '../helpers';

const WEIGHT_TYPES = {
  ULIGHT: '100',
  THIN: '200',
  LIGHT: '300',
  REGULAR: '400',
  MEDIUM: '500',
  THICK: '600',
  BOLD: '700',
  BLACK: '900',
};

class Typography {
  static fontFamily = 'System';

  text10 = {
    fontSize: 64,
    fontWeight: WEIGHT_TYPES.ULIGHT,
    lineHeight: Math.floor(64 * 1.4),
    fontFamily: Typography.fontFamily,
  };
  text20 = {
    fontSize: 50,
    fontWeight: WEIGHT_TYPES.ULIGHT,
    lineHeight: Math.floor(50 * 1.4),
    fontFamily: Typography.fontFamily,
  };
  text30 = {
    fontSize: 36,
    fontWeight: Constants.isAndroid ? WEIGHT_TYPES.ULIGHT : WEIGHT_TYPES.THIN,
    lineHeight: Math.floor(36 * 1.3),
    fontFamily: Typography.fontFamily,
  };
  text40 = {
    fontSize: 28,
    fontWeight: WEIGHT_TYPES.LIGHT,
    lineHeight: Constants.isAndroid ? Math.floor(28 * 1.4) : Math.floor(28 * 1.21),
    fontFamily: Typography.fontFamily,
  };
  text50 = {
    fontSize: Constants.isAndroid ? 24 : 22,
    fontWeight: WEIGHT_TYPES.LIGHT,
    lineHeight: Constants.isAndroid ? Math.floor(24 * 1.17) : Math.floor(22 * 1.27),
    fontFamily: Typography.fontFamily,
  };
  text60 = {
    fontSize: 20,
    fontWeight: WEIGHT_TYPES.LIGHT,
    lineHeight: Math.floor(20 * 1.2),
    fontFamily: Typography.fontFamily,
  };
  text70 = {
    fontSize: Constants.isAndroid ? 16 : 17,
    fontWeight: WEIGHT_TYPES.LIGHT,
    lineHeight: Constants.isAndroid ? Math.floor(16 * 1.38) : Math.floor(17 * 1.29),
    fontFamily: Typography.fontFamily,
  };
  text80 = {
    fontSize: Constants.isAndroid ? 14 : 15,
    fontWeight: WEIGHT_TYPES.LIGHT,
    lineHeight: Constants.isAndroid ? Math.floor(14 * 1.33) : Math.floor(15 * 1.33),
    fontFamily: Typography.fontFamily,
  };
  text90 = {
    fontSize: Constants.isAndroid ? 12 : 13,
    fontWeight: WEIGHT_TYPES.LIGHT,
    lineHeight: Constants.isAndroid ? Math.floor(12 * 1.33) : Math.floor(13 * 1.38),
    fontFamily: Typography.fontFamily,
  };
  text100 = {
    fontSize: Constants.isAndroid ? 10 : 11,
    fontWeight: WEIGHT_TYPES.LIGHT,
    lineHeight: Constants.isAndroid ? Math.floor(10 * 1.18) : Math.floor(11 * 1.18),
    fontFamily: Typography.fontFamily,
  };

  keysPattern = this.generateKeysPattern();

  /**
   * Load custom set of typographies
   * arguments:
   * typographies - map of keys and typography values
   * e.g {text15: {fontSize: 58, fontWeight: '100', lineHeight: Math.floor(58 * 1.4)}}
   */
  loadTypographies(typographies) {
    _.forEach(typographies, (value, key) => {
      this[key] = value;
    });
    this.keysPattern = this.generateKeysPattern();
  }

  getKeysPattern() {
    return this.keysPattern;
  }

  generateKeysPattern() {
    return new RegExp(
      _.chain(this)
        .keys()
        .map(key => [`${key}`])
        .flatten()
        .join('|')
        .value()
    );
  }
}

export default new Typography();
