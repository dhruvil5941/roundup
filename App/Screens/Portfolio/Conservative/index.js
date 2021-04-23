import React, {Component} from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  Dimensions,
  StatusBar,
  ScrollView,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import Pie from 'react-native-pie';
import StepIndicator from 'react-native-step-indicator';
import Swiper from 'react-native-swiper';
import styles from './styles';
import * as colors from '../../../assets/colors';
import Button from '../../../Components/Button';

const indicatorStyles = {
  stepIndicatorSize: 25,
  currentStepIndicatorSize: 45,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: '#1FAD9E',
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: '#7eaec4',
  stepStrokeUnFinishedColor: '#dedede',
  separatorFinishedColor: '#7eaec4',
  separatorUnFinishedColor: '#dedede',
  stepIndicatorFinishedColor: '#7eaec4',
  stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: '#1FAD9E',
  stepIndicatorLabelFontSize: 0,
  currentStepIndicatorLabelFontSize: 0,
  stepIndicatorLabelCurrentColor: 'transparent',
  stepIndicatorLabelFinishedColor: 'transparent',
  stepIndicatorLabelUnFinishedColor: 'transparent',
  labelColor: '#999999',
  labelSize: 13,
  currentStepLabelColor: '#7eaec4',
};

class Conservative extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPosition: 0,
      portfolioData: [],
    };
  }

  componentDidMount() {
    this.getPortfolioData();
  }

  getPortfolioData = () => {
    var requestOptions = {
      method: 'POST',
    };
    fetch(
      'https://run.mocky.io/v3/377d7f52-58b8-4281-8e69-f0ca796bb377',
      requestOptions,
    )
      .then(response => response.text())
      .then(result => {
          this.setState({portfolioData: JSON.parse(result)});
        },
      )
      .catch(error => console.log('error', error));
  };

  render() {
    const {portfolioData} = this.state;
    const count = portfolioData.data && portfolioData.data.length;
    if (!portfolioData.data) {
      return (
        <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
          <ActivityIndicator size="large" color={colors.themeColor} />
        </View>
      );
    } else {
      return (
        <View style={styles.mainView}>
          <View style={styles.swiperView}>
            <ScrollView>
              <Swiper
                style={{flexGrow: 1}}
                loop={false}
                index={this.state.currentPosition}
                autoplay={false}
                showsPagination={false}
                onIndexChanged={page => {
                  this.setState({currentPosition: page});
                }}>
                {/*<ScrollView>*/}
                {portfolioData.data &&
                  portfolioData.data.map(item => (
                    <View>
                      {item.isOtherPortfolio === true ? (
                        <Text style={styles.titleText}>
                          Portfolio Recommended
                        </Text>
                      ) : (
                        <Text style={styles.titleText}>Portfolio</Text>
                      )}

                      <View style={styles.pieView}>
                        <Pie
                          radius={50}
                          sections={item.chartData}
                          dividerSize={5}
                          strokeCap={'butt'}
                        />
                      </View>
                      <View style={{marginStart: '5%', marginTop: '4%'}}>
                        <Text style={styles.riskText}>Risk Level</Text>
                      </View>
                      <View style={styles.stepperView}>
                        <StepIndicator
                          stepCount={count}
                          customStyles={indicatorStyles}
                          currentPosition={this.state.currentPosition}
                        />
                      </View>
                      <View style={{marginStart: '5%', marginTop: '3%'}}>
                        <Text style={styles.middleText}>
                          {item.portfolioName}
                        </Text>
                      </View>
                      <View style={styles.portfolioTypes}>
                        <FlatList
                          data={
                            portfolioData.data[this.state.currentPosition]
                              .portfolioType
                          }
                          renderItem={({item}) => (
                            <View style={styles.portfolioTypesList}>
                              <Text style={styles.listName}>{item.name}</Text>
                              <Text style={{fontSize: 16}}>
                                {item.percentage}
                              </Text>
                            </View>
                          )}
                        />
                      </View>
                      {item.isOtherPortfolio === true ? (
                        <View
                          style={{
                            marginTop: '10%',
                            flex: 1,
                            bottom: '4%'
                          }}>
                          <Button
                            title="Choose recommended portfolio"
                            style={styles.buttonView}
                            onPress={() =>
                              this.props.navigation.navigate('Home')
                            }
                            newButton
                          />
                          <Button
                            title="Choose another portfolio"
                            style={styles.buttonView}
                            onPress={() =>
                              this.props.navigation.navigate('Home')
                            }
                            newButton
                          />
                        </View>
                      ) : (
                        <View style={{marginTop: '15%', flex: 1}}>
                          <TouchableOpacity
                            style={styles.buttonView}
                            onPress={() =>
                              this.props.navigation.navigate('Home')
                            }>
                            {item.isOtherPortfolio === true ? (
                              <Text style={styles.buttonText}>
                                Choose Recommended portfolio{' '}
                              </Text>
                            ) : (
                              <Text style={styles.buttonText}>
                                Choose portfolio
                              </Text>
                            )}
                          </TouchableOpacity>
                        </View>
                      )}
                    </View>
                  ))}
                {/*</ScrollView>*/}
              </Swiper>
            </ScrollView>
          </View>
        </View>
      );
    }
  }
}

export default Conservative;
