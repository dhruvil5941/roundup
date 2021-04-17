import React, {Component} from 'react';
import NavigatorStack from './Navigation/StackNavigation';
import {LogBox} from 'react-native';

LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs();

class App extends Component {
  render() {
    return <NavigatorStack />;
  }
}

export default App;
