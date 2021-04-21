import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  roundUpText: {
    fontSize: 20,
    fontWeight: '400',
    marginTop: '5%',
  },
  roundUpOpstion: {
    fontSize: 20,
    fontWeight: '400',
    marginTop: '5%',
    marginStart: '5%',
  },
  buttonView: {
    width: '32%',
    justifyContent: 'center',
    alignSelf: 'center',
    overflow: 'hidden',
    marginStart: '1%'
  },
  newbuttonView: {
    // backgroundColor: '#e0e0e0',
    width: '33%',
    height: 35,
    borderRadius: 15,
    justifyContent: 'center',
    alignSelf: 'center',
    overflow: 'hidden',
  },
  monthView: {
    borderWidth: 0.5,
    borderColor: '#BDBDBD',
    width: '40%',
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    marginTop: '5%',
    marginStart: '5%',
    flex: 1,
  },
  monthText: {fontSize: 13, color: '#9E9E9E'},
});
