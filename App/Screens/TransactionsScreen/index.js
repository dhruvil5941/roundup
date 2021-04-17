import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

class TransactionsScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>This Screen is under process</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ebebeb',
  },
  text: {
    color: '#101010',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default TransactionsScreen;
