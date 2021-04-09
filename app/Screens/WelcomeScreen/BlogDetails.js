import React, {Component} from 'react';
import {
  Button,
  View,
  Text,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import onboarding from '../../asset/Images/onboarding_image2.jpg';

class BlogDetails extends Component {
  render() {
    return (
      <View style={styles.mainView}>
        <Text style={styles.mainHeadingText}>Welcome to RoundUp!</Text>
        <View style={styles.descView}>
          <Text style={[styles.descText, {marginBottom: '25%'}]}>
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

export default BlogDetails;
