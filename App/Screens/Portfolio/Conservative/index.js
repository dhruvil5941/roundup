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
    // https://run.mocky.io/v3/53ff188d-5f59-4513-8bfb-7e2924f42795
    // https://run.mocky.io/v3/26d46b38-35b7-42e9-b4de-3cb07b1fc210
    fetch(
      'https://run.mocky.io/v3/d3b920a7-c014-4a72-a667-81d309ea2482',
      requestOptions,
    )
      .then(response => response.text())
      .then(
        result => {
          this.setState({portfolioData: JSON.parse(result)});
        },
        // console.log('data', result),
      )
      .catch(error => console.log('error', error));
  };

  // property = (percentage, color) => {
  //   const {portfolioData} = this.state;
  //   return portfolioData.data.chartData.map(item => {
  //     let percentage: item.option;
  //     let color: item.color;
  //     console.log(percentage);
  //   });
  // };

  render() {
    console.log('portfolioData', this.state.portfolioData);
    const {portfolioData} = this.state;
    const count = portfolioData.data && portfolioData.data.length;
    console.log('count', count);
    if (!portfolioData.data) {
      return (
        <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
          <ActivityIndicator size="large" color={colors.themeColor} />
        </View>
      );
    } else {
      return (
        <View style={styles.mainView}>
          <StatusBar
            animated={true}
            backgroundColor="#1FAD9E"
            translucent={true}
            barStyle="light-content"
            hidden={false}
          />
          <View style={styles.swiperView}>
            <Swiper
              style={{flexGrow: 1}}
              loop={false}
              index={this.state.currentPosition}
              autoplay={false}
              onIndexChanged={page => {
                this.setState({currentPosition: page});
              }}>
              {portfolioData.data &&
                portfolioData.data.map(item => (
                  <View>
                    {item.isOtherPortfolio === true ? (
                      <Text style={styles.titleText}>Portfolio Recommended</Text>
                      ) : (
                        <Text style={styles.titleText}>Portfolio</Text>
                      )}
                    
                    <View style={styles.pieView}>
                      <Pie
                        radius={50}
                        sections={[
                          {
                            percentage: 10,
                            color: '#C70039',
                          },
                          {
                            percentage: 20,
                            color: '#44CD40',
                          },
                          {
                            percentage: 30,
                            color: '#404FCD',
                          },
                          {
                            percentage: 40,
                            color: '#EBD22F',
                          },
                        ]}
                        dividerSize={7}
                        strokeCap={'butt'}
                      />
                    </View>
                    <View style={{marginStart: '5%', marginTop: '3%'}}>
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
                      <Text style={styles.middleText}>{item.portfolioName}</Text>
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
                      <View style={{marginTop: '15%', flex: 1}}>
                        <TouchableOpacity
                          style={styles.buttonView}
                          onPress={() =>
                            this.props.navigation.navigate('Home')
                          }>
                          <Text style={styles.buttonText}>
                            Choose recommended portfolio
                          </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonView}>
                          <Text style={styles.buttonText}>
                            Choose another portfolio
                          </Text>
                        </TouchableOpacity>
                      </View>
                    ) : (
                      <View style={{marginTop: '15%', flex: 1}}>
                        <TouchableOpacity
                          style={styles.buttonView}
                          onPress={() =>
                            this.props.navigation.navigate('Home')
                          }>
                            {item.isOtherPortfolio === true ? (
                      <Text style={styles.buttonText}>Choose Recommended portfolio </Text>
                      ) : (
                        <Text style={styles.buttonText}>Choose portfolio</Text>
                      )}
                        </TouchableOpacity>
                      </View>
                    )}
                  </View>
                ))}
            </Swiper>
          </View>
        </View>
      );
    }
  }
}

export default Conservative;
