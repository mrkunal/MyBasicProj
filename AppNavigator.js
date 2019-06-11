import React, { Component } from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import { Home } from './screens/Home';
import { HomeNew } from './screens/HomeNew';
import { NextScreen } from './screens/NextScreen';


const AppNavigatior = createStackNavigator({
    HomeView: {screen:HomeNew } ,
    NextView:  { screen: NextScreen }
}, {
        initialRouteName: 'HomeView'
    }

);

const AppContainer=createAppContainer(AppNavigatior);

export default AppContainer

// export default class MyNavigation extends Component {

//     render() {
//         return <AppContainer/>
//     }
// }