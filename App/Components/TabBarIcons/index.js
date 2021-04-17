import React, {Component} from 'react';
import FastImage from 'react-native-fast-image';
import styles from './style';
class TabBarIcons extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <FastImage
        style={styles.iconStyle}
        source={this.props.icon}
        resizeMode={'contain'}
        tintColor={this.props.focused ? 'green' : '#808080'}
      />
    );
  }
}
export default TabBarIcons;
