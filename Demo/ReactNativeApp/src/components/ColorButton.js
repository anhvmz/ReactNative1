
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Button,
    TouchableOpacity
} from 'react-native';

class ColorButton extends Component {
    render() {
        return (
            <TouchableOpacity onPress={this.props.onPress}>
                <View style={{
                    backgroundColor: this.props.background,
                    width: 140,
                    height: 140
                }}></View>
            </TouchableOpacity>
        );
    }
}

export default ColorButton;