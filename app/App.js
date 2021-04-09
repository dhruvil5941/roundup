import React, {Component} from 'react';
import NavigatorStack from './navigation/NavigationStack';
import {NavigationContainer} from '@react-navigation/native';
class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <NavigatorStack />
      </NavigationContainer>
    );
  }
}

export default App;
