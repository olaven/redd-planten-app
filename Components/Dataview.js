import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";

export class Dataview extends React.Component {
  componentDidMount() {
    this.props.getData();
  }

  _renderItem(item) {
    return <Text>{item.moisture}</Text>;
  }
  _keyExtractor(item, index) {}

  render() {
    console.log(this.props.datapoints);
    return (
      <View>
        {this.props.datapoints.map(datapoint => {
          return (
            <Text key={datapoint.timestamp}>
              {datapoint.moisture} - {datapoint.timestamp}
            </Text>
          );
        })}
      </View>
    );
  }
}
