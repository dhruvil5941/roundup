import {Dimensions, StyleSheet} from 'react-native';
import * as colors from '../../assets/colors';

export default StyleSheet.create({
  buttonStyle: {
    justifyContent: 'center',
    borderRadius: 25,
    height: 45,
    width: Dimensions.get('window').width / 1.4,
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: '700',
  },
});
