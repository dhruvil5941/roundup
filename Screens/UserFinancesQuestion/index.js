import React, {Component} from 'react';
import {
  Image,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StatusBar,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';

class Userfinancesquestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLanguage: '',
    };
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#FFF'}}>
        <StatusBar
          animated={true}
          backgroundColor="#1FAD9E"
          translucent={true}
          barStyle="light-content"
          hidden={false}
        />
        <Text
          style={{
            fontWeight: '700',
            fontSize: 18,
            marginTop: '5%',
            textAlign: 'center',
          }}>
          Your finances and goals
        </Text>
        <View
          style={{
            width: Dimensions.get('window').width - 35,
            marginTop: '2%',
            alignSelf: 'center',
          }}>
          <Text style={{fontSize: 14, color: '#808080', textAlign: 'center'}}>
            RoundUp App will tally the total change of your transactions at the
            end of the month and send a deposit directly to the selected
            nonprofit.
          </Text>
        </View>
        <Text
          style={{
            fontWeight: '700',
            fontSize: 14,
            marginTop: '6%',
            marginStart: '4%',
          }}>
          What is your employment status?
        </Text>
        <View
          style={{
            width: Dimensions.get('window').width - 35,
            borderWidth: 0.3,
            borderRadius: 4,
            alignSelf: 'center',
            marginTop: '2%',
          }}>
          <Picker
            selectedValue={this.state.selectedLanguage}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({selectedLanguage: itemValue})
            }>
            <Picker.Item label="Select..." value="Select..." />
            <Picker.Item label="JavaScript" value="js" />
          </Picker>
        </View>
        <Text
          style={{
            fontWeight: '700',
            fontSize: 14,
            marginTop: '6%',
            marginStart: '4%',
          }}>
          What is your employment status?
        </Text>
        <View
          style={{
            width: Dimensions.get('window').width - 35,
            borderWidth: 0.3,
            borderRadius: 4,
            alignSelf: 'center',
            marginTop: '2%',
          }}>
          <Picker
            selectedValue={this.state.selectedLanguage}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({selectedLanguage: itemValue})
            }>
            <Picker.Item label="Select..." value="Select..." />
            <Picker.Item label="JavaScript" value="js" />
          </Picker>
        </View>
        <Text
          style={{
            fontWeight: '700',
            fontSize: 14,
            marginTop: '6%',
            marginStart: '4%',
          }}>
          What is your employment status?
        </Text>
        <View
          style={{
            width: Dimensions.get('window').width - 35,
            borderWidth: 0.3,
            borderRadius: 4,
            alignSelf: 'center',
            marginTop: '2%',
          }}>
          <Picker
            selectedValue={this.state.selectedLanguage}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({selectedLanguage: itemValue})
            }>
            <Picker.Item label="Select..." value="Select..." />
            <Picker.Item label="JavaScript" value="js" />
          </Picker>
        </View>
        <Text
          style={{
            fontWeight: '700',
            fontSize: 14,
            marginTop: '6%',
            marginStart: '4%',
          }}>
          What is your employment status?
        </Text>
        <View
          style={{
            width: Dimensions.get('window').width - 35,
            borderWidth: 0.3,
            borderRadius: 4,
            alignSelf: 'center',
            marginTop: '2%',
          }}>
          <Picker
            selectedValue={this.state.selectedLanguage}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({selectedLanguage: itemValue})
            }>
            <Picker.Item label="Select..." value="Select..." />
            <Picker.Item label="JavaScript" value="js" />
          </Picker>
        </View>
        <TouchableOpacity
          style={{
            width: Dimensions.get('window').width / 1.2,
            height: '5%',
            backgroundColor: '#1FAD9E',
            borderRadius: 25,
            justifyContent: 'center',
            borderWidth: 0.3,
            position: 'absolute',
            bottom: '5%',
            alignSelf: 'center',
          }}
          onPress={() =>
            this.props.navigation.navigate('Home')
          }>
          <Text style={{textAlign: 'center', fontWeight: '700', color: '#FFF'}}>
            NEXT
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Userfinancesquestion;
