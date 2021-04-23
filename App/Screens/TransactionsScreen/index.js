import React, {Component} from 'react';
import {
  View,
  Text,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import Button from '../../Components/Button';
import {Switch} from 'react-native-switch';
import RNPickerSelect from 'react-native-picker-select';

class TransactionsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEnabled: false,
      isClicked: '1st',
    };
  }

  handleClicked = value => {
    console.log(value);
    this.setState({isClicked: value});
  };

  toggleSwitch = () => this.setState({isEnabled: !this.state.isEnabled});

  render() {
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
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default TransactionsScreen;
