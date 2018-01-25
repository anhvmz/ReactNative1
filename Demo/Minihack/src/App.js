
import React, { Component, PureComponent } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';

import TextUnit from "./TextUnit";
const UNIT = {
  METER: { name: "Meter", value: 1000 },
  DECIMETER: { name: "Decimeter", value: 100 },
  CENTIMETER: { name: "Centimeter", value: 10 },
  MILIMETER: { name: "Milimeter", value: 1 },
}

export default class App extends PureComponent {
  state = {
    currentUnit: UNIT.CENTIMETER,
    changUnit: UNIT.CENTIMETER,
    currentValue: 0,
    changeValue: 0
  }

  _changeCurrentUnit = (input) => {
    const rate = this.state.changUnit.value / input.value;
    this.setState({
      currentUnit: input,
      currentValue: parseFloat(this.state.changeValue * rate)
    });
  }
  _changeChangeUnit = (input) => {
    const rate = this.state.currentUnit.value / input.value;
    this.setState({
      changUnit: input,
      changeValue: parseFloat(this.state.currentValue * rate)
    });
  }

  _changeCurrentValue = (input) => {
    const rate = this.state.currentUnit.value / this.state.changUnit.value;
    this.setState({
      currentValue: input,
      changeValue: parseFloat(input * rate)
    });
  }

  _changeChangeValue = (input) => {
    const rate = this.state.changUnit.value / this.state.currentUnit.value;
    this.setState({
      changeValue: input,
      currentValue: parseFloat(input * rate)
    });
  }

  render() {
    return (
      <View>
        <View style={styles.header}>
          <Text style={{ flex: 1, fontSize: 30, color: "white" }}>{this.state.currentUnit.name}</Text>
          <Text style={{ flex: 1, fontSize: 30, color: "white" }}>{this.state.changUnit.name}</Text>
        </View>

        <View style={styles.unit}>
          <TextInput style={styles.textbox} onChangeText={this._changeCurrentValue} value={this.state.currentValue.toString()} />
          <TextInput style={styles.textbox} onChangeText={this._changeChangeValue} value={this.state.changeValue.toString()} />
        </View>

        <View style={styles.unit}>
          <TextUnit unit={UNIT.METER} onSelect={() => { this._changeCurrentUnit(UNIT.METER) }}
            textColor={this.state.currentUnit == UNIT.METER ? "yellow" : "white"} backgroundColor= "#6A369B"/>
          <TextUnit unit={UNIT.METER} onSelect={() => { this._changeChangeUnit(UNIT.METER) }}
            textColor={this.state.changUnit == UNIT.METER ? "yellow" : "white"} backgroundColor= "#6A369B"/>
        </View>
        <View style={styles.unit}>
          <TextUnit unit={UNIT.DECIMETER} onSelect={() => { this._changeCurrentUnit(UNIT.DECIMETER) }}
            textColor={this.state.currentUnit == UNIT.DECIMETER ? "yellow" : "white"} backgroundColor= "#773CAD"/>
          <TextUnit unit={UNIT.DECIMETER} onSelect={() => { this._changeChangeUnit(UNIT.DECIMETER) }}
            textColor={this.state.changUnit == UNIT.DECIMETER ? "yellow" : "white"} backgroundColor= "#773CAD"/>
        </View>

        <View style={styles.unit}>
          <TextUnit unit={UNIT.CENTIMETER} onSelect={() => { this._changeCurrentUnit(UNIT.CENTIMETER) }}
            textColor={this.state.currentUnit == UNIT.CENTIMETER ? "yellow" : "white"} backgroundColor= "#6A369B"/>
          <TextUnit unit={UNIT.CENTIMETER} onSelect={() => { this._changeChangeUnit(UNIT.CENTIMETER) }}
            textColor={this.state.changUnit == UNIT.CENTIMETER ? "yellow" : "white"} backgroundColor= "#6A369B"/>
        </View>

        <View style={styles.unit}>
          <TextUnit unit={UNIT.MILIMETER} onSelect={() => { this._changeCurrentUnit(UNIT.MILIMETER) }}
            textColor={this.state.currentUnit == UNIT.MILIMETER ? "yellow" : "white"} backgroundColor= "#773CAD"/>
          <TextUnit unit={UNIT.MILIMETER} onSelect={() => { this._changeChangeUnit(UNIT.MILIMETER) }}
            textColor={this.state.changUnit == UNIT.MILIMETER ? "yellow" : "white"} backgroundColor= "#773CAD"/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: 'center',
    backgroundColor: "#60318C",
    paddingTop: 40,
    height: 100,
  },
  unit: {
    flexDirection: "row",
    height: 50
  },
  unit: {
    flexDirection: "row",
    height: 50
  },
  textbox: {
    flex: 1,
    fontSize: 30,
    backgroundColor: "#60318C",
  }
});
