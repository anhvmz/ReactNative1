import React, { PureComponent } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList
} from 'react-native';

import globalStyles from '../Styles';
import { categories } from '../database.json';
import UnitSelector from '../components/UnitSelector';
import { connect } from 'react-redux';
import { changeCategoryIdAction } from '../actions/changeCategoryIdAction';

class CategoryScreen extends PureComponent {
  state = {
    color: "white",
  }
  _onChangeCategoryId = id => {
    this.props.changeCategoryId(id);
  };

  _keyExtractor = item => item.id;

  _renderItem = ({ item, index }) => (<UnitSelector
    onChangeUnitId={this._onChangeCategoryId}
    item={{ title: item.name, id: item.id }}
    isEven={index % 2 === 0}
    isSelected={item.id === this.props.category}
  />)

  render() {
    return (
      <View style={{ flex: 1, paddingTop: 20 }}>
        <Button title="Toggle Screen" onPress={this.props.toggleScreen} />
        <FlatList
          style={[globalStyles.bgPrimary3, { flex: 1 }]}
          data={categories}
          renderItem={this._renderItem}
          keyExtractor={this._keyExtractor}
        />
      </View>
    );
  }
}

const mapAppStateToProps = state => ({
  category: state.category
});

const mapDispatchToProps = dispatch => ({
  changeCategoryId: newValue => dispatch(changeCategoryIdAction(newValue))
});

export default connect(mapAppStateToProps, mapDispatchToProps) (CategoryScreen);