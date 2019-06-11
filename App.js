import React, { Component } from 'react';
import { Image, View, Text, StyleSheet, ScrollView, Button } from 'react-native';


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

export default class MyBasicApp extends Component {


  constructor(props) {
    super(props)
    this.state = { btnPressedState: "Not Pressed",times:0 }

    setInterval(() => {

      this.setState(prevState => ({ times: prevState.times  }
     //   { btnPressedState: "String_3" }        
      ))
    }, 10000);
  }

  onMyBtnPressed = () => {
    this.state.times=this.state.times+1;
    if (this.state.times % 2 == 0) {
       this.setState({ btnPressedState: "Button Pressed" })
    }
    else {
      this.setState({ btnPressedState: "Not Pressed" })
    }
  }


  render() {
    return (<View style={myStyle.myBasicComp}>

      <Text style={{ width: 50, height: 50 }}>Hello World {this.state.times} </Text>
      <Button title={this.state.btnPressedState} onPress={this.onMyBtnPressed}/>
    </View>
    );

  }
}

export class MyBlueComp extends Component {

  render() {
    return (<View style={myStyle.myBlueComp}>
      <Text style={myStyle.myTextColor}>Hello World in Gold</Text>

    </View>
    );
  }

}