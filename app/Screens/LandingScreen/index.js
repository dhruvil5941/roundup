import React, {Component} from 'react';
import {View, Text, StatusBar} from 'react-native';
import styles from './styles';
import Button from '../../Components/Button';
import Color from '../../theme/Color';

class Landing extends Component {
  render() {
    return (
      <View style={styles.mainView}>
        <StatusBar
          animated={true}
          backgroundColor={Color.themeColor}
          translucent={true}
          barStyle="light-content"
          hidden={false}
        />
        <Text style={styles.mainHeadingText}>RoundUp</Text>
        <Button
          title="LOG IN"
          style={styles.login}
          onPress={() => this.props.navigation.navigate('OnboardingScreenOne')}
          solidButton
        />
        <Button
          title="CREATE AN ACCOUNT"
          style={styles.create}
          onPress={() => this.props.navigation.navigate('OnboardingScreenOne')}
          outlineButton
        />
      </View>
    );
  }
}

export default Landing;
