import React, {Component} from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  ScrollView,
  FlatList,
} from 'react-native';
import StepIndicator from 'react-native-step-indicator';
import Swiper from 'react-native-swiper';
import styles from './styles';
import * as colors from '../../assets/colors';
import Button from '../../components/button';
import Color from '../../theme/color';
import {connect} from 'react-redux';
import {portfolioRequest} from '../../redux/portfolio/actions';
import PieChart from '../../components/piechart';
import Stocks from '../../components/stocklistprice';
import Loader from '../../components/loader';

const indicatorStyles = {
  stepIndicatorSize: 25,
  currentStepIndicatorSize: 45,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: Color.themeColor,
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: Color.lightBlue,
  stepStrokeUnFinishedColor: Color.whiteGray,
  separatorFinishedColor: Color.lightBlue,
  separatorUnFinishedColor: Color.whiteGray,
  stepIndicatorFinishedColor: Color.lightBlue,
  stepIndicatorUnFinishedColor: Color.white,
  stepIndicatorCurrentColor: Color.themeColor,
  stepIndicatorLabelFontSize: 0,
  currentStepIndicatorLabelFontSize: 0,
  stepIndicatorLabelCurrentColor: 'transparent',
  stepIndicatorLabelFinishedColor: 'transparent',
  stepIndicatorLabelUnFinishedColor: 'transparent',
  labelSize: 13,
  currentStepLabelColor: Color.lightBlue,
};

class Conservative extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPosition: 0,
    };
  }

  componentDidMount() {
    this.props.portfolioRequest();
  }

  render() {
    const {portfolioList} = this.props;
    const count = portfolioList.data && portfolioList.data.length;
    if (!portfolioList.data) {
      return (
        <View style={styles.loader}>
          <Loader size="large" color={colors.themeColor} />
        </View>
      );
    } else {
      return (
        <View style={styles.mainView}>
          <View style={styles.swiperView}>
            <ScrollView>
              <Swiper
                style={styles.swiper}
                loop={false}
                index={this.state.currentPosition}
                autoplay={false}
                showsPagination={false}
                onIndexChanged={page => {
                  this.setState({currentPosition: page});
                }}>
                {portfolioList.data &&
                  portfolioList.data.map(item => (
                    <View>
                      {item.isOtherPortfolio === true ? (
                        <Text style={styles.titleText}>
                          Portfolio Recommended
                        </Text>
                      ) : (
                        <Text style={styles.titleText}>Portfolio</Text>
                      )}

                      <View style={styles.pieView}>
                        <PieChart
                          radius={50}
                          sections={item.chartData}
                          dividerSize={5}
                          strokeCap={'butt'}
                        />
                      </View>
                      <View style={styles.riskLableText}>
                        <Text style={styles.riskText}>Risk Level</Text>
                      </View>
                      <View style={styles.stepperView}>
                        <StepIndicator
                          stepCount={count}
                          customStyles={indicatorStyles}
                          currentPosition={this.state.currentPosition}
                        />
                      </View>
                      <View style={styles.portfolioText}>
                        <Text style={styles.middleText}>
                          {item.portfolioName}
                        </Text>
                      </View>
                      <View style={styles.portfolioTypes}>
                        <FlatList
                          data={
                            portfolioList.data[this.state.currentPosition]
                              .portfolioType
                          }
                          renderItem={({item}) => (
                            <View style={styles.portfolioTypesList}>
                              <Stocks
                                name={item.name}
                                percentage={item.percentage}
                                nameStyle={styles.listName}
                                percentageStyle={styles.percentageText}
                              />
                            </View>
                          )}
                        />
                      </View>
                      {item.isOtherPortfolio === true ? (
                        <View style={styles.portfolioTextStyle}>
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
                        <View style={styles.buttonStyle}>
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
              </Swiper>
            </ScrollView>
          </View>
        </View>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    portfolioList: state.portfolioReducer.portfolioList,
    portfolioError: state.portfolioReducer.portfolioError,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    portfolioRequest: () => dispatch(portfolioRequest()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Conservative);
