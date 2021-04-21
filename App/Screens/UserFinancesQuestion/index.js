import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import styles from './styles';
import * as colors from '../../assets/colors';
import Button from '../../Components/Button';

class Userfinancesquestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStatus: '',
      selectedIncome: '',
      // selectedGoal: '',
      // selectedPeriod: '',
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

    fetch(
      'https://run.mocky.io/v3/1c5dd4f7-8b4e-40b2-84c7-d7d6ab447808',
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

  SetSelectedValue = () => {};

  render() {
    const {dropdownData} = this.state;
    const placeholder = {
      label: 'Select...',
      value: null,
    };
    return (
      <View style={styles.mainView}>
        <StatusBar
          animated={true}
          backgroundColor={colors.themeColor}
          translucent={true}
          barStyle="light-content"
          hidden={false}
        />
        {/*<ScrollView style={styles.scrollView}>*/}
        <View>
          <Text style={styles.mainHeadingText}>Your finances and goals</Text>
          <View style={styles.discView}>
            <Text style={styles.discText}>
              Tell us a little about your current financial situation so we can
              recommend the best investment portfolio for you.
            </Text>
          </View>

          {dropdownData.QuestionsList == undefined ? (
            <View style={{marginTop: '30%'}}>
              <ActivityIndicator size="large" color={colors.themeColor} />
            </View>
          ) : (
            <View>
              <FlatList
                data={dropdownData.QuestionsList}
                renderItem={({item}) => (
                  <View style={{ marginBottom: '2%' }}>
                    <Text style={styles.queTitle}>{item.Question}</Text>
                    <View style={styles.pickerView}>
                      <RNPickerSelect
                        placeholder={placeholder}
                        items={item.Options.map(option => option)}
                        onValueChange={itemValue =>
                          this.setState({[item.id + '_str']: itemValue})
                        }
                        style={{
                          ...pickerSelectStyles,
                          iconContainer: {
                            top: 20,
                            right: 12,
                          },
                        }}
                        value={this.state[item.id + '_str']}
                        useNativeAndroidPickerStyle={false}
                        textInputProps={{underlineColor: 'yellow'}}
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
                              }}
                            />
                          );
                        }}
                      />
                    </View>
                  </View>
                )}
                keyExtractor={item => item.id}
              />
            </View>
          )}
        </View>
        <Button
          title="Next"
          style={styles.BtnView}
          onPress={() => this.props.navigation.navigate('Conservative')}
          newButton
        />
      </View>
    );
  }
}

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
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
export default Userfinancesquestion;
