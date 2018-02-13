import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";

export default class CurrentStatus extends Component<Props> {
    render () {
        return <View style={this.props.inheritedStyles}>
            <Text>CURRENTSTATUS</Text>
          </View>;
    }
}