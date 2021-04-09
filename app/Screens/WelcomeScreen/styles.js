import {StyleSheet, Dimensions} from 'react-native';
import * as colors from '../../asset/colors';

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
    marginTop: '15%',
  },
  descView: {
    width: Dimensions.get('window').width - 35,
    marginTop: '10%',
  },
  descText: {
    textAlign: 'center',
    fontSize: 15,
  },
  imgView: {
    width: Dimensions.get('window').width - 35,
    marginTop: '10%',
    height: '30%',
    alignItems: 'center'
  },
  bottomTray: {
    width: Dimensions.get('window').width / 1,
    borderBottomWidth: 0.3,
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
    width: Dimensions.get('window').width / 1.2,
    height: '5%',
    backgroundColor: colors.themeColor,
    borderRadius: 25,
    justifyContent: 'center',
    borderWidth: 0.3,
    position: 'absolute',
    bottom: '5%',
  },
  bottomTrayBtnText: {
    textAlign: 'center',
    fontWeight: '700',
    color: colors.white,
  },
});
