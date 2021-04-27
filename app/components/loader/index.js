import React from 'react';
import {ActivityIndicator} from 'react-native';

const Loader = props => {
  const {size, color, style} = props;
  return <ActivityIndicator size={size} color={color} style={style} />;
};
export default Loader;
