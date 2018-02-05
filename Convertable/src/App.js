import React, { PureComponent } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import reducers from './reducers/';
import { AppNavigation } from './AppNavigation';
import { parse } from 'path-to-regexp';
import { AsyncStorage } from 'react-native';

const persisData = store => next => action => {
  next(action);
  asyncSaveAppState(store.getState());
}

const asyncSaveAppState = async ({ baseValue, category, unitLeft, unitRight }) => {
  try {
    await AsyncStorage.setItem("@appState", JSON.stringify({ baseValue, category, unitLeft, unitRight }));
  }
  catch (err) {
    console.error(err);
  }
}

class App extends PureComponent {
  state = {
    isLoading: true,
  }
  componentDidMount() {
    this._loadBaseValue();
  }

  _loadBaseValue = async () => {
    const savedState = await AsyncStorage.getItem("@appState");
    this.setState({
      isLoading: false,
      store: createStore(
        reducers,
        JSON.parse(savedState) || {},
        applyMiddleware(persisData))
    });
  }
  render() {
    return (
      this.state.isLoading
        ? (<Text> Loading... </Text>)
        : (<Provider store={this.state.store}>
          <AppNavigation />
        </Provider>)
    );
  }
}

export default App;