import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  ScrollView,
  ActivityIndicator,
  FlatList,
  Platform,
} from 'react-native';
import styles from './styles';
import * as colors from '../../assets/colors';
import Button from '../../Components/Button';
import RNPickerSelect from 'react-native-picker-select';

class ContributionsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      homeData: '',
        dropdownValue: 'Last 7 days',
    };
  }

  componentDidMount() {
    this.getPortfolioData();
  }
  getPortfolioData = () => {
    var requestOptions = {
      method: 'POST',
    };
    fetch(
      'https://run.mocky.io/v3/bc446207-813f-4c7a-9068-f9921c2c918c',
      requestOptions,
    )
      .then(response => response.text())
      .then(result => {
        this.setState({homeData: JSON.parse(result)});
      })
      .catch(error => console.log('error', error));
  };

  render() {
    const {homeData} = this.state;
    return (
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.roundUpView}>
            <Text style={styles.roundUpText}>Round Up Pool</Text>
            <View style={styles.monthView}>
              <Text style={styles.monthText}>March 2021</Text>
            </View>
          </View>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 24,
              color: '#4DAA89',
              marginTop: '5%',
              fontWeight: '600',
            }}>
            $92.38
          </Text>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 12,
              marginTop: '5%',
              color: '#9E9E9E',
              width: Dimensions.get('window').width - 50,
            }}>
            Funds in pool will be invested into recommended portfolio on the end
            of each month, and we will charge this amount to your linked bank
            account.
          </Text>
          <View
            style={{
              flexDirection: 'row',
              width: Dimensions.get('window').width / 1.2,
              alignSelf: 'flex-start',
              marginStart: '5%',
              marginTop: '5%',
              alignItems: 'center',
              flex: 1,
              justifyContent: 'space-between',
            }}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Contribution</Text>
            <View
              style={{
                borderWidth: 0.5,
                borderColor: '#BDBDBD',
                width: '50%',
                  // paddingHorizontal: '10%',
                height: 30,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 25,
                marginStart: '10%',
              }}>
              {/*<Text style={{fontSize: 13, color: '#9E9E9E'}}>March 2021</Text>*/}
              <RNPickerSelect
                onValueChange={value => this.setState({dropdownValue: value})}
                selectedValue={this.state.dropdownValue}
                value={this.state.dropdownValue}
                items={[
                  {label: 'Last 7 days', value: 'Last 7 days'},
                  {label: 'Last 14 days', value: 'Last 14 days'},
                  {label: 'Last month', value: 'Last month'},
                ]}
                style={{
                  ...pickerSelectStyles,
                  iconContainer: {
                    top: Platform.OS === 'ios' ? 5 : 22,
                    right: 5,
                  },
                }}
                Icon={() => {
                  return (
                    <View
                      style={{
                        backgroundColor: 'transparent',
                        borderTopWidth: 5,
                        borderTopColor: 'gray',
                        borderRightWidth: 5,
                        borderRightColor: 'transparent',
                        borderLeftWidth: 5,
                        borderLeftColor: 'transparent',
                        width: 0,
                        height: 0,
                        marginRight: '5%',
                        top: '85%',
                      }}
                    />
                  );
                }}
              />
            </View>
          </View>
          {!homeData ? (
            <View
              style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
              <ActivityIndicator size="large" color={colors.themeColor} />
            </View>
          ) : (
            <FlatList
              data={homeData.contributions}
              renderItem={({item}) => (
                <View style={styles.stockListView}>
                  <Text style={styles.stockName}>{item.name}</Text>
                  <Text style={styles.stockPrice}>+{item.amount}</Text>
                </View>
              )}
            />
          )}
          <View style={{marginTop: '5%', bottom: '2%'}}>
            <Button
              title="Make a one-time contribution"
              style={styles.buttonView}
              onPress={() => this.props.navigation.navigate('Home')}
              newButton
            />
            <Button
              title="Setup Recurring contributions"
              style={styles.buttonView}
              onPress={() => this.props.navigation.navigate('Home')}
              backgroundColor={'#378B15'}
              newButton
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}
const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 12,
    paddingVertical: 5,
    paddingHorizontal: 5,
    // borderWidth: 0.5,
    // borderColor: '#BDBDBD',
    // borderRadius: 4,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 12,
    paddingHorizontal: 5,
    paddingVertical: 5,
    // borderWidth: 0.5,
    // borderColor: '#BDBDBD',
    // borderRadius: 8,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});
export default ContributionsScreen;
