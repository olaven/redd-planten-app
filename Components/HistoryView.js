import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, ScrollView } from "react-native";

export default class HistoryView extends Component {
  render() {
    return (
      <ScrollView style={this.props.inheritedStyles}>
        <Text style={styles.text}>HISTORY</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  text : {
    alignSelf: "center", 
    marginTop: 10
  }
})
