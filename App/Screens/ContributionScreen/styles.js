import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  text: {
    color: '#101010',
    fontSize: 24,
    fontWeight: 'bold',
  },
  stockListView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '5%',
    width: Dimensions.get('window').width - 70,
    alignSelf: 'center',
  },
  stockName: {
    color: '#000',
    fontSize: 14,
    textAlign: 'center',
  },
  stockPrice: {
    color: '#000',
    fontSize: 14,
  },
  buttonView: {
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: '5%',
  },
  newButtonView: {
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
  roundUpView: {
    flexDirection: 'row',
    width: Dimensions.get('window').width / 1.4,
    alignSelf: 'center',
    justifyContent: 'space-between',
    marginTop: '5%',
    alignItems: 'center',
    flex: 1,
  },
  roundUpText: {fontSize: 20, fontWeight: '400'},
  monthView: {
    borderWidth: 0.5,
    borderColor: '#BDBDBD',
    width: '40%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },
  monthText: {fontSize: 13, color: '#9E9E9E'},
});
