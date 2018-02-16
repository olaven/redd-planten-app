import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList
} from "react-native";
//my own package
import TimeFormats from "../TimeFormats.js";

export default class HistoryView extends Component {
  displayDataPoints(datapoints) {
    return datapoints.map(datapoint => {
      console.log(datapoint.timestamp)
      return <Text key={datapoint.timestamp} style={styles.datapoints}>
          {datapoint.moisture} - {this.formatTimestampForHistoryView(datapoint.timestamp)}
        </Text>;
    });
  }

  formatTimestampForHistoryView(timestamp){
    let timePart = TimeFormats.getTime(timestamp).hour + ":" + TimeFormats.getTime(timestamp).minute; 
    let datePart = TimeFormats.getDate(timestamp).day + "." + TimeFormats.getDate(timestamp).month; 
    
    return datePart + " " + timePart; 
  }

  render() {
    return (
      <View style={this.props.inheritedStyles}>
        <Text style={styles.header}>HISTORY</Text>

        <ScrollView>{this.displayDataPoints(this.props.datapoints)}</ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    alignSelf: "center",
    marginTop: 10,
    marginBottom: 30
  },
  datapoints: {
    alignSelf: "center",
    color: "khaki",
    margin: 5,
    fontSize: 20
  }
});
