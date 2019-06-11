import React, { Component } from 'react';
import { Image, View, Text, StyleSheet, ScrollView, Button } from 'react-native';
import {Home} from './screens/Home';

const myStyle = StyleSheet.create({
  myBasicComp: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "orange",
  },
  myBlueComp: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  myTextColor: {
    color: "green"
  }


});


export default class App extends Component{
  
  constructor(props) {
    super(props)
  }


  render() {
    return <View style={{ alignItems: "center" }}>
      <Home myName="How Are You" />
    </View>
    

    }
  }