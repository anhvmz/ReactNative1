import React, { Component, PureComponent } from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    View,
    Button
} from 'react-native';

class TextUnit extends PureComponent {
    state = {}
    render() {
        return (
            <TouchableOpacity onPress={this.props.onSelect} style={[styles.text, {
                backgroundColor: this.props.backgroundColor
            }]}>
                <Text style={{ color: this.props.textColor }}>{this.props.unit.name}</Text>
            </TouchableOpacity>
        );
    }
}

export default TextUnit;
const styles = StyleSheet.create({
    text: {
        // alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
});