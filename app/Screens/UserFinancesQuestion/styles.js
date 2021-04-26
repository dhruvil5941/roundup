import {StyleSheet, Platform, Dimensions} from 'react-native';
import * as colors from '../../assets/colors';
import Color from '../../theme/Color';

export default StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: Color.white,
  },
  scrollView: {
    marginBottom: '20%',
    flex: 1,
  },
  mainHeadingText: {
    fontWeight: '700',
    fontSize: 18,
    marginTop: '8%',
    textAlign: 'center',
    color: Color.defaultTextColor,
  },
  discView: {
    width: Dimensions.get('window').width / 1.2,
    marginTop: '5%',
    alignSelf: 'center',
  },
  discText: {fontSize: 14, color: Color.sparatorColor, textAlign: 'center'},
  queTitle: {
    fontWeight: '700',
    fontSize: 14,
    marginTop: '6%',
    marginStart: '4%',
    color: Color.defaultTextColor,
  },
  pickerView: {
    width: Dimensions.get('window').width - 35,
    borderRadius: 4,
    alignSelf: 'center',
    marginTop: '3%',
  },
  BtnView: {
    position: 'absolute',
    bottom: '5%',
    alignSelf: 'center',
  },
  BtnText: {
    textAlign: 'center',
    fontWeight: '700',
    color: Color.white,
  },
});
