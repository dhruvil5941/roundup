import React, {Component} from 'react';
import {
  Image,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StatusBar,
  FlatList,
  ScrollView,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import styles from '../WelcomeScreen/styles';

class Userfinancesquestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLanguage: '',
      dropdownData: '',
    };
  }
  componentDidMount() {
    this.getDropdownData();
  }
  getDropdownData = () => {
    var requestOptions = {
      method: 'POST',
    };

    //https://roundup.free.beeceptor.com/v1/questions

    fetch(
      'https://run.mocky.io/v3/eea8369e-a940-4263-bb85-f5103be8ae1d',
      requestOptions,
    )
      .then(response => response.text())
      .then(result => {
        // if (result.status === 200) {
        this.setState({dropdownData: JSON.parse(result)});
        // }
      })
      .catch(error => console.log('error', error));
  };

  render() {
    const {dropdownData} = this.state;
    console.log(dropdownData.QuestionsList);
    return (
      <View style={{flex: 1, backgroundColor: '#FFF'}}>
        <StatusBar
          animated={true}
          backgroundColor="#1FAD9E"
          translucent={true}
          barStyle="light-content"
          hidden={false}
        />
        <ScrollView style={{marginBottom: '20%', flex: 1}}>
          <View>
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
              <Text
                style={{fontSize: 14, color: '#808080', textAlign: 'center'}}>
                  Tell us a little about your current financial situation so we can recommend the best investment portfolio for you.
              </Text>
            </View>

            <FlatList
              data={dropdownData.QuestionsList}
              renderItem={({item}) => (
                <>
                  <Text
                    style={{
                      fontWeight: '700',
                      fontSize: 14,
                      marginTop: '6%',
                      marginStart: '4%',
                    }}>
                    {item.Question}
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
                      placeholder={{label: 'Select...'}}
                      onValueChange={(itemValue, itemIndex) =>
                        this.setState({selectedLanguage: itemValue})
                      }>
                      <Picker.Item label="Select..." value="Select..." />
                      {item.Options.map(option => {
                        return <Picker.Item label={option} value={option} />;
                      })}
                    </Picker>
                  </View>
                </>
              )}
              keyExtractor={item => item.id}
            />
          </View>
        </ScrollView>
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
          onPress={() => this.props.navigation.navigate('Landing')}>
          <Text style={{textAlign: 'center', fontWeight: '700', color: '#FFF'}}>
            NEXT
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Userfinancesquestion;
