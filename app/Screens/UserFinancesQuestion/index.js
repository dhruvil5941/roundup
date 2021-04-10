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
  ActivityIndicator,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import styles from './styles';
import * as colors from '../../asset/colors';

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

  SetSelectedValue = () => {};

  render() {
    const {dropdownData} = this.state;
    console.log(dropdownData.QuestionsList);
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
              <View style={{marginTop: '30%'}}>
                <ActivityIndicator size="large" color={colors.themeColor} />
              </View>
            ) : (
              <FlatList
                data={dropdownData.QuestionsList}
                renderItem={({item}) => (
                  <>
                    <Text style={styles.queTitle}>{item.Question}</Text>
                    <View style={styles.pickerView}>
                      <Picker
                        selectedValue={this.state[item.id + '_str']}
                        placeholder={{label: 'Select...'}}
                        onValueChange={itemValue =>
                          this.setState({[item.id + '_str']: itemValue})
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
            )}
          </View>
        </ScrollView>
        <TouchableOpacity
          style={styles.BtnView}
          onPress={() => this.props.navigation.navigate('Landing')}>
          <Text style={styles.BtnText}>NEXT</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Userfinancesquestion;
