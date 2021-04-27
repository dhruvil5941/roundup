import React, {Component} from 'react';
import NavigatorStack from './navigation/stackNavigation';
import {LogBox} from 'react-native';
import {store} from './redux/store';
import {Provider} from 'react-redux';

LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <NavigatorStack />
      </Provider>
    );
  }
}

export default App;
