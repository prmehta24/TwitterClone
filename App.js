import React from 'react';
import { AppRegistry, ScrollView, Image, Text} from 'react-native';
import {Stacks} from './Stack.js';
import {Tabs} from './Tab.js';
import {Drawers} from './Drawers.js';

export default class App extends React.Component {
  render() {
      return (<Drawers/>);
  }
}
