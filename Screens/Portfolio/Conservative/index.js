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
      portfolioData: '',
    };
  }

  componentDidMount() {
    this.getPortfolioData();
  }
  getPortfolioData = () => {
    // var requestOptions = {
    //   method: 'POST',
    // };
    //
    // fetch(
    //   'https://run.mocky.io/v3/dc3797e5-f83a-4d08-a313-7bc9cf7ea024',
    //   requestOptions,
    // )
    //   .then(response => response.text())
    //   .then(result => {
    //     // if (result.status === 200) {
    //     this.setState({portfolioData: JSON.parse(result)});
    //     // }
    //   })
    //   .catch(error => console.log('error', error));
    var requestOptions = {
      method: 'POST',
    };

    fetch(
      'https://run.mocky.io/v3/1eee4eb9-0a50-4635-8b80-394e5d15da94',
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

  render() {
    console.log('portfolioData', this.state.portfolioData);
    const {portfolioData} = this.state;
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#FFF',
        }}>
        <StatusBar
          animated={true}
          backgroundColor="#1FAD9E"
          translucent={true}
          barStyle="light-content"
          hidden={false}
        />
        <FlatList
          data={portfolioData.data}
          renderItem={({item}) => (
            <>
              <View style={{position: 'relative', flex: 1, marginTop: '52%'}}>
                <StepIndicator
                  stepCount={item.length}
                  customStyles={indicatorStyles}
                  currentPosition={this.state.currentPosition}
                />
              </View>
              <View style={{position: 'absolute', flex: 1}}>
                <Swiper
                  style={{flexGrow: 1}}
                  loop={false}
                  index={this.state.currentPosition}
                  autoplay={false}
                  onIndexChanged={page => {
                    this.setState({currentPosition: page});
                  }}>
                  <>
                    <Text
                      style={{
                        color: '#000',
                        fontSize: 18,
                        fontWeight: '600',
                        textAlign: 'center',
                        marginTop: '3%',
                      }}>
                      Portfolio Recommended
                    </Text>
                    <View style={{alignItems: 'center', marginTop: '5%'}}>
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
                      <Text
                        style={{
                          color: '#000',
                          fontSize: 18,
                          fontWeight: '600',
                        }}>
                        Risk Level
                      </Text>
                    </View>
                    <View style={{marginTop: '20%', flex: 1}}>
                      <Text
                        style={{
                          color: '#1FAD9E',
                          fontSize: 20,
                          fontWeight: 'bold',
                          textAlign: 'center',
                        }}>
                        {item.portfolioName}
                      </Text>
                      <View
                        style={{
                          width: Dimensions.get('window').width - 25,
                          alignSelf: 'center',
                          marginTop: '5%',
                          height: '45%',
                        }}>
                        <ScrollView>
                          {item.portfolioType.map(data => {
                            return (
                              <View
                                style={{
                                  flexDirection: 'row',
                                  justifyContent: 'space-between',
                                  alignItems: 'center',
                                  marginTop: '5%',
                                }}>
                                <Text
                                  style={{
                                    width: Dimensions.get('window').width / 1.5,
                                    fontSize: 16,
                                  }}>
                                  {data.name}
                                </Text>
                                <Text style={{fontSize: 16}}>
                                  {data.percentage}
                                </Text>
                              </View>
                            );
                          })}
                        </ScrollView>
                      </View>
                      <TouchableOpacity
                        style={{
                          width: Dimensions.get('window').width / 1.2,
                          height: '7%',
                          backgroundColor: '#1FAD9E',
                          borderRadius: 25,
                          justifyContent: 'center',
                          position: 'relative',
                          alignSelf: 'center',
                          marginTop: '5%',
                          bottom: 0,
                          flex: 0,
                        }}
                        onPress={() => this.props.navigation.navigate('Home')}>
                        <Text
                          style={{
                            textAlign: 'center',
                            fontWeight: '700',
                            color: '#FFF',
                            fontSize: 16,
                          }}>
                          Choose recommended portfolio
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={{
                          width: Dimensions.get('window').width / 1.2,
                          height: '7%',
                          backgroundColor: '#1FAD9E',
                          borderRadius: 25,
                          justifyContent: 'center',
                          position: 'relative',
                          alignSelf: 'center',
                          marginTop: '5%',
                          bottom: 0,
                          flex: 0,
                        }}>
                        <Text
                          style={{
                            textAlign: 'center',
                            fontWeight: '700',
                            color: '#FFF',
                            fontSize: 16,
                          }}>
                          Choose another portfolio
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </>
                </Swiper>
              </View>
            </>
          )}
        />
      </View>
    );
  }
}

export default Conservative;
