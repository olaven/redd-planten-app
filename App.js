import React, { Component } from "react";
import { Platform, StyleSheet, AppRegistry, Text, View } from "react-native";

//importing my components
import CurrentStatus from "./Components/CurrentStatus";
import HistoryView from "./Components/HistoryView";

export default class App extends Component {

  componentWillMount() {
    this.setState({
      datapoints: [
        {
          timestamp : "inittime", 
          moisture : 0 
        } 
      ]
    }); 
        setInterval(() => {
          console.log(this.state.datapoints);
        }, 1000);

    this.refreshData(); //refresh on startup
  }

  refreshData() {
    fetch("http://phant.labben.org:8090/output/pjKMyaJ9adU9XKYolNoKfYeZz8L.json")
        .then(response => {
          if(response.status === "OK"){
            this.handleFetchedData(response);
          }
        })
        .catch(error => {
          console.log(error.message); 
        }); 
  }
  handleFetchedData(response) {
    //JSON string from the response to js object
    let result = JSON.parse(JSON.parse(JSON.stringify(response._bodyText)));
    this.setState({
      datapoints : result
    })
  }

  render() {
    return <View style={styles.container}>
        <CurrentStatus inheritedStyles={styles.currentStatus} />
        <HistoryView inheritedStyles={styles.historyView} datapoints={this.state.datapoints} />
      </View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  currentStatus: {
    flex: 3,
    backgroundColor: "rosybrown"
  },
  historyView: {
    flex: 2,
    backgroundColor: "steelblue"
  }
});
