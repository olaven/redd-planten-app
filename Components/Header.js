import React from "react";
import { StyleSheet, Text, View } from "react-native";

export class Header extends React.Component {
  render() {
    return (
      <View style={styles.header_local}>
        <Text>This is the header</Text>
      </View>
    ); 
  }
}

const styles = StyleSheet.create({
  header_local: {
    backgroundColor: "#2e3"
  }
});
