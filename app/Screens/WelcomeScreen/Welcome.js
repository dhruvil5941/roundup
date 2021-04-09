import React, {Component} from 'react';
import {
  Image,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import styles from './styles';
import * as colors from '../../asset/colors';
import onboarding from '../../asset/Images/onboarding_image1.jpg';
class Welcome extends Component {
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
          <Text style={styles.descText}>
            RoundUp App will tally the total change of your transactions at the
            end of the month and send a deposit directly to the selected
            nonprofit. Make an impact with little effort.RoundUp App will tally
            the total change of your transactions at the end of the month and
            send a deposit directly to the selected nonprofit. Make an impact
            with little effort.RoundUp App will tally the total change of your
            transactions at the end of the month and send a deposit directly to
            the selected nonprofit. Make an impact with little effort.
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
          onPress={() => this.props.navigation.navigate('BlogDetails')}>
          <Text style={styles.bottomTrayBtnText}>NEXT</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Welcome;
