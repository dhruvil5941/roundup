import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  FlatList,
  ScrollView,
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import styles from './styles';
import * as colors from '../../assets/colors';
import Button from '../../components/button';
import Color from '../../theme/color';
import {connect} from 'react-redux';
import {questionListRequest} from '../../redux/userfinancesquestion/actions';
import Loader from '../../components/loader';

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
    this.props.questionListRequest();
  }

  render() {
    const {questionList} = this.props;
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

            {questionList.QuestionsList === undefined ? (
              <View style={styles.questionStyle}>
                <Loader size="large" color={colors.themeColor} />
              </View>
            ) : (
              <View>
                <FlatList
                  data={questionList.QuestionsList}
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

const mapStateToProps = state => {
  return {
    questionList: state.questionListReducer.questionList,
    questionListError: state.questionListReducer.questionListError,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    questionListRequest: () => dispatch(questionListRequest()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Userfinancesquestion);
