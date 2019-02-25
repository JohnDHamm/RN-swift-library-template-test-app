/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Templates from './templates';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleBox}>
          <Text style={styles.welcome}>React Native Swift Library Template Test</Text>
        </View>
        <Templates/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  titleBox: {
    backgroundColor: "#BADA55",
    padding: 10,
    marginVertical: 20,
  },
  welcome: {
    fontSize: 20,
    color: "#FFF",
    textAlign: 'center',
  },
});
