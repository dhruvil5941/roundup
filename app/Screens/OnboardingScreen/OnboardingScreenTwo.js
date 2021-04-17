import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import onboarding from '../../assets/images/onboarding_image2.jpg';

class OnboardingScreenTwo extends Component {
  render() {
    return (
      <View style={styles.mainView}>
        <Text style={styles.mainHeadingText}>Welcome to RoundUp!</Text>
        <View style={styles.descView}>
          <Text style={[styles.descText]}>
            Through 5 questions, we will understand your investment goals and
            risk preferences better, and this allows us to recommend the best
            portfolio to suit your needs.
          </Text>
        </View>
        <View style={styles.imgView}>
          <Image
            source={onboarding}
            resizemode={'contain'}
            style={{width: '100%', height: '100%'}}
          />
        </View>
        <View style={styles.bottomTray} />
        <TouchableOpacity
          style={styles.bottomTrayBtn}
          onPress={() =>
            this.props.navigation.navigate('Userfinancesquestion')
          }>
          <Text style={styles.bottomTrayBtnText}>NEXT</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default OnboardingScreenTwo;