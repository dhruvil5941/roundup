import React, {Component} from 'react';
import {View, Text, Image, ScrollView, Dimensions} from 'react-native';
import styles from './styles';
import onboarding from '../../assets/images/onboarding_image2.jpg';
import Button from '../../components/button';

class OnboardingScreenTwo extends Component {
  render() {
    return (
      <View style={styles.mainView}>
        <ScrollView>
          <Text style={styles.mainHeadingText}>Welcome to RoundUp!</Text>
          <View style={styles.descView}>
            <Text style={styles.descText}>
              Through 5 questions, we will understand your investment goals and
              risk preferences better, and this allows us to recommend the best
              portfolio to suit your needs
            </Text>
          </View>
          <View style={styles.newimgView}>
            <Image
              source={onboarding}
              resizemode={'contain'}
              style={styles.imageStyle}
            />
          </View>
        </ScrollView>
        <View style={styles.bottomView}>
          <View style={styles.bottomTray} />
          <View>
            <Button
              title="Next"
              style={styles.bottomTrayBtn}
              onPress={() =>
                this.props.navigation.navigate('Userfinancesquestion')
              }
              newButton
            />
          </View>
        </View>
      </View>
    );
  }
}

export default OnboardingScreenTwo;
