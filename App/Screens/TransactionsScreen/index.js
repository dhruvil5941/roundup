import React, {Component} from 'react';
import {
    View,
    Text,
    ScrollView,
    Dimensions,
    TouchableOpacity, StyleSheet,
    FlatList,
    ActivityIndicator,
} from 'react-native';
import styles from './styles';
import Button from '../../Components/Button';
import {Switch} from 'react-native-switch';
import RNPickerSelect from 'react-native-picker-select';
import * as colors from '../../assets/colors';

class TransactionsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEnabled: false,
      isClicked: '1st',
      transactionData: [],
    };
  }

  handleClicked = value => {
    console.log(value);
    this.setState({isClicked: value});
  };

  componentDidMount() {
    this.getTransactionData();
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
        this.getNearestDollar(JSON.parse(result));
      })
      .catch(error => console.log('error', error));
  };

  getNearestDollar = transactionData => {
    const data = transactionData.map(
      (item, index) =>
        (transactionData[index].round =
          Math.round((Math.ceil(item.amount) - item.amount) * 100) / 100),
    );
    this.setState({transactionData: transactionData});
  };

  toggleSwitch = () => this.setState({isEnabled: !this.state.isEnabled});

  render() {
    const {transactionData} = this.state;
    return (
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.roundUpOpstion}>Round Up Opstions</Text>
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
                barHeight={30}
                circleBorderWidth={0}
                backgroundActive="#28abe3"
                backgroundInactive="#999999"
                circleActiveColor="#FFF"
                circleInActiveColor="#FFF"
                changeValueImmediately={true}
                renderActiveText={false}
                renderInActiveText={false}
                circleSize={20}
                switchWidthMultiplier={3}
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
              onPress={() => this.handleClicked('1st')}>
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
              onPress={() => this.handleClicked('3rd')}>
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
              onPress={() => this.handleClicked('5th')}>
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
            <View style={styles.monthView2}>
              <Text style={styles.monthText}>Round Up all</Text>
            </View>
          </View>
          <View style={styles.monthView}>
            <RNPickerSelect
              onValueChange={value => console.log(value)}
              items={[
                {label: 'Football', value: 'football'},
                {label: 'Baseball', value: 'baseball'},
                {label: 'Hockey', value: 'hockey'},
              ]}
              style={{
                ...pickerSelectStyles,
                iconContainer: {
                  top: 20,
                  right: 12,
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
                    }}>
                    <Text style={{width: '35%'}}>{item.name}</Text>
                    <Text style={{width: '35%', textAlign: 'center'}}>
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
                      <Text
                        style={{
                          color: '#2FAE7B',
                          width: '30%',
                          textAlign: 'center',
                        }}>
                        +${item.round}
                      </Text>
                    )}
                    {/*<Button*/}
                    {/*  title="Nearest Dollar"*/}
                    {/*  style={styles.buttonView}*/}
                    {/*  backgroundColor={'#378B15'}*/}
                    {/*  newButton*/}
                    {/*/>*/}
                  </View>
                )}
                keyExtractor={item => item.id}
              />
              {/*<View*/}
              {/*  style={{*/}
              {/*    flexDirection: 'row',*/}
              {/*    justifyContent: 'space-around',*/}
              {/*    alignItems: 'center',*/}
              {/*  }}>*/}
              {/*  <Text style={{width: '35%'}}>Nandos Chicken </Text>*/}
              {/*  <Text style={{width: '35%', textAlign: 'center'}}>$22.60</Text>*/}
              {/*  <Button*/}
              {/*    title="Nearest Dollar"*/}
              {/*    style={styles.buttonView}*/}
              {/*    backgroundColor={'#378B15'}*/}
              {/*    newButton*/}
              {/*  />*/}
              {/*</View>*/}
              {/*<View*/}
              {/*  style={{*/}
              {/*    flexDirection: 'row',*/}
              {/*    justifyContent: 'space-around',*/}
              {/*    marginTop: '5%',*/}
              {/*  }}>*/}
              {/*  <Text style={{width: '35%'}}>Nandos Chicken</Text>*/}
              {/*  <Text style={{width: '35%', textAlign: 'center'}}>$22.60</Text>*/}
              {/*  <Text*/}
              {/*    style={{color: '#2FAE7B', width: '30%', textAlign: 'center'}}>*/}
              {/*    $0.70*/}
              {/*  </Text>*/}
              {/*</View>*/}
              {/*<View*/}
              {/*  style={{*/}
              {/*    flexDirection: 'row',*/}
              {/*    justifyContent: 'space-around',*/}
              {/*    marginTop: '5%',*/}
              {/*  }}>*/}
              {/*  <Text style={{width: '35%'}}>Nandos Chicken</Text>*/}
              {/*  <Text style={{width: '35%', textAlign: 'center'}}>$22.60</Text>*/}
              {/*  <Text*/}
              {/*    style={{color: '#2FAE7B', width: '30%', textAlign: 'center'}}>*/}
              {/*    $0.70*/}
              {/*  </Text>*/}
              {/*</View>*/}
              {/*<View*/}
              {/*  style={{*/}
              {/*    flexDirection: 'row',*/}
              {/*    justifyContent: 'space-around',*/}
              {/*    marginTop: '5%',*/}
              {/*  }}>*/}
              {/*  <Text style={{width: '35%'}}>Nandos Chicken</Text>*/}
              {/*  <Text style={{width: '35%', textAlign: 'center'}}>$22.60</Text>*/}
              {/*  <Text*/}
              {/*    style={{color: '#2FAE7B', width: '30%', textAlign: 'center'}}>*/}
              {/*    $0.70*/}
              {/*  </Text>*/}
              {/*</View>*/}
              {/*<View*/}
              {/*  style={{*/}
              {/*    flexDirection: 'row',*/}
              {/*    justifyContent: 'space-around',*/}
              {/*    marginTop: '5%',*/}
              {/*  }}>*/}
              {/*  <Text style={{width: '35%'}}>Nandos Chicken</Text>*/}
              {/*  <Text style={{width: '35%', textAlign: 'center'}}>$22.60</Text>*/}
              {/*  <Text*/}
              {/*    style={{color: '#2FAE7B', width: '30%', textAlign: 'center'}}>*/}
              {/*    $0.70*/}
              {/*  </Text>*/}
              {/*</View>*/}
          <View
            style={{
              marginTop: '5%',
              width: Dimensions.get('window').width - 50,
              alignItems: 'center',
              marginStart: '5%',
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
              }}>
              <Text style={{width: '35%'}}>Nandos Chicken </Text>
              <Text style={{width: '35%', textAlign: 'center'}}>$22.60</Text>
              <TouchableOpacity
                style={{
                  width: '32%',
                  justifyContent: 'center',
                  overflow: 'hidden',
                  marginStart: '1%',
                  borderWidth: 0.3,
                  borderColor: '#BDBDBD',
                  backgroundColor: '#0E8B38',
                  height: 50,
                  borderRadius: 25,
                  alignItems: 'center',
                }}
                onPress={() => this.handleClicked('5th')}>
                <Text
                  style={{
                    textAlign: 'center',
                    color: '#FFF',
                    fontWeight: '700',
                  }}>
                  ^ $0.70
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                marginTop: '5%',
              }}>
              <Text style={{width: '35%'}}>Nandos Chicken</Text>
              <Text style={{width: '35%', textAlign: 'center'}}>$22.60</Text>
              <Text
                style={{color: '#2FAE7B', width: '30%', textAlign: 'center'}}>
                $0.70
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                marginTop: '5%',
              }}>
              <Text style={{width: '35%'}}>Nandos Chicken</Text>
              <Text style={{width: '35%', textAlign: 'center'}}>$22.60</Text>
              <Text
                style={{color: '#2FAE7B', width: '30%', textAlign: 'center'}}>
                $0.70
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                marginTop: '5%',
              }}>
              <Text style={{width: '35%'}}>Nandos Chicken</Text>
              <Text style={{width: '35%', textAlign: 'center'}}>$22.60</Text>
              <Text
                style={{color: '#2FAE7B', width: '30%', textAlign: 'center'}}>
                $0.70
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                marginTop: '10%',
                bottom: '5%',
              }}>
              <Text style={{width: '35%'}}>Nandos Chicken</Text>
              <Text style={{width: '35%', textAlign: 'center'}}>$22.60</Text>
              <Text
                style={{color: '#2FAE7B', width: '30%', textAlign: 'center'}}>
                $0.70
              </Text>
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
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 0.5,
        borderColor: '#BDBDBD',
        borderRadius: 4,
        color: 'black',
        paddingRight: 30, // to ensure the text is never behind the icon
    },
    inputAndroid: {
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 0.5,
        borderColor: '#BDBDBD',
        borderRadius: 8,
        color: 'black',
        paddingRight: 30, // to ensure the text is never behind the icon
    },
});
export default TransactionsScreen;
