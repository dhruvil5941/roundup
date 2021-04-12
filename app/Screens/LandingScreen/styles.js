import {StyleSheet, Platform, Dimensions} from 'react-native';
import * as colors from '../../assets/colors';

export default StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: colors.themeColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainHeadingText: {
    color: colors.titleTextColor,
    fontSize: 22,
    fontWeight: 'bold',
    // fontFamily: 'SFProText',
  },
  logInBtn: {
    width: Dimensions.get('window').width / 1.2,
    height: '5%',
    backgroundColor: colors.secondaryColor,
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
    backgroundColor: '#1FAD9E',
    borderRadius: 25,
    marginTop: '5%',
    justifyContent: 'center',
    borderWidth: 0.3,
    borderColor: colors.white,
  },
  signUpBtnText: {
    textAlign: 'center',
    fontWeight: '700',
    color: colors.white,
  },
});
