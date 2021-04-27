import {Dimensions, StyleSheet} from 'react-native';
import Color from '../../theme/color';

export default StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: Color.white,
  },
  stepperView: {marginTop: '5%'},
  swiperView: {bottom: '2%'},
  titleText: {
    color: Color.black,
    fontSize: 18,
    textAlign: 'center',
    marginTop: '8%',
  },
  pieView: {alignItems: 'center', marginTop: '5%'},
  riskText: {
    color: Color.black,
    fontSize: 15,
    fontWeight: '600',
  },
  middleText: {
    color: Color.themeColor,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: '3%',
  },
  portfolioName: {
    color: Color.themeColor,
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
    backgroundColor: Color.themeColor,
    borderRadius: 15,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: '5%',
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: '700',
    color: Color.white,
    fontSize: 16,
  },
  swiper: {flexGrow: 1},
  riskLableText: {marginStart: '5%', marginTop: '4%'},
  portfolioText: {marginStart: '5%', marginTop: '3%'},
  percentageText: {fontSize: 16},
  portfolioTextStyle: {
    marginTop: '10%',
    flex: 1,
    bottom: '4%',
  },
  buttonStyle: {marginTop: '15%', flex: 1},
  loader: {justifyContent: 'center', alignItems: 'center', flex: 1},
});
