import React from 'react';
import styles from './styles';
import {Text, TouchableOpacity} from 'react-native';

const Button = props => {
  const {
    outlineButton,
    solidButton,
    outlineColor,
    backgroundColor,
    title,
    onPress,
    textColor,
    textStyle,
    style,
    newButton,
  } = props;
  console.log(props);
  return (
    <TouchableOpacity
      style={[
        styles.buttonStyle,
        style,
        outlineButton && {
          borderWidth: 0.5,
          borderColor: outlineColor ? '#000' : '#f5f5f5',
        },
        solidButton && {
          backgroundColor: backgroundColor ? '#1FAD9E' : '#FFF',
        },
        newButton && {
          backgroundColor: backgroundColor ? backgroundColor : '#1FAD9E',
        },
      ]}
      onPress={onPress}>
      <Text
        style={[
          styles.buttonText,
          outlineButton && {color: textColor ? textColor : '#FFFFFF'},
          solidButton && {color: textColor ? '#FFF' : '#000'},
          newButton && {color: textColor ? '#000' : '#FFF'},
          textStyle,
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};
export default Button;
