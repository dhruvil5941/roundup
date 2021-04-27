import React, {Component} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import styles from './styles';
import {Switch} from 'react-native-switch';
import RNPickerSelect from 'react-native-picker-select';
import * as colors from '../../assets/colors';
import Color from '../../theme/Color';
import {connect} from 'react-redux';
import {transactionDataRequest} from '../../redux/Transactions/actions';

class TransactionsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEnabled: false,
      isClicked: '1st',
      transactionData: [],
      selectedDollar: [],
      cardValue: 'For card ending with 4328 ',
      roundAllSelect: false,
    };
  }

  handleClicked = value => {
    if (value === '3d') {
      this.setState({transactionData: []});
    }
    this.setState({isClicked: value});
  };

  componentDidMount() {
    this.props.transactionDataRequest();
    if (this.props.transactionData2 !== undefined) {
      this.getNearestDollar(this.props.transactionData2);
    }
    var num = 5.2;
  }

  selectDollar = item => {
    this.setState({selectedDollar: [...this.state.selectedDollar, item]});
  };
  unSelectDollar = item => {
    const data = this.state.selectedDollar.filter(
      selected => selected.name !== item.name,
    );
    this.setState({selectedDollar: data});
  };
  getNearestDollar = transactionData => {
    const data = transactionData.map(
      (item, index) =>
        (transactionData[index].round =
          Math.round((Math.ceil(item.amount) - item.amount) * 100) / 100),
    );
    this.setState({transactionData: transactionData});
  };
  getNearest3rdDollar = transactionData => {
    const data = transactionData.map(
      (item, index) =>
        (transactionData[index].round =
          Math.round((Math.ceil(item.amount / 3.0) * 3 - item.amount) * 100) /
          100),
    );
    this.setState({transactionData: transactionData});
  };
  getNearest5thDollar = transactionData => {
    const data = transactionData.map(
      (item, index) =>
        (transactionData[index].round =
          Math.round((Math.ceil(item.amount / 5.0) * 5 - item.amount) * 100) /
          100),
    );
    this.setState({transactionData: transactionData});
  };
  getAllSelected = () => {
    this.setState({selectedDollar: this.state.transactionData});
  };
  getAllUnSelected = () => {
    this.setState({selectedDollar: []});
  };
  toggleSwitch = () => {
    if (this.state.isEnabled === false) {
      this.getAllSelected();
    }
    if (this.state.isEnabled === true) {
      this.getAllUnSelected();
    }
    this.setState({isEnabled: !this.state.isEnabled});
  };

  render() {
    const {transactionData, selectedDollar, roundAllSelect} = this.state;
    const {transactionData2} = this.props;
    console.log('transactionData2', transactionData2);
    return (
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.roundUpOpstion}>Round Up Options</Text>
          <View style={styles.enableView}>
            <Text style={styles.enableText}>Enable Automatic Round Ups</Text>
            <View>
              <Switch
                value={this.state.isEnabled}
                onValueChange={val => this.toggleSwitch()}
                barHeight={25}
                circleBorderWidth={0}
                backgroundActive="#28abe3"
                backgroundInactive="#999999"
                circleActiveColor="#FFF"
                circleInActiveColor="#FFF"
                changeValueImmediately={true}
                renderActiveText={false}
                renderInActiveText={false}
                circleSize={20}
                switchWidthMultiplier={2.3}
              />
            </View>
          </View>
          <View style={styles.nearestView}>
            <TouchableOpacity
              style={[
                styles.nearestPropOne,
                {
                  backgroundColor:
                    this.state.isClicked === '1st'
                      ? Color.lightGreen
                      : Color.secondaryColor,
                },
              ]}
              onPress={() => {
                this.handleClicked('1st');
                this.getNearestDollar(transactionData2);
              }}>
              <Text
                style={[
                  styles.nearestText,
                  {
                    color:
                      this.state.isClicked === '1st'
                        ? Color.white
                        : Color.black,
                  },
                ]}>
                Nearest Dollar
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.nearestPropOne,
                {
                  backgroundColor:
                    this.state.isClicked === '3rd'
                      ? Color.lightGreen
                      : Color.secondaryColor,
                },
              ]}
              onPress={() => {
                this.handleClicked('3rd');
                this.getNearest3rdDollar(transactionData2);
              }}>
              <Text
                style={[
                  styles.nearestText,
                  {
                    color:
                      this.state.isClicked === '3rd'
                        ? Color.white
                        : Color.black,
                  },
                ]}>
                Nearest 3rd Dollar
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.nearestPropOne,
                {
                  backgroundColor:
                    this.state.isClicked === '5th'
                      ? Color.lightGreen
                      : Color.secondaryColor,
                },
              ]}
              onPress={() => {
                this.handleClicked('5th');
                this.getNearest5thDollar(transactionData2);
              }}>
              <Text
                style={[
                  styles.nearestText,
                  {
                    color:
                      this.state.isClicked === '5th'
                        ? Color.white
                        : Color.black,
                  },
                ]}>
                Nearest 5th Dollar
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.tranjectionView}>
            <Text style={styles.roundUpText}>Recent Transactions</Text>
            {!roundAllSelect ? (
              <TouchableOpacity
                style={styles.roundAllDisable}
                onPress={() => {
                  this.state.isEnabled === false &&
                    (this.getAllSelected(),
                    this.setState({roundAllSelect: true}));
                }}>
                <Text style={styles.monthTextDisable}>Round Up all</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.roundAllActive}
                onPress={() => {
                  this.state.isEnabled === false &&
                    (this.getAllUnSelected(),
                    this.setState({roundAllSelect: false}));
                }}>
                <Text style={styles.monthTextActive}>Round Up all</Text>
              </TouchableOpacity>
            )}
          </View>
          <View style={styles.monthView}>
            <RNPickerSelect
              onValueChange={value => this.setState({cardValue: value})}
              selectedValue={this.state.cardValue}
              value={this.state.cardValue}
              useNativeAndroidPickerStyle={false}
              items={[
                {
                  label: 'For card ending with 4328 ',
                  value: 'For card ending with 4328 ',
                },
                {
                  label: 'For card ending with 4390 ',
                  value: 'For card ending with 4390 ',
                },
                {
                  label: 'For card ending with 4217 ',
                  value: 'For card ending with 4217 ',
                },
              ]}
              style={{
                ...pickerSelectStyles,
                iconContainer: {
                  top: 15,
                  right: 5,
                },
              }}
              Icon={() => {
                return <View style={styles.picker} />;
              }}
            />
          </View>
          {transactionData.length > 0 ? (
            <View style={styles.listView}>
              <FlatList
                data={transactionData}
                renderItem={({item}) => (
                  <View style={styles.listDataView}>
                    <Text style={{width: '35%'}}>{item.name}</Text>
                    <Text style={styles.listAmount}>${item.amount}</Text>
                    {item.round === 0 ? (
                      <Text style={styles.amountView}>-</Text>
                    ) : (
                      <>
                        {selectedDollar.length > 0 &&
                        selectedDollar.filter(item1 => item1.name === item.name)
                          .length > 0 ? (
                          <TouchableOpacity
                            style={styles.amountRound}
                            onPress={() => {
                              this.state.isEnabled === false &&
                                this.unSelectDollar(item);
                              this.setState({roundAllSelect: false});
                            }}>
                            <Text style={styles.roundText}>
                              ^ ${item.round.toFixed(2)}
                            </Text>
                          </TouchableOpacity>
                        ) : (
                          <TouchableOpacity
                            style={styles.selectDollar}
                            onPress={() => this.selectDollar(item)}>
                            <Text style={styles.selectDollarText}>
                              +${item.round.toFixed(2)}
                            </Text>
                          </TouchableOpacity>
                        )}
                      </>
                    )}
                  </View>
                )}
                keyExtractor={item => item.id}
              />
            </View>
          ) : (
            <View style={styles.loader}>
              <ActivityIndicator size="large" color={colors.themeColor} />
            </View>
          )}
        </ScrollView>
      </View>
    );
  }
}
const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 12,
    paddingVertical: 12,
    paddingHorizontal: 10,
    color: Color.black,
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 12,
    paddingHorizontal: 10,
    paddingVertical: 8,
    color: Color.black,
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});

const mapStateToProps = state => {
  return {
    transactionData2: state.transactionReducer.transactionData,
    transactionDataError: state.transactionReducer.transactionDataError,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    transactionDataRequest: () => dispatch(transactionDataRequest()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TransactionsScreen);
