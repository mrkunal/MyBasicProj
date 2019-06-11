import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

const calc = StyleSheet.create({

  rootContainer: {
    flex: 1
  },
  resultContainer: {
    flex: 2,
    backgroundColor: 'orange',

  },
  inputsContainer: {
    flex: 8,
    backgroundColor: 'yellow'
  },
  resultText: {
    color: 'white',
    fontSize: 70,
    fontWeight: 'bold',
    textAlign: 'right'

  },
  inputRow: {
    flex: 1,
    flexDirection: 'row'
  },

  inputButton: {

    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'black'
  },
  inputButtonText:{
    color:'black',
    fontSize: 30
  }



});

export default class App extends Component {




  render() {
    return (<View style={calc.rootContainer}>
      <View style={calc.resultContainer}>
        <Text style={calc.resultText}>0</Text>
      </View>
      <View style={calc.inputsContainer}>

        <View style={calc.inputRow}>
          <TouchableOpacity style={calc.inputButton}>
            <Text style={calc.inputButtonText}>AC</Text>
          </TouchableOpacity>

          <TouchableOpacity style={calc.inputButton}>
            <Text style={calc.inputButtonText}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={calc.inputButton}>
            <Text style={calc.inputButtonText}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={calc.inputButton}>
            <Text style={calc.inputButtonText}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={calc.inputRow}>
        <TouchableOpacity style={calc.inputButton}>
            <Text style={calc.inputButtonText}>7</Text>
          </TouchableOpacity>

          <TouchableOpacity style={calc.inputButton}>
            <Text style={calc.inputButtonText}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity style={calc.inputButton}>
            <Text style={calc.inputButtonText}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity style={calc.inputButton}>
            <Text style={calc.inputButtonText}>-</Text>
          </TouchableOpacity>
      

        </View>
        <View style={calc.inputRow}>
        <TouchableOpacity style={calc.inputButton}>
            <Text style={calc.inputButtonText}>6</Text>
          </TouchableOpacity>

          <TouchableOpacity style={calc.inputButton}>
            <Text style={calc.inputButtonText}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={calc.inputButton}>
            <Text style={calc.inputButtonText}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity style={calc.inputButton}>
            <Text style={calc.inputButtonText}>*</Text>
          </TouchableOpacity>
      
        </View>
        <View style={calc.inputRow}>
        <TouchableOpacity style={calc.inputButton}>
            <Text style={calc.inputButtonText}>1</Text>
          </TouchableOpacity>

          <TouchableOpacity style={calc.inputButton}>
            <Text style={calc.inputButtonText}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={calc.inputButton}>
            <Text style={calc.inputButtonText}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={calc.inputButton}>
            <Text style={calc.inputButtonText}>/</Text>
          </TouchableOpacity>
      
        </View>

      </View>


    </View>);
  }
}