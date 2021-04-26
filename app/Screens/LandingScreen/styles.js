import {StyleSheet, Platform, Dimensions} from 'react-native';
import Color from '../../theme/Color';

export default StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: Color.themeColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainHeadingText: {
    color: Color.titleTextColor,
    fontSize: 22,
    fontWeight: 'bold',
    // fontFamily: 'SFProText',
  },
  logInBtn: {
    width: Dimensions.get('window').width / 1.2,
    height: '5%',
    backgroundColor: Color.secondaryColor,
    borderRadius: 25,
    marginTop: '20%',
    justifyContent: 'center',
  },
  logInBtnText: {
    textAlign: 'center',
    fontWeight: '700',
    // fontFamily: 'SFProText',
  },
  signUpBtn: {
    width: Dimensions.get('window').width / 1.2,
    height: '5%',
    backgroundColor: Color.themeColor,
    borderRadius: 25,
    marginTop: '5%',
    justifyContent: 'center',
    borderWidth: 0.3,
    borderColor: Color.white,
  },
  signUpBtnText: {
    textAlign: 'center',
    fontWeight: '700',
    color: Color.white,
  },
});
