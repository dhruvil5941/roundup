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
    marginTop: '5%',
    textAlign: 'center',
  },
  discView: {
    width: Dimensions.get('window').width - 35,
    marginTop: '2%',
    alignSelf: 'center',
  },
  discText: {fontSize: 14, color: '#808080', textAlign: 'center'},
  queTitle: {
    fontWeight: '700',
    fontSize: 14,
    marginTop: '6%',
    marginStart: '4%',
  },
  pickerView: {
    width: Dimensions.get('window').width - 35,
    borderWidth: 0.3,
    borderRadius: 4,
    alignSelf: 'center',
    marginTop: '2%',
  },
  BtnView: {
    width: Dimensions.get('window').width / 1.2,
    height: '5%',
    backgroundColor: '#1FAD9E',
    borderRadius: 25,
    justifyContent: 'center',
    borderWidth: 0.3,
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
