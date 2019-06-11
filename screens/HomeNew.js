import React, { Component } from 'react';
import {View,Text,TextInput,Button} from 'react-native';


export  class HomeNew extends Component{

    constructor(props){
        super(props);
        this.state = {textInputValue:''};
    }

    static navigationOptions = {
        title:"HomeNew",
        headerStyle:{
            backgroundColor:'orange'
        },
        headerTitleStyle:{
            color:'white'
        }
    }

    handleBtn = () => {
        this.props.navigation.navigate('NextView',{text:this.state.textInputValue, rollnum:233, backBtn:this.handleBackCall.bind(this)});
    }

    handleBackCall = (value) => this.setState({textInputValue:value});

    hanldeTextField = (txt) => this.setState({textInputValue:txt})

    render(){
        return <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <TextInput placeholder="Enter something here" onChangeText={this.hanldeTextField} />
            <Button title="Send & Move to Next Screen" onPress={this.handleBtn}/>
            <Text>{this.state.textInputValue}</Text>
        </View>
    }
}