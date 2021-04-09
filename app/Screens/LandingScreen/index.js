import React, {Component} from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  StatusBar,
} from 'react-native';
import styles from './styles';
import * as colors from '../../asset/colors';

class Landing extends Component {
  render() {
    return (
      <View style={styles.mainView}>
        <StatusBar
          animated={true}
          backgroundColor={colors.themeColor}
          translucent={true}
          barStyle="light-content"
          hidden={false}
        />
        <Text style={styles.mainHeadingText}>RoundUp</Text>
        <TouchableOpacity
          style={styles.logInBtn}
          onPress={() => this.props.navigation.navigate('Welcome')}>
          <Text style={styles.logInBtnText}>LOG IN</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.signUpBtn}
          onPress={() => this.props.navigation.navigate('Welcome')}>
          <Text style={styles.signUpBtnText}>CREATE AN ACCOUNT</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Landing;
