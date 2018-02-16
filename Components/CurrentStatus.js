import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";

export default class CurrentStatus extends Component {
  render() {
    return (
      <View style={this.props.inheritedStyles}>
        <Text style={styles.text}>CURRENTSTATUS</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    text : {
        backgroundColor: "#fade",
        marginTop: 300, 
        padding: 20,
        borderStyle: "solid",
        alignSelf: "center", 
        fontSize: 35
    }
})