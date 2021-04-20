import {StyleSheet, Dimensions} from 'react-native';
import * as colors from '../../assets/colors';

export default StyleSheet.create({
  mainView: {
    flex: 1,
    alignItems: 'center',
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
    marginTop: '20%',
  },
  descText: {
    textAlign: 'center',
    fontSize: 15,
  },
  imgView: {
    width: Dimensions.get('window').width - 35,
    marginTop: '25%',
    height: 270,
    alignItems: 'center',
  },
  bottomTray: {
    width: Dimensions.get('window').width / 1,
    borderTopWidth: 0.3,
    borderColor: colors.sparatorColor,
    position: 'absolute',
    bottom: '12%',
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowColor: colors.black,
    shadowOpacity: 1.0,
    elevation: 2,
  },
  bottomTrayBtn: {
    position: 'absolute',
    bottom: '5%',
  },
  bottomTrayBtnText: {
    textAlign: 'center',
    fontWeight: '700',
    color: colors.white,
  },
});
