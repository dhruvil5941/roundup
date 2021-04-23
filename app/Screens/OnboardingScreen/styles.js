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
    alignSelf: 'center',
  },
  descText: {
    textAlign: 'center',
    fontSize: 15,
  },
  imgView: {
    width: Dimensions.get('window').width - 35,
    marginTop: '25%',
    height: 270,
    alignSelf: 'center',
    bottom: '2%',
  },
  bottomTray: {
    width: Dimensions.get('window').width,
    borderTopWidth: 0.4,
    borderTopColor: colors.sparatorColor,
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowColor: colors.black,
    shadowOpacity: 0.2,
    elevation: 1,
    height: '14%',
    bottom: 0,
    justifyContent: 'center',
    backgroundColor: '#FFF',
  },
  bottomTrayBtn: {
    position: 'relative',
    alignSelf: 'center',
    shadowOpacity: 0,
  },
  bottomTrayBtnText: {
    textAlign: 'center',
    fontWeight: '700',
    color: colors.white,
  },
});
