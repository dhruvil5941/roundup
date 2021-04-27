import React from 'react';
import {Text} from 'react-native';

const Stocks = props => {
  const {nameStyle, percentageStyle, name, percentage} = props;
  return (
    <>
      <Text style={nameStyle}>{name}</Text>
      <Text style={percentageStyle}>{percentage}</Text>
    </>
  );
};
export default Stocks;
