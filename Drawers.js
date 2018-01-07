import React from 'react';
import { DrawerNavigator,DrawerItems } from 'react-navigation';
import {Icon,Footer,Header,Left,Right,Card,CardItem,Thumbnail,Body, Container,Content,Text,} from "native-base";
import { EvilIcons,MaterialIcons,Ionicons,MaterialCommunityIcons } from '@expo/vector-icons';
import {Stacks} from './Stack.js';
import {Image,View,ScrollView} from 'react-native'
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
  <Container>
        <Header style={{height:150,backgroundColor:"white"}}>
        <View style={{flex: 1, flexDirection: 'column',marginTop:30,marginLeft:10}}>
        <View><Thumbnail small source={require('./face4.png')} style={{left:10}} /></View>
      <View style={{marginBottom:2,marginTop:2}}><Text style={{fontWeight:"bold"}}>Bob Graham</Text><Right><Ionicons  style={{right:-100, color:"#1DA1F2" }} name="ios-arrow-down" size={15}/></Right></View>
      <View style={{marginBottom:2,marginTop:2}}><Text style={{color:"grey",fontSize:15}}>@Bob_G</Text></View>
      <View style={{marginBottom:2,marginTop:2,flexDirection: 'row'}}><Text style={{fontWeight:"bold",fontSize:15}}>191</Text><Text style={{color:"grey",fontSize:15}}> Following   </Text><Text style={{fontWeight:"bold",fontSize:15}}>  263</Text><Text style={{color:"grey",fontSize:15}}> Followers</Text></View>

       </View>

        </Header>
        <Content>


        <ScrollView ><DrawerItems {...props} /></ScrollView>
        </Content>
        <Footer style={{backgroundColor:"white",}}><Left><Ionicons  style={{color:"#1DA1F2",paddingLeft:20}} name="ios-moon-outline" size={20}/></Left>
         <Right><MaterialCommunityIcons   style={{color:"#1DA1F2",paddingRight:20}} name="qrcode" size={20}/></Right></Footer>
      </Container>

},
);
