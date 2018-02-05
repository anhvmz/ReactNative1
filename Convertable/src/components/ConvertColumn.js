import React, { PureComponent } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import { connect } from 'react-redux';

import { createBaseValueAction, changeUnitLeftAction, changeUnitRightAction } from '../actions/';

import globalStyles from '../Styles';

import UnitDisplay from './UnitDisplay';
import UnitList from './UnitList';

class ConvertColumn extends PureComponent {
  state = {
  }

  // _onChangeUnitId = (id) => this.setState({ currentUnitId: id });
  _onChangeUnitId = (id) => {
    this.props.columnID === "1"
      ? this.props.changeUnitLeft(id)
      : this.props.changeUnitRight(id)
  };

  _onChangeText = (text) => {
    const currentUnitId = this.props.columnID === "1" ? this.props.unitLeft : this.props.unitRight;
    const currentItem = this.props.items.filter(
      item => item.id === this.state.currentUnitId
    )[0];

    this.props.changeBaseValue(
      parseFloat(text || 0) * currentItem.ratio
    );
  }

  render() {
    const currentUnitId = this.props.columnID === "1" ? this.props.unitLeft : this.props.unitRight;
    const currentItem = this.props.items.filter(
      item => item.id === currentUnitId
    )[0];
    return (
      <View style={[styles.column]}>
        <UnitDisplay
          title={currentItem.title}
          value={this.props.baseValue / currentItem.ratio}
          onChange={this._onChangeText}
        />
        <UnitList
          items={this.props.items}
          selectedId={currentUnitId}
          onChangeUnitId={this._onChangeUnitId}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  column: {
    flex: 1
  }
});

const mapAppStateToProps = state => ({
  baseValue: state.baseValue,
  unitLeft: state.unitLeft,
  unitRight: state.unitRight
});

const mapDispatchToProps = dispatch => ({
  changeBaseValue: newValue => dispatch(createBaseValueAction(newValue)),
  changeUnitLeft: newValue => dispatch(changeUnitLeftAction(newValue)),
  changeUnitRight: newValue => dispatch(changeUnitRightAction(newValue))
});

export default connect(mapAppStateToProps, mapDispatchToProps)(ConvertColumn);