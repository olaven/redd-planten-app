import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";

let moisture; 

export default class CurrentStatus extends Component {
  render() {
    
    moisture = this.props.datapoints[0].moisture; 
    
    return (
      <View style={this.props.inheritedStyles}>
        <Text style={styles.text}>Nå: {this.props.datapoints[0].moisture}</Text>
      </View>
    );
  }
}

/**
   * Returns a color based on the moisture level 
   */
  let determineColor = (moisture) => 
  {
    if(moisture > 400){
      return "seagreen"; 
    } else {
      if (moisture > 150) {
        return "khaki"; 
      } else {
        return "darkred"; 
      }
    }
  }

const styles = StyleSheet.create({
  text: {
    backgroundColor: determineColor(moisture),
    marginTop: 130,
    padding: 35,
    alignSelf: "center",
    fontSize: 55
  }
});
