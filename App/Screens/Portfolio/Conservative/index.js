import React, {Component} from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  Dimensions,
  StatusBar,
  ScrollView,
  FlatList,
} from 'react-native';
import Pie from 'react-native-pie';
import StepIndicator from 'react-native-step-indicator';
import Swiper from 'react-native-swiper';
import styles from './styles';

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
    fetch(
      'https://run.mocky.io/v3/53ff188d-5f59-4513-8bfb-7e2924f42795',
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
    return (
      <View style={styles.mainView}>
        <StatusBar
          animated={true}
          backgroundColor="#1FAD9E"
          translucent={true}
          barStyle="light-content"
          hidden={false}
        />
        <View style={styles.stepperView}>
          <StepIndicator
            stepCount={1}
            customStyles={indicatorStyles}
            currentPosition={this.state.currentPosition}
          />
        </View>
        <View style={styles.swiperView}>
          <Swiper
            style={{flexGrow: 1}}
            loop={false}
            index={this.state.currentPosition}
            autoplay={false}
            onIndexChanged={page => {
              this.setState({currentPosition: page});
            }}>
            <FlatList
              data={portfolioData.data}
              renderItem={({item}) => (
                <ScrollView>
                  <Text style={styles.titleText}>Portfolio Recommended</Text>
                  <View style={styles.pieView}>
                    <Pie
                      radius={50}
                      sections={[
                        {
                          percentage: 57,
                          color: 'green',
                        },
                      ]}
                      dividerSize={7}
                      strokeCap={'butt'}
                    />
                  </View>
                  <View style={{marginStart: '5%', marginTop: '3%'}}>
                    <Text style={styles.riskText}>Risk Level</Text>
                  </View>
                  <View style={{marginTop: '20%'}}>
                    <Text style={styles.portfolioName}>
                      {item.portfolioName}
                    </Text>
                    <View style={styles.portfolioTypes}>
                      {item.portfolioType.map(data => {
                        return (
                          <View style={styles.portfolioTypesList}>
                            <Text style={styles.listName}>{data.name}</Text>
                            <Text style={{fontSize: 16}}>
                              {data.percentage}
                            </Text>
                          </View>
                        );
                      })}
                    </View>

                    <View style={{ position: 'relative', borderWidth: 1, marginTop: '5%' }}>
                      <TouchableOpacity
                        style={styles.buttonView}
                        onPress={() => this.props.navigation.navigate('tabBar')}>
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
                  </View>
                </ScrollView>
              )}
            />
          </Swiper>
        </View>
      </View>
    );
  }
}

export default Conservative;
