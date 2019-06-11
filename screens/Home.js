import React, { Component } from 'react';
import {View,Text,TextInput} from 'react-native';

export  class Home extends Component {


    constructor(props){
        super(props);
        this.state={inputText:''};
    }


    /* ES5 declarative syntax 
    function textChanged(text) {
        
    }
    */
/* ES6
    textChanged = (text) => {
        this.setState.inputText = text;
    }
    */
/* ES5
    function showObj(student) {
        console.log(student.first_name);
        console.log(student.last_name);
    }
    showObj({first_name:"kunal",last_name:"kumar"});
*/
/* ES6 
    showObj =({first_name,last_name}) => {
    console.log(first_name);
    console.log(last_name);
    }
    showObj({first_name:"kunal",last_name"kumar});
*/

    render() {
        return (<View style={{ alignItems: "center" }}>

            <Text style={{ alignItems: "center" ,fontSize:23}}> Hi {this.props.myName},</Text>
            {/* <TextInput placeholder="Enter here" onChangeText={(text) => {this.setState({inputText:text}) }}></TextInput>
             */}
          
            <TextInput style={{ alignItems: "center" ,fontSize:23}} placeholder="Enter here" onChangeText={(text) => {this.setState({inputText:text}) }}></TextInput>
            
           
            <Text style={{ alignItems: "center" }}> {this.state.inputText}</Text>
        </View>
        );
    }

}