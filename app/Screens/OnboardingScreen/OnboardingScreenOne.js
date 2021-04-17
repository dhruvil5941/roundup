import React, {Component} from 'react';
import {
  Image,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  ScrollView,
} from 'react-native';
import styles from './styles';
import * as colors from '../../assets/colors';
import onboarding from '../../assets/images/onboarding_image1.jpg';
class OnboardingScreenOne extends Component {
  render() {
    return (
      <View style={styles.mainView}>
        <StatusBar
          animated={true}
          backgroundColor={colors.white}
          translucent={true}
          barStyle="dark-content"
          hidden={false}
        />

        <Text style={styles.mainHeadingText}>Welcome to RoundUp!</Text>
        <View style={styles.descView}>
          <Text style={[styles.descText, {marginBottom: '5%'}]}>
            We're so excited to start your investment journey through your
            everyday digital transactions.
          </Text>
          <Text style={styles.descText}>
            RoundUp allows you to round up your transactions to the nearest
            dollar, 3rd dollar or 5th dollar, and that rounded up amount is
            automatically channeled monthly into an investment portfolio
            recommended for you.
          </Text>
        </View>
        <View style={[styles.imgView]}>
          <Image
            source={onboarding}
            resizemode={'contain'}
            style={{width: '100%', height: '100%'}}
          />
        </View>
        <View style={styles.bottomTray} />
        <TouchableOpacity
          style={styles.bottomTrayBtn}
          onPress={() => this.props.navigation.navigate('OnboardingScreenTwo')}>
          <Text style={styles.bottomTrayBtnText}>NEXT</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default OnboardingScreenOne;
