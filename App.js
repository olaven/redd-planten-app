import React from "react";
import { StyleSheet, Text, View, RefreshControl } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

//importing my components
import { Header } from "./Components/Header";
import { Dataview } from "./Components/Dataview";
import { CurrentData } from "./Components/CurrentData";

export default class App extends React.Component {
  constructor(){
    super(); 
    this.state = {
      datapoints : [], 
      refreshing : false
    }
  }
  //getting data from data stream -> passed to Dataview
  getData() {
    fetch(
      "http://phant.labben.org:8090/output/pjKMyaJ9adU9XKYolNoKfYeZz8L.json"
    ).done(response => {
      this.state.refreshing = false; 
      this.handleData(response);
    });
  }
  handleData(response) {
    //JSON string from the response to js object
    let result = JSON.parse(JSON.parse(JSON.stringify(response._bodyText)));
    this.setState({
      datapoints: result
    });
  }
  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.currentDatapointView}>
          <CurrentData currentDatapoint={this.state.datapoints[0]} />
        </View>
        <ScrollView 
          style={styles.allDatapontsView}
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this.getData.bind(this)}
            />
          }
        >
          <Dataview datapoints={this.state.datapoints} getData={this.getData.bind(this)} />
        </ScrollView>
      </View>
    ); 
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row"
  },
  currentDatapointView: {
    backgroundColor: "#f22f",
    flex: 1
  },
  allDatapontsView: {
    width: "100%",
    alignSelf: "center",
    flex: 1,
    backgroundColor: "#aaaa"
  }
});
