import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";

//importing my components 
import { Header } from './Components/Header'; 
import { Dataview } from './Components/Dataview'; 

export default class App extends React.Component {
  componentWillMount(){
    this.setState({
      datapoints: []
    })
  }
  //getting data from data stream -> passed to Dataview
  getData() {
    fetch(
      "http://phant.labben.org:8090/output/pjKMyaJ9adU9XKYolNoKfYeZz8L.json"
    ).done(response => {
      this.handleData(response); 
    });
  }
  handleData(response) {
    //JSON string from the response to js object
    let result = JSON.parse(JSON.parse(JSON.stringify(response._bodyText))); 
    this.setState({
      datapoints : result
    })
  }
  render() {
    return <ScrollView style={styles.mainView}>
        <Dataview 
          style={styles.dataView}
          datapoints={this.state.datapoints} 
          getData={this.getData.bind(this)} 
        />
      </ScrollView>;
  }
}

const styles = StyleSheet.create({
  dataView: {
    color: "#f0f"
  }
});
