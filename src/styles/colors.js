import { StyleSheet } from 'react-native';

export default {
  primary: '#2089dc',
  secondary: '#8F0CE8',
  // GRAYS
  grey0: '#393e42',
  grey1: '#43484d',
  grey2: '#5e6977',
  grey3: '#86939e',
  grey4: '#bdc6cf',
  grey5: '#e1e8ee',
  // GREENS
  green10: '#00A36F',
  green20: '#00B47A',
  green30: '#00CD8B',
  green40: '#45DBAA',
  green50: '#87E7C8',
  green60: '#B2F0DC',
  green70: '#CFF6E9',
  green80: '#E3FAF2',
  // ACTIONS
  success: '#52c41a',
  error: '#ff190c',
  warning: '#faad14',

  disabled: 'hsl(208, 8%, 90%)',
  // Darker color if hairlineWidth is not thin enough
  divider: StyleSheet.hairlineWidth < 1 ? '#bcbbc1' : 'rgba(0, 0, 0, 0.12)',
};
