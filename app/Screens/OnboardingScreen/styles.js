import {StyleSheet, Dimensions} from 'react-native';
import * as colors from '../../assets/colors';

export default StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: colors.white,
  },
  mainHeadingText: {
    fontWeight: 'bold',
    fontSize: 22,
    color: colors.themeColor,
    marginTop: '20%',
    textAlign: 'center',
  },
  descView: {
    width: Dimensions.get('window').width - 35,
    marginTop: '10%',
    alignSelf: 'center',
  },
  descText: {
    textAlign: 'center',
    fontSize: 15,
  },
  imgView: {
    width: Dimensions.get('window').width - 35,
    height: Dimensions.get('window').height / 2.8,
    alignSelf: 'center',
    marginTop: '15%',
  },
  bottomTray: {
    borderTopWidth: 0.3,
    borderColor: colors.sparatorColor,
    marginTop: '15%',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: colors.black,
    shadowOpacity: 1.0,
    elevation: 2,
  },
  bottomTrayBtn: {marginTop: '6%', alignSelf: 'center', height: 40},
  bottomTrayBtnText: {
    textAlign: 'center',
    fontWeight: '700',
    color: colors.white,
  },
});
