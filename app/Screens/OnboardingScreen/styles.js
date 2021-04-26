import {StyleSheet, Dimensions} from 'react-native';
import * as colors from '../../assets/colors';
import Color from '../../theme/Color';

export default StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: Color.white,
  },
  mainHeadingText: {
    fontWeight: 'bold',
    fontSize: 22,
    color: Color.themeColor,
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
    borderColor: Color.white,
    marginTop: '15%',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: Color.black,
    shadowOpacity: 1.0,
    elevation: 2,
  },
  bottomTrayBtn: {marginTop: '6%', alignSelf: 'center'},
  bottomTrayBtnText: {
    textAlign: 'center',
    fontWeight: '700',
    color: Color.white,
  },
  imageStyle: {width: '100%', height: '100%'},
  bottomView: {marginBottom: '6%', position: 'relative'},
});
