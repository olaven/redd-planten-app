import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";

import TimeFormats from "../util/TimeFormats"; 

export class Dataview extends React.Component {
  componentDidMount() {
    this.props.getData();
  }

  _renderItem(item) {
    return <Text>{item.moisture}</Text>;
  }
  _keyExtractor(item, index) {}

  render() {
    return (
      <View>
        {this.props.datapoints.map(datapoint => {
          return (
            <Text key={datapoint.timestamp} style={styles.textItem}>
              {datapoint.moisture} - {TimeFormats.getTime(datapoint.timestamp).all}
            </Text>
          );
        })}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  textItem: {
    marginTop: 20,
    color: "#ffff",
    fontSize: 20,
    alignSelf: "center"
  }
});