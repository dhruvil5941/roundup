import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  ActivityIndicator,
  FlatList,
  Platform,
} from 'react-native';
import styles from './styles';
import * as colors from '../../assets/colors';
import Button from '../../components/button';
import RNPickerSelect from 'react-native-picker-select';
import Color from '../../theme/color';
import {connect} from 'react-redux';

class ContributionsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownValue: 'Last 7 days',
    };
  }

  render() {
    const {homeData} = this.props;
    return (
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.roundUpView}>
            <Text style={styles.roundUpText}>Round Up Pool</Text>
            <View style={styles.monthView}>
              <Text style={styles.monthText}>March 2021</Text>
            </View>
          </View>
          <Text style={styles.priceText}>$92.38</Text>
          <Text style={styles.decText}>
            Funds in pool will be invested into recommended portfolio on the end
            of each month, and we will charge this amount to your linked bank
            account.
          </Text>
          <View style={styles.contributionView}>
            <Text style={styles.contributionText}>Contribution</Text>
            <View style={styles.pickerView}>
              <RNPickerSelect
                onValueChange={value => this.setState({dropdownValue: value})}
                selectedValue={this.state.dropdownValue}
                value={this.state.dropdownValue}
                items={[
                  {label: 'Last 7 days', value: 'Last 7 days'},
                  {label: 'Last 14 days', value: 'Last 14 days'},
                  {label: 'Last month', value: 'Last month'},
                ]}
                style={{
                  ...pickerSelectStyles,
                  iconContainer: {
                    top: Platform.OS === 'ios' ? 5 : 22,
                    right: 5,
                  },
                }}
                Icon={() => {
                  return <View style={styles.pickerIcon} />;
                }}
              />
            </View>
          </View>
          {!homeData ? (
            <View style={styles.loader}>
              <ActivityIndicator size="large" color={colors.themeColor} />
            </View>
          ) : (
            <FlatList
              data={homeData.contributions}
              renderItem={({item}) => (
                <View style={styles.stockListView}>
                  <Text style={styles.stockName}>{item.name}</Text>
                  <Text style={styles.stockPrice}>+{item.amount}</Text>
                </View>
              )}
            />
          )}
          <View style={styles.btnView}>
            <Button
              title="Make a one-time contribution"
              style={styles.buttonView}
              onPress={() => this.props.navigation.navigate('home')}
              newButton
            />
            <Button
              title="Setup Recurring contributions"
              style={styles.buttonView}
              onPress={() => this.props.navigation.navigate('home')}
              backgroundColor={Color.greenFour}
              newButton
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}
const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 12,
    paddingVertical: 5,
    paddingHorizontal: 5,
    // borderWidth: 0.5,
    // borderColor: '#BDBDBD',
    // borderRadius: 4,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 12,
    paddingHorizontal: 5,
    paddingVertical: 5,
    // borderWidth: 0.5,
    // borderColor: '#BDBDBD',
    // borderRadius: 8,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});

const mapStateToProps = state => {
  return {
    homeData: state.homeReducer.homeData,
    homeDataError: state.homeReducer.homeDataError,
  };
};

export default connect(mapStateToProps)(ContributionsScreen);
