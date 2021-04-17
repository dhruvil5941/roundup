import React, {Component} from 'react';
import {
  View,
  Text,
  Dimensions,
  StatusBar,
  ScrollView,
  FlatList,
} from 'react-native';
import Pie from 'react-native-pie';
import styles from './styles';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      homeData: '',
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
      'https://run.mocky.io/v3/1270953b-9720-4099-a72d-7da5e4211e60',
      requestOptions,
    )
      .then(response => response.text())
      .then(
        result => {
          this.setState({homeData: JSON.parse(result)});
        },
        // console.log('data', result),
      )
      .catch(error => console.log('error', error));
  };

  render() {
    console.log('HOME', this.state.homeData);
    const {homeData} = this.state;
    return (
      <View style={styles.mainView}>
        <StatusBar
          animated={true}
          backgroundColor="#1FAD9E"
          translucent={true}
          barStyle="light-content"
          hidden={false}
        />
        <ScrollView>
          <Text style={styles.accountValue}>Your Account Value</Text>
          <Text style={styles.totalAccountValue}>${homeData.accountValue}</Text>
          <View style={styles.totalGainView}>
            <Text style={styles.totalGain}>Total Gain :</Text>
            <Text style={styles.totalGainValue}>{homeData.totalGain}</Text>
          </View>
          <View style={styles.portfolioView}>
            <View style={{flexDirection: 'column'}}>
              <Text>Your Portfolio</Text>
              <Text style={styles.textModerately}>Moderately Conservation</Text>
              <View style={styles.portfolioIndicatorView}>
                <Text style={styles.portfolioIndicatorText}>Portfolio</Text>
              </View>
            </View>
            <View>
              <Pie
                radius={32}
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
          </View>
          <View style={styles.divider} />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: '3%',
              width: Dimensions.get('window').width - 70,
              alignSelf: 'center',
            }}>
            <Text style={styles.recurringView}>Recurring Contribution :</Text>
            <Text style={styles.monthlyText}>+$124.25 Monthly</Text>
          </View>
          <View style={styles.settingsView}>
            <Text style={styles.settingsText}>
              Recurring Contribution Settings
            </Text>
          </View>
          <View style={styles.divider} />
          <Text style={styles.contributionText}>Recurring Contribution</Text>
          <FlatList
            data={homeData.contributions}
            renderItem={({item}) => (
              <View style={styles.stockListView}>
                <Text style={styles.stockName}>{item.name}</Text>
                <Text style={styles.stockPrice}>+{item.amount}</Text>
              </View>
            )}
          />
          <View style={styles.seeMore}>
            <Text style={styles.seeMoreText}>See More Contribution</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Home;
