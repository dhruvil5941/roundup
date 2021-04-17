import React, {Component} from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  Dimensions,
  StatusBar,
} from 'react-native';

class Risky extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#1FAD9E',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <StatusBar
          animated={true}
          backgroundColor="#1FAD9E"
          translucent={true}
          barStyle="light-content"
          hidden={false}
        />
        <Text
          style={{
            color: '#FFF7F7',
            fontSize: 22,
            fontWeight: 'bold',
            fontFamily: 'SFProText',
          }}>
          RoundUp
        </Text>
        <TouchableOpacity
          style={{
            width: Dimensions.get('window').width / 1.2,
            height: '5%',
            backgroundColor: '#F5F5F5',
            borderRadius: 25,
            marginTop: '20%',
            justifyContent: 'center',
          }}
          onPress={() => this.props.navigation.navigate('Blogone')}>
          <Text
            style={{
              textAlign: 'center',
              fontWeight: '700',
              fontFamily: 'SFProText',
            }}>
            LOG IN
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: Dimensions.get('window').width / 1.2,
            height: '5%',
            backgroundColor: '#1FAD9E',
            borderRadius: 25,
            marginTop: '5%',
            justifyContent: 'center',
            borderWidth: 0.3,
            borderColor: '#FFF',
          }}
          onPress={() => this.props.navigation.navigate('Blogone')}>
          <Text style={{textAlign: 'center', fontWeight: '700', color: '#FFF'}}>
            CREATE AN ACCOUNT
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Risky;
