import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  stepperView: {marginTop: '5%' },
  swiperView: { bottom: '2%' },
  titleText: {
    color: '#000',
    fontSize: 18,
    textAlign: 'center',
    marginTop: '3%',
  },
  pieView: {alignItems: 'center', marginTop: '5%'},
  riskText: {
    color: '#000',
    fontSize: 15,
    fontWeight: '600',
  },
  middleText: {
    color: '#1FAD9E',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: '3%',
  },
  portfolioName: {
    color: '#1FAD9E',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  portfolioTypes: {
    width: Dimensions.get('window').width - 25,
    alignSelf: 'center',
    marginTop: '5%',
    height: '33%',
  },
  portfolioTypesList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '8%',
  },
  listName: {
    width: Dimensions.get('window').width / 1.5,
    fontSize: 16,
  },
  buttonView: {
    width: Dimensions.get('window').width / 1.2,
    height: 45,
    backgroundColor: '#1FAD9E',
    borderRadius: 15,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: '5%',
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: '700',
    color: '#FFF',
    fontSize: 16,
  },
});
