import React from "react";
import { StyleSheet, Text, View } from "react-native";

export class CurrentData extends React.Component {
   
    getCurrentData(){
        let data = this.props.currentDatapoint; 
        if(data){
            return data.moisture + " - " + data.timestamp; 
        }
    }
   
    render(){
        return(
            <Text style={styles.textStyle}>
                Fuktighet: {this.getCurrentData()}
            </Text>
        )
    }
}

const styles = StyleSheet.create({
    textStyle : {
        backgroundColor: "#fade"
    }
})