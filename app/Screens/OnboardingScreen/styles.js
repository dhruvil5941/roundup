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
    bottom: '2%',
  },
  newimgView: {
    marginTop: '18%',
    flex: 1,
    paddingVertical: '5%',
    height: Dimensions.get('window').height / 2.3,
    width: Dimensions.get('window').width - 35,
    alignSelf: 'center',
    bottom: '2%',
  },
  bottomTray: {
    borderTopWidth: 0.3,
    borderColor: colors.white,
    marginTop: '15%',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: colors.black,
    shadowOpacity: 1.0,
    elevation: 2,
  },
  bottomTrayBtn: {marginTop: '6%', alignSelf: 'center'},
  bottomTrayBtnText: {
    textAlign: 'center',
    fontWeight: '700',
    color: colors.white,
  },
});
