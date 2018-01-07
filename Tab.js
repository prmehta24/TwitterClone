import React from 'react';
import { TabNavigator } from 'react-navigation';


import Home from './Home.js';
import Search from './Search.js';
import Alerts from './Alerts.js';
import Mail from './Mail.js';
export const Tabs = TabNavigator({
 Home: {
    screen: Home,
  },
  Search: {
    screen: Search,
  },
  Alerts: {
    screen: Alerts,
  },
  Mail: {
    screen: Mail,
  }},

{
  tabBarOptions: {
    activeTintColor: 'blue',
    inactiveBackgroundColor:'white',
    activeBackgroundColor:'white',

    showIcon: true,
    showLabel: false,
    style: {
    backgroundColor: 'white',
  },

  }},
);
