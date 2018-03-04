import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList, 
  RefreshControl
} from "react-native";
//my own package
import TimeFormats from "../util/TimeFormats.js";

export default class HistoryView extends Component {
  displayDataPoints(datapoints) {
    return datapoints.map(datapoint => {
      return (
        <Text key={datapoint.timestamp} style={styles.datapoints}>
          {datapoint.moisture} -{" "}
          {this.formatTimestampForHistoryView(datapoint.timestamp)}
        </Text>
      );
    });
  }

  formatTimestampForHistoryView(timestamp) {
    let prettyTime =
      TimeFormats.getTime(timestamp).hour +
      ":" +
      TimeFormats.getTime(timestamp).minute;
    let prettyDate =
      TimeFormats.getDate(timestamp).day +
      "." +
      TimeFormats.getDate(timestamp).month;

    return prettyDate + " " + prettyTime;
  }

  render() {
    return <View style={this.props.inheritedStyles}>
        <Text style={styles.header}>HISTORY</Text>
        <ScrollView
          style={styles.scrollView}
          refreshControl={
            <RefreshControl
              refreshing={this.props.refreshing}
              onRefresh={this.props.refreshData}
            />
          }
        >
          {this.displayDataPoints(this.props.datapoints)}
        </ScrollView>
      </View>;
  }
}

const styles = StyleSheet.create({
  scrollView: {
    borderStyle: "solid",
    padding: 20,
    backgroundColor: "teal"
  },
  header: {
    alignSelf: "center",
    marginTop: 5,
    fontSize: 45,
    backgroundColor: "teal",
    padding: 10,
    paddingTop: 0,
    marginBottom: 10
  },
  datapoints: {
    alignSelf: "center",
    color: "khaki",
    backgroundColor: "teal",
    padding: 10, 
    margin: 5,
    fontSize: 20
  }
});
