import React from 'react';
import { AppRegistry, ScrollView, Image, Text} from 'react-native';
import {Stacks} from './Stack.js';
import {Tabs} from './Tab.js';
import {Drawers} from './Drawers.js';
//import { Font } from 'expo';


export default class App extends React.Component {
  /*componentDidMount() {
     Font.loadAsync({

       'Roboto_medium': require('./assets/fonts/Roboto-Medium.ttf'),
     });
   }*/
   constructor() {
     super();
     this.state = {
       isReady: false
     };
   }
   componentWillMount() {
     this.loadFonts();
   }
   async loadFonts() {
     await Expo.Font.loadAsync({
       Roboto: require("native-base/Fonts/Roboto.ttf"),
       Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
       Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
     });
     this.setState({ isReady: true });
   }

  render() {
    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }
      return (
        <Drawers/>
        );
  }
}
