import React from 'react';
import Pie from 'react-native-pie';

const PieChart = props => {
  const {radius, sections, dividerSize, strokeCap} = props;
  return (
    <Pie
      radius={radius}
      sections={sections}
      dividerSize={dividerSize}
      strokeCap={strokeCap}
    />
  );
};
export default PieChart;
