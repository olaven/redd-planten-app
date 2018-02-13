import React, { Component } from "react";
import { Platform, StyleSheet, AppRegistry, Text, View } from "react-native";

//importing my components
import CurrentStatus from "./Components/CurrentStatus";
import HistoryView from "./Components/HistoryView";

export default class App extends Component<Props> {
  render() {
    return <View style={styles.container}>
        <CurrentStatus inheritedStyles={styles.currentStatus} />
        <HistoryView inheritedStyles={styles.historyView}></HistoryView>
      </View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  currentStatus: {
    flex: 3,
    backgroundColor: "powderblue"
  },
  historyView: {
    flex: 2,
    backgroundColor: "steelblue"
  }
});