import {StyleSheet, Platform, Dimensions} from 'react-native';
import * as colors from '../../assets/colors';

export default StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: '#FFF',
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
    color: '#424242',
  },
  discView: {
    width: Dimensions.get('window').width / 1.2,
    marginTop: '5%',
    alignSelf: 'center',
  },
  discText: {fontSize: 14, color: '#808080', textAlign: 'center'},
  queTitle: {
    fontWeight: '700',
    fontSize: 14,
    marginTop: '6%',
    marginStart: '4%',
    color: '#424242',
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
    color: '#FFF',
  },
});
