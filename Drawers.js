import React from 'react';
import { DrawerNavigator,DrawerItems } from 'react-navigation';
import {Icon,Footer,Header,Left,Right} from "native-base";
import { EvilIcons,MaterialIcons,Ionicons,MaterialCommunityIcons } from '@expo/vector-icons';
import {Stacks} from './Stack.js';
import {Image, ScrollView,Text,View} from 'react-native'
//import Search from './Search.js';
//import Alerts from './Alerts.js';
//import Mail from './Mail.js';
export const Drawers = DrawerNavigator({
  Profile: {
    screen: Stacks,
    navigationOptions: {
      drawerLabel: 'Profile',
      drawerIcon: ({ tintColor}) => (
       <MaterialIcons
          name="person-outline"
          size={20}
          style={{ color: tintColor }}
        />
      ),
    },
  },
  Lists: {
    screen: Stacks,
    navigationOptions: {
      drawerLabel: 'Lists',
      drawerIcon: ({ tintColor}) => (
       <Ionicons
          name="md-list-box"
          size={20}
          style={{ color: tintColor }}
        />
      ),
    },
  },
  Moments: {
    screen: Stacks,
    navigationOptions: {
      drawerLabel: 'Moments',
      drawerIcon: ({ tintColor}) => (
       <Ionicons name="ios-flash-outline"
          size={20}
          style={{ color: tintColor }}
        />
      ),
    },
  },
  Highlights: {
    screen: Stacks,
    navigationOptions: {
      drawerLabel: 'Highlights',
      drawerIcon: ({ tintColor}) => (
       <MaterialCommunityIcons
          name="vector-combine"
          size={20}
          style={{ color: tintColor }}
        />
      ),
    },
  },
  Settings: {
    screen: Stacks,
    navigationOptions: {
      drawerLabel: 'Settings and privacy',

    },
  },
  Help: {
    screen: Stacks,
    navigationOptions: {
      drawerLabel: 'Help Centre',

    },
  },
},

{
  drawerOpenRoute: 'DrawerOpen',
drawerCloseRoute: 'DrawerClose',
drawerToggleRoute: 'DrawerToggle',
  DrawerItems: {
    activeTintColor: '#7567B1',


  },
  contentComponent: props =>
  <View>
  <Header><Text>Header</Text></Header>
   <DrawerItems {...props} />
   <Footer style={{ position: 'absolute',
    height: 40,
    left: 0, bottom:-150 }}><Left><Ionicons  name="ios-moon-outline" size={20}/></Left>
    <Right></Right></Footer>
 </View>
},
);
