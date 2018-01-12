import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import GamePlay from './containers/GamePlay';
import GameOver from './containers/GameOver';

const GAME_STATE = {
  PLAYING: "PLAYING",
  GAMEOVER: "GAMEOVER"
}

export default class App extends Component {
  state = {
    score: 0,
    gameState: GAME_STATE.PLAYING
  }

  _updateGameOver = (input) => {
    this.setState({
      gameState: GAME_STATE.GAMEOVER,
      score: input
    });
  }

  _updateGamePlay = () => {
    this.setState({
      gameState: GAME_STATE.PLAYING,
      score: 0
    });
  }

  render() {
    return this.state.gameState === GAME_STATE.PLAYING
      ? <GamePlay _onGameOver={this._updateGameOver} />
      : <GameOver _updateGamePlay={this._updateGamePlay} score={this.state.score} />;
  }
}