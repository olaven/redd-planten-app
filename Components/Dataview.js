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
    return (
      <View>
        {this.props.datapoints.map(datapoint => {
          return (
            <Text key={datapoint.timestamp} style={styles.textItem}>
              {datapoint.moisture} - {datapoint.timestamp}
            </Text>
          );
        })}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  textItem: {
    fontSize: 15,
    textAlign: "center",
    margin: 20
  }
});