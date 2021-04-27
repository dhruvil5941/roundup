import React, {Component} from 'react';
import {
  View,
  Text,
  Dimensions,
  ScrollView,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import Pie from 'react-native-pie';
import styles from './styles';
import * as colors from '../../assets/colors';
import Url from '../../utility/url';
import {connect} from 'react-redux';
import {homeDataRequest} from '../../redux/home/actions';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.homeDataRequest();
  }

  render() {
    const {homeData} = this.props;
    if (!homeData) {
      return (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color={colors.themeColor} />
        </View>
      );
    } else {
      return (
        <View style={styles.mainView}>
          <ScrollView>
            <Text style={styles.accountValue}>Your Account Value</Text>
            <Text style={styles.totalAccountValue}>
              {homeData.accountValue}
            </Text>
            <View style={styles.totalGainView}>
              <Text style={styles.totalGain}>Total Gain :</Text>
              <Text style={styles.totalGainValue}>{homeData.totalGain}</Text>
            </View>
            <View style={styles.portfolioView}>
              <View style={{flexDirection: 'column'}}>
                <Text>Your Portfolio</Text>
                <Text style={styles.textModerately}>
                  Moderately Conservation
                </Text>
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
              <Text style={styles.monthlyText}>+$200 Monthly</Text>
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
}

const mapStateToProps = state => {
  return {
    homeData: state.homeReducer.homeData,
    homeDataError: state.homeReducer.homeDataError,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    homeDataRequest: () => dispatch(homeDataRequest()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
