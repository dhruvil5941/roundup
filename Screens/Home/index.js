import React, {Component} from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  Dimensions,
  StatusBar,
  ScrollView,
} from 'react-native';
import Pie from 'react-native-pie';

class Home extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#FFF',
        }}>
        <StatusBar
          animated={true}
          backgroundColor="#1FAD9E"
          translucent={true}
          barStyle="light-content"
          hidden={false}
        />
        <ScrollView>
          <Text
            style={{
              color: '#1FAD9E',
              fontSize: 13,
              fontWeight: '600',
              marginTop: '3%',
              textAlign: 'center',
            }}>
            Your Account Value
          </Text>
          <Text
            style={{
              color: 'green',
              fontSize: 25,
              fontWeight: 'bold',
              marginTop: '3%',
              textAlign: 'center',
            }}>
            $2,541.87
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginTop: '3%',
              width: Dimensions.get('window').width / 1.5,
              alignSelf: 'center',
            }}>
            <Text
              style={{
                color: 'green',
                fontSize: 13,
                fontWeight: '600',
                textAlign: 'center',
              }}>
              Total Gain :
            </Text>
            <Text
              style={{
                color: 'green',
                fontSize: 13,
                fontWeight: '600',
              }}>
              +$124.25(5.14%)
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginTop: '5%',
              width: Dimensions.get('window').width - 25,
              alignSelf: 'center',
            }}>
            <View style={{flexDirection: 'column'}}>
              <Text>Your Portfolio</Text>
              <Text
                style={{
                  color: '#1FAD9E',
                  fontSize: 15,
                  fontWeight: '600',
                  marginTop: '1%',
                  textAlign: 'center',
                }}>
                Moderately Conservation
              </Text>
              <View
                style={{
                  width: '70%',
                  height: 20,
                  backgroundColor: '#1FAD9E',
                  marginTop: '3%',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 10,
                }}>
                <Text style={{fontSize: 12, color: '#FFF', fontWeight: '600'}}>
                  Portfolio
                </Text>
              </View>
            </View>
            <View>
              <Pie
                radius={32}
                sections={[
                  {
                    percentage: 10,
                    color: '#C70039',
                  },
                  {
                    percentage: 20,
                    color: '#44CD40',
                  },
                  {
                    percentage: 30,
                    color: '#404FCD',
                  },
                  {
                    percentage: 40,
                    color: '#EBD22F',
                  },
                ]}
                dividerSize={7}
                strokeCap={'butt'}
              />
            </View>
          </View>
          <View
            style={{
              width: Dimensions.get('window').width - 70,
              alignSelf: 'center',
              borderWidth: 0.3,
              borderColor: '#808080',
              marginTop: '5%',
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: '3%',
              width: Dimensions.get('window').width - 70,
              alignSelf: 'center',
            }}>
            <Text
              style={{
                color: '#000',
                fontSize: 14,
                fontWeight: 'bold',
                textAlign: 'center',
              }}>
              Recurring Contribution :
            </Text>
            <Text
              style={{
                color: '#000',
                fontSize: 13,
                fontWeight: '500',
              }}>
              +$124.25 Monthly
            </Text>
          </View>
          <View
            style={{
              width: Dimensions.get('window').width / 1.8,
              alignSelf: 'flex-start',
              height: 20,
              backgroundColor: '#1FAD9E',
              marginTop: '3%',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 10,
              marginStart: '8%',
            }}>
            <Text style={{fontSize: 12, color: '#FFF', fontWeight: '600'}}>
              Recurring Contribution Settings
            </Text>
          </View>
          <View
            style={{
              width: Dimensions.get('window').width - 70,
              alignSelf: 'center',
              borderWidth: 0.3,
              borderColor: '#808080',
              marginTop: '5%',
            }}
          />
          <Text
            style={{
              fontSize: 15,
              color: '#000',
              fontWeight: 'bold',
              marginTop: '2%',
              marginStart: '9%',
            }}>
            Recurring Contribution
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: '3%',
              width: Dimensions.get('window').width - 70,
              alignSelf: 'center',
            }}>
            <Text
              style={{
                color: '#000',
                fontSize: 14,
                fontWeight: 'bold',
                textAlign: 'center',
              }}>
              Recurring Contribution
            </Text>
            <Text
              style={{
                color: '#000',
                fontSize: 13,
                fontWeight: '500',
              }}>
              +$124.25
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: '3%',
              width: Dimensions.get('window').width - 70,
              alignSelf: 'center',
            }}>
            <Text
              style={{
                color: '#000',
                fontSize: 14,
                fontWeight: 'bold',
                textAlign: 'center',
              }}>
              LAZADA
            </Text>
            <Text
              style={{
                color: '#000',
                fontSize: 13,
                fontWeight: '500',
              }}>
              +$3.80
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: '3%',
              width: Dimensions.get('window').width - 70,
              alignSelf: 'center',
            }}>
            <Text
              style={{
                color: '#000',
                fontSize: 14,
                fontWeight: 'bold',
                textAlign: 'center',
              }}>
              Grab
            </Text>
            <Text
              style={{
                color: '#000',
                fontSize: 13,
                fontWeight: '500',
              }}>
              +$0.25
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: '3%',
              width: Dimensions.get('window').width - 70,
              alignSelf: 'center',
            }}>
            <Text
              style={{
                color: '#000',
                fontSize: 14,
                fontWeight: 'bold',
                textAlign: 'center',
              }}>
              Netflix Monthly Subscription
            </Text>
            <Text
              style={{
                color: '#000',
                fontSize: 13,
                fontWeight: '500',
              }}>
              +$100.25
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: '3%',
              width: Dimensions.get('window').width - 70,
              alignSelf: 'center',
            }}>
            <Text
              style={{
                color: '#000',
                fontSize: 14,
                fontWeight: 'bold',
                textAlign: 'center',
              }}>
              LAZADA
            </Text>
            <Text
              style={{
                color: '#000',
                fontSize: 13,
                fontWeight: '500',
              }}>
              +$3.80
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: '3%',
              width: Dimensions.get('window').width - 70,
              alignSelf: 'center',
            }}>
            <Text
              style={{
                color: '#000',
                fontSize: 14,
                fontWeight: 'bold',
                textAlign: 'center',
              }}>
              Grab
            </Text>
            <Text
              style={{
                color: '#000',
                fontSize: 13,
                fontWeight: '500',
              }}>
              +$0.25
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: '3%',
              width: Dimensions.get('window').width - 70,
              alignSelf: 'center',
            }}>
            <Text
              style={{
                color: '#000',
                fontSize: 14,
                fontWeight: 'bold',
                textAlign: 'center',
              }}>
              Netflix Monthly Subscription
            </Text>
            <Text
              style={{
                color: '#000',
                fontSize: 13,
                fontWeight: '500',
              }}>
              +$100.25
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: '3%',
              width: Dimensions.get('window').width - 70,
              alignSelf: 'center',
            }}>
            <Text
              style={{
                color: '#000',
                fontSize: 14,
                fontWeight: 'bold',
                textAlign: 'center',
              }}>
              LAZADA
            </Text>
            <Text
              style={{
                color: '#000',
                fontSize: 13,
                fontWeight: '500',
              }}>
              +$3.80
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: '3%',
              width: Dimensions.get('window').width - 70,
              alignSelf: 'center',
            }}>
            <Text
              style={{
                color: '#000',
                fontSize: 14,
                fontWeight: 'bold',
                textAlign: 'center',
              }}>
              Grab
            </Text>
            <Text
              style={{
                color: '#000',
                fontSize: 13,
                fontWeight: '500',
              }}>
              +$0.25
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: '3%',
              width: Dimensions.get('window').width - 70,
              alignSelf: 'center',
            }}>
            <Text
              style={{
                color: '#000',
                fontSize: 14,
                fontWeight: 'bold',
                textAlign: 'center',
              }}>
              Netflix Monthly Subscription
            </Text>
            <Text
              style={{
                color: '#000',
                fontSize: 13,
                fontWeight: '500',
              }}>
              +$100.25
            </Text>
          </View>
          <View
            style={{
              width: Dimensions.get('window').width / 1.8,
              alignSelf: 'flex-start',
              height: 20,
              backgroundColor: '#1FAD9E',
              marginTop: '3%',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 10,
              marginStart: '8%',
            }}>
            <Text style={{fontSize: 12, color: '#FFF', fontWeight: '600'}}>
              See More Contribution
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Home;
