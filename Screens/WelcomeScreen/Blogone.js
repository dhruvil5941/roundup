import React, {Component} from 'react';
import {
  Image,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StatusBar,
} from 'react-native';

class Blogone extends Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', backgroundColor: '#FFF'}}>
        <StatusBar animated={true} backgroundColor="#FFF" translucent={true} barStyle = "dark-content" hidden = {false} />
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 22,
            color: '#1FAD9E',
            marginTop: '15%',
          }}>
          Welcome to RoundUp!
        </Text>
        <View
          style={{
            width: Dimensions.get('window').width - 35,
            marginTop: '10%',
          }}>
          <Text style={{textAlign: 'center', fontSize: 15}}>
            RoundUp App will tally the total change of your transactions at the
            end of the month and send a deposit directly to the selected
            nonprofit. Make an impact with little effort.RoundUp App will tally
            the total change of your transactions at the end of the month and
            send a deposit directly to the selected nonprofit. Make an impact
            with little effort.RoundUp App will tally the total change of your
            transactions at the end of the month and send a deposit directly to
            the selected nonprofit. Make an impact with little effort.
          </Text>
        </View>
        <View
          style={{
            width: Dimensions.get('window').width - 35,
            marginTop: '10%',
            height: '30%',
          }}>
          <Image
            source={require('../../asset/Images/onboarding_image1.jpg')}
            resizemode={'contain'}
            style={{width: '100%', height: '100%'}}
          />
        </View>
        <View
          style={{
            width: Dimensions.get('window').width,
            borderWidth: 0.3,
            borderColor: '#808080',
            marginTop: '15%',
          }}
        />
        <TouchableOpacity
          style={{
            width: Dimensions.get('window').width / 1.2,
            height: '5%',
            backgroundColor: '#1FAD9E',
            borderRadius: 25,
            justifyContent: 'center',
            borderWidth: 0.3,
            position: 'absolute',
            bottom: '8%',
          }}
          onPress={() => this.props.navigation.navigate('BlogDetails')}>
          <Text style={{textAlign: 'center', fontWeight: '700', color: '#FFF'}}>
            NEXT
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Blogone;
