import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

class GameOver extends Component {
  state = {}
  render() {
    return (
      <View>
        <Text>Game Over</Text>
        <Text>{this.props.score}</Text>
        <Button onPress={this.props._updateGamePlay} title="Try again!" />
      </View>
    );
  }
}

export default GameOver;