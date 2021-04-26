import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  FlatList,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import styles from './styles';
import * as colors from '../../assets/colors';
import Button from '../../Components/Button';
import Color from '../../theme/Color';
import Url from '../../utility/url';

class Userfinancesquestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStatus: '',
      selectedIncome: '',
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
        Url.url + '1c5dd4f7-8b4e-40b2-84c7-d7d6ab447808',
      requestOptions,
    )
      .then(response => response.text())
      .then(result => {
        this.setState({dropdownData: JSON.parse(result)});
      })
      .catch(error => console.log('error', error));
  };

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
        <ScrollView style={styles.scrollView}>
          <View>
            <Text style={styles.mainHeadingText}>Your finances and goals</Text>
            <View style={styles.discView}>
              <Text style={styles.discText}>
                Tell us a little about your current financial situation so we
                can recommend the best investment portfolio for you.
              </Text>
            </View>

            {dropdownData.QuestionsList == undefined ? (
              <View style={styles.questionStyle}>
                <ActivityIndicator size="large" color={colors.themeColor} />
              </View>
            ) : (
              <View>
                <FlatList
                  data={dropdownData.QuestionsList}
                  renderItem={({item}) => (
                    <>
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
                          textInputProps={{underlineColor: Color.yellow}}
                          Icon={() => {
                            return <View style={styles.dropdownIconStyle} />;
                          }}
                        />
                      </View>
                    </>
                  )}
                  keyExtractor={item => item.id}
                />
              </View>
            )}
          </View>
        </ScrollView>
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
    borderWidth: 0.5,
    borderColor: Color.lightGray,
    borderRadius: 4,
    color: Color.black,
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: Color.lightGray,
    borderRadius: 8,
    color: Color.black,
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});
export default Userfinancesquestion;
