/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

import ColorButton from './components/ColorButton';

export default class App extends Component {
  state = {
    score: 0,
    target: []
  }
  _onPress = () => {
    this.setState({
      score: this.state.score + 1
    })
  }

  _onPressBeta = (id) => {
    (this.state.target[this.state.score] == id) ? this.setState({score: this.state.score + 1}) : {}; 
  }

  generateNumber(arr) {
    const subArr = arr.concat([Math.floor(Math.random() * 4)]);
    return subArr.length == 6 ? subArr : this.generateNumber(subArr);
  }
  componentDidMount() {
    const subTarget = this.generateNumber([]);
    console.log(subTarget);
    this.setState({
      target: subTarget
    });
  }

  render() {
    return (
      <View>
        <Text>hello react-native</Text>
        <Button onPress={this._onPress} title="Tap me!"></Button>
        <Text>{this.state.score}</Text>
        <Text>{this.state.target}</Text>
        <ColorButton onPress={() => this._onPressBeta(0)} background="red" />
        <ColorButton onPress={() => this._onPressBeta(1)} background="green" />
        <ColorButton onPress={() => this._onPressBeta(2)} background="yellow" />
        <ColorButton onPress={() => this._onPressBeta(3)} background="blue" />
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
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
