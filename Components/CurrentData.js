import React from "react";
import { StyleSheet, Text, View } from "react-native";
//my own modules
import TimeFormats from "./../util/TimeFormats";

export class CurrentData extends React.Component {
  getCurrentData() {
    let data = this.props.currentDatapoint;
    if (data) {
        TimeFormats.getDate(data.timestamp); 
        let now = TimeFormats.getTime(this.props.currentDatapoint.timestamp); 
        return data.moisture + " - " + now.hour + ":" + now.minute;
    }
  }

  render() {
    return (
      <Text style={styles.textStyle}>Nå: {this.getCurrentData()}</Text>
    );
  }
}

const styles = StyleSheet.create({
  textStyle: {
    flex: 1,
    fontSize: 50,
    marginTop: 200,
    alignSelf: "center"
  }
});
