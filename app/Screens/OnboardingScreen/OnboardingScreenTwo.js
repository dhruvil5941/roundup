import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StatusBar,
  ScrollView,
} from 'react-native';
import styles from './styles';
import onboarding from '../../assets/images/onboarding_image2.jpg';
import Button from '../../Components/Button';
import * as colors from '../../assets/colors';

class OnboardingScreenTwo extends Component {
  render() {
    return (
      <View style={{backgroundColor: '#FFF', flex: 1}}>
        <StatusBar
          animated={true}
          backgroundColor={colors.white}
          translucent={true}
          barStyle="dark-content"
          hidden={false}
        />
        <ScrollView>
          <View>
            <Text style={styles.mainHeadingText}>Welcome to RoundUp!</Text>
            <View style={styles.descView}>
              <Text style={styles.descText}>
                Through 5 questions, we will understand your investment goals
                and risk preferences better, and this allows us to recommend the
                best portfolio to suit your needs.
              </Text>
            </View>
            <View style={styles.imgView}>
              <Image
                source={onboarding}
                resizemode={'contain'}
                style={{width: '100%', height: '100%'}}
              />
            </View>
          </View>
        </ScrollView>
        <View style={styles.bottomTray}>
          <Button
            title="NEXT"
            style={styles.bottomTrayBtn}
            onPress={() =>
              this.props.navigation.navigate('Userfinancesquestion')
            }
            newButton
          />
        </View>
      </View>
    );
  }
}

export default OnboardingScreenTwo;
