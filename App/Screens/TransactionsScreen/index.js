import React, {Component} from 'react';
import {View, Text, ScrollView, Dimensions, Switch} from 'react-native';
import styles from './styles';
import Button from '../../Components/Button';

class TransactionsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEnabled: false,
    };
  }
  render() {
    const toggleSwitch = () =>
      this.setState({isEnabled: !this.state.isEnabled});
    return (
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.roundUpText}>Round Up Opstions</Text>
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
                trackColor={{false: '#767577', true: '#81b0ff'}}
                thumbColor={this.state.isEnabled ? '#f5dd4b' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={this.state.isEnabled}
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
            <Button
              title="Nearest Dollar"
              style={styles.buttonView}
              onPress={() => console.log('1')}
              backgroundColor={'#55AF74'}
              newButton
            />
            <Button
              title="Nearest 5rd Dollar"
              style={styles.newbuttonView}
              onPress={() => console.log('1')}
              outlineColor={'#BDBDBD'}
              textColor={'#9E9E9E'}
              outlineButton
            />
            <Button
              title="Nearest 5rd Dollar"
              style={styles.newbuttonView}
              outlineColor={'#BDBDBD'}
              textColor={'#9E9E9E'}
              onPress={() => console.log('1')}
              outlineButton
            />
          </View>
          <Text style={styles.roundUpText}>Recent Transactions</Text>
          <View style={styles.monthView}>
            <Text style={styles.monthText}>March 2021</Text>
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
              <Button
                title="Nearest Dollar"
                style={styles.buttonView}
                backgroundColor={'#378B15'}
                newButton
              />
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
                marginTop: '5%',
              }}>
              <Text style={{width: '35%'}}>Nandos Chicken</Text>
              <Text style={{width: '35%', textAlign: 'center'}}>$22.60</Text>
              <Text
                style={{color: '#2FAE7B', width: '30%', textAlign: 'center'}}>
                $0.70
              </Text>
            </View>
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
            <View style={styles.monthView}>
              <Text style={styles.monthText}>Show more</Text>
            </View>
            <View style={styles.monthView}>
              <Text style={styles.monthText}>Round Up all</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default TransactionsScreen;
