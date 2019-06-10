import React,{Component} from 'react';
import {Image,View,Text,StyleSheet,ScrollView} from 'react-native';


const myStyle =  StyleSheet.create({
 myBasicComp:{
   flex:1,
   justifyContent:"center",
   alignItems:"center",
   backgroundColor:"blue",
 },
 myBlueComp:{
  flex:1,
  justifyContent:"center",
  alignItems:"center",
  backgroundColor:"white",
},
myTextColor:{
  color:"green"
}


});

export default class MyBasicApp extends Component{

  render(){
      return (<View style={myStyle.myBasicComp}>
        
        <Text>Hello World</Text>
      </View>
      );

  }
}

export class MyBlueComp extends Component{

  render(){
    return (<View style={myStyle.myBlueComp}>
      <Text style={myStyle.myTextColor}>Hello World in Gold</Text>
    
    </View>
    );
  }

}

class ScrollingImageWithText extends Component {
  render() {
    return (
      <ScrollView>
        <Image
          source={{uri: 'https://facebook.github.io/react-native/img/header_logo.png'}}
          style={{width: 66, height: 58}}
        />
        <Text>
          On iOS, a React Native ScrollView uses a native UIScrollView.
          On Android, it uses a native ScrollView.

          On iOS, a React Native Image uses a native UIImageView.
          On Android, it uses a native ImageView.

          React Native wraps the fundamental native components, giving you
          the performance of a native app using the APIs of React.
        </Text>
      </ScrollView>
    );
  }
}