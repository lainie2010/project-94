import React,{Component} from "react";
import {Text, View, TextInput, KeyboardAvoidingView, ImageBackground} from "react-native";

export default class Homescreen extends Component{
  render(){
    return(
      <View
      style = {{
        justifyContent:"center",
        alignItems:"center"
      }}>
        <Text>Homescreen</Text>
      </View>
    )
  }
}