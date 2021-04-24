import React, {Component} from 'react';
import {
  View,
  Text,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  Image,
  Platform,
} from 'react-native';
import styles from './styles';
import Button from '../../Components/Button';
import {Switch} from 'react-native-switch';
import RNPickerSelect from 'react-native-picker-select';
import * as colors from '../../assets/colors';
import {arrow} from '../../assets/images/arrow_up.png';
import onboarding from '../../assets/images/onboarding_image1.jpg';
class TransactionsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEnabled: false,
      isClicked: '1st',
      transactionApiData: [],
      transactionData: [],
      selectedDollar: [],
      cardValue: 'For card ending with 4328 ',
      roundAllSelect: false,
    };
  }

  handleClicked = value => {
    if (value === '3d') {
      this.setState({transactionData: []});
    }
    this.setState({isClicked: value});
  };

  componentDidMount() {
    this.getTransactionData();
    var num = 5.2;
    console.log(num.toFixed(2));
  }

  getTransactionData = () => {
    var requestOptions = {
      method: 'POST',
    };
    fetch(
      'https://run.mocky.io/v3/89fa1568-0d3c-40e5-9c46-ac4de216cac6',
      requestOptions,
    )
      .then(response => response.text())
      .then(result => {
        this.setState({transactionApiData: JSON.parse(result)});
        this.getNearestDollar(JSON.parse(result));
      })
      .catch(error => console.log('error', error));
  };
  selectDollar = item => {
    this.setState({selectedDollar: [...this.state.selectedDollar, item]});
  };
  unSelectDollar = item => {
    const data = this.state.selectedDollar.filter(
      selected => selected.name !== item.name,
    );
    this.setState({selectedDollar: data});
  };
  getNearestDollar = transactionData => {
    const data = transactionData.map(
      (item, index) =>
        (transactionData[index].round =
          Math.round((Math.ceil(item.amount) - item.amount) * 100) / 100),
    );
    this.setState({transactionData: transactionData});
  };
  getNearest3rdDollar = transactionData => {
    const data = transactionData.map(
      (item, index) =>
        (transactionData[index].round =
          Math.round((Math.ceil(item.amount / 3.0) * 3 - item.amount) * 100) /
          100),
    );
    this.setState({transactionData: transactionData});
  };
  getNearest5thDollar = transactionData => {
    const data = transactionData.map(
      (item, index) =>
        (transactionData[index].round =
          Math.round((Math.ceil(item.amount / 5.0) * 5 - item.amount) * 100) /
          100),
    );
    this.setState({transactionData: transactionData});
  };
  getAllSelected = () => {
    this.setState({selectedDollar: this.state.transactionData});
  };
  getAllUnSelected = () => {
    this.setState({selectedDollar: []});
  };
  toggleSwitch = () => {
    if (this.state.isEnabled === false) {
      this.getAllSelected();
    }
    if (this.state.isEnabled === true) {
      this.getAllUnSelected();
    }
    this.setState({isEnabled: !this.state.isEnabled});
  };

  render() {
    const {transactionData, selectedDollar, roundAllSelect} = this.state;
    console.log(selectedDollar);
    return (
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.roundUpOpstion}>Round Up Options</Text>
          <View
            style={{
              flexDirection: 'row',
              width: Dimensions.get('window').width - 50,
              alignItems: 'center',
              justifyContent: 'space-between',
              marginStart: '5%',
              marginTop: '5%',
            }}>
            <Text style={{fontWeight: 'bold'}}>Enable Automatic Round Ups</Text>
            <View>
              <Switch
                value={this.state.isEnabled}
                onValueChange={val => this.toggleSwitch()}
                barHeight={25}
                circleBorderWidth={0}
                backgroundActive="#28abe3"
                backgroundInactive="#999999"
                circleActiveColor="#FFF"
                circleInActiveColor="#FFF"
                changeValueImmediately={true}
                renderActiveText={false}
                renderInActiveText={false}
                circleSize={20}
                switchWidthMultiplier={2.3}
              />
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginStart: '5%',
              marginTop: '5%',
              width: Dimensions.get('window').width - 50,
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
            }}>
            <TouchableOpacity
              style={{
                width: '32%',
                justifyContent: 'center',
                overflow: 'hidden',
                marginStart: '1%',
                borderWidth: 0.3,
                borderColor: '#BDBDBD',
                backgroundColor:
                  this.state.isClicked === '1st' ? '#55AF74' : '#f5f5f5',
                height: 45,
                borderRadius: 25,
                alignItems: 'center',
              }}
              onPress={() => {
                this.handleClicked('1st');
                this.getNearestDollar(this.state.transactionApiData);
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  color: this.state.isClicked === '1st' ? '#FFF' : '#000',
                }}>
                Nearest Dollar
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: '32%',
                justifyContent: 'center',
                overflow: 'hidden',
                marginStart: '1%',
                borderWidth: 0.3,
                borderColor: '#BDBDBD',
                backgroundColor:
                  this.state.isClicked === '3rd' ? '#55AF74' : '#f5f5f5',
                height: 45,
                borderRadius: 25,
                alignItems: 'center',
              }}
              onPress={() => {
                this.handleClicked('3rd');
                this.getNearest3rdDollar(this.state.transactionApiData);
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  color: this.state.isClicked === '3rd' ? '#FFF' : '#000',
                }}>
                Nearest 3rd Dollar
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: '32%',
                justifyContent: 'center',
                overflow: 'hidden',
                marginStart: '1%',
                borderWidth: 0.3,
                borderColor: '#BDBDBD',
                backgroundColor:
                  this.state.isClicked === '5th' ? '#55AF74' : '#f5f5f5',
                height: 45,
                borderRadius: 25,
                alignItems: 'center',
              }}
              onPress={() => {
                this.handleClicked('5th');
                this.getNearest5thDollar(this.state.transactionApiData);
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  color: this.state.isClicked === '5th' ? '#FFF' : '#000',
                }}>
                Nearest 5th Dollar
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              marginTop: '5%',
              width: Dimensions.get('window').width - 50,
              alignItems: 'center',
              marginStart: '5%',
              justifyContent: 'space-around',
              flexDirection: 'row',
            }}>
            <Text style={styles.roundUpText}>Recent Transactions</Text>
            {!roundAllSelect ? (
              <TouchableOpacity
                style={styles.roundAllDisable}
                onPress={() => {
                  this.state.isEnabled === false &&
                    (this.getAllSelected(),
                    this.setState({roundAllSelect: true}));
                }}>
                <Text style={styles.monthTextDisable}>Round Up all</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.roundAllActive}
                onPress={() => {
                  this.state.isEnabled === false &&
                    (this.getAllUnSelected(),
                    this.setState({roundAllSelect: false}));
                }}>
                <Text style={styles.monthTextActive}>Round Up all</Text>
              </TouchableOpacity>
            )}
          </View>
          <View style={styles.monthView}>
            <RNPickerSelect
              onValueChange={value => this.setState({cardValue: value})}
              selectedValue={this.state.cardValue}
              value={this.state.cardValue}
              useNativeAndroidPickerStyle={false}
              items={[
                {
                  label: 'For card ending with 4328 ',
                  value: 'For card ending with 4328 ',
                },
                {
                  label: 'For card ending with 4390 ',
                  value: 'For card ending with 4390 ',
                },
                {
                  label: 'For card ending with 4217 ',
                  value: 'For card ending with 4217 ',
                },
              ]}
              style={{
                ...pickerSelectStyles,
                iconContainer: {
                  top: 15,
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
          {transactionData.length > 0 ? (
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                margin: '5%',
              }}>
              <FlatList
                data={transactionData}
                renderItem={({item}) => (
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-around',
                      alignItems: 'center',
                      margin: '2%',
                      marginTop: '5%',
                    }}>
                    <Text style={{width: '35%'}}>{item.name}</Text>
                    <Text
                      style={{
                        width: '35%',
                        textAlign: 'center',
                      }}>
                      ${item.amount}
                    </Text>
                    {item.round === 0 ? (
                      <Text
                        style={{
                          color: '#2FAE7B',
                          width: '30%',
                          textAlign: 'center',
                        }}>
                        -
                      </Text>
                    ) : (
                      <>
                        {selectedDollar.length > 0 &&
                        selectedDollar.filter(item1 => item1.name === item.name)
                          .length > 0 ? (
                          <TouchableOpacity
                            style={{
                              width: '30%',
                              justifyContent: 'center',
                              // marginStart: '1%',
                              borderWidth: 0.3,
                              borderColor: '#BDBDBD',
                              backgroundColor: '#0E8B38',
                              borderRadius: 25,
                              padding: '2%',
                              alignItems: 'center',
                            }}
                            onPress={() => {
                              this.state.isEnabled === false &&
                                this.unSelectDollar(item);
                              this.setState({roundAllSelect: false});
                            }}>
                            <Text
                              style={{
                                textAlign: 'center',
                                color: '#FFF',
                                fontWeight: '700',
                              }}>
                             ^ ${item.round.toFixed(2)}
                            </Text>
                          </TouchableOpacity>
                        ) : (
                          <TouchableOpacity
                            style={{
                              width: '30%',
                              justifyContent: 'center',
                              // height: 50,
                              alignItems: 'center',
                              padding: '2%',
                            }}
                            onPress={() => this.selectDollar(item)}>
                            <Text
                              style={{
                                color: '#2FAE7B',
                                textAlign: 'center',
                              }}>
                              +${item.round.toFixed(2)}
                            </Text>
                          </TouchableOpacity>
                        )}
                      </>
                    )}
                  </View>
                )}
                keyExtractor={item => item.id}
              />
            </View>
          ) : (
            <View style={{marginTop: '30%'}}>
              <ActivityIndicator size="large" color={colors.themeColor} />
            </View>
          )}
        </ScrollView>
      </View>
    );
  }
}
const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 12,
    paddingVertical: 12,
    paddingHorizontal: 10,
    // borderWidth: 0.5,
    // borderColor: '#BDBDBD',
    // borderRadius: 4,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 12,
    paddingHorizontal: 10,
    paddingVertical: 8,
    // borderWidth: 0.5,
    // borderColor: '#BDBDBD',
    // borderRadius: 8,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});
export default TransactionsScreen;
