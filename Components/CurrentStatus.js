import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";

export default class CurrentStatus extends Component {
  render() {
    return (
      <View style={this.props.inheritedStyles}>
        <Text style={styles.text}>Nå: {this.props.datapoints[0].moisture}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    backgroundColor: "khaki",
    marginTop: 300,
    padding: 20,
    alignSelf: "center",
    fontSize: 35
  }
});
