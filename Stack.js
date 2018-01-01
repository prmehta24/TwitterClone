import React from 'react';
import { StackNavigator } from 'react-navigation';

import {Tabs} from './Tab.js';
import Main from './Main.js';
import Search from './Search.js';
export const Stacks = StackNavigator({
  Main: {
    screen: Tabs,
  },
  Search: {
    screen: Search,
  },
});
