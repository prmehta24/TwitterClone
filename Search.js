import React from 'react';
import { AppRegistry, ScrollView, Image, StyleSheet,TouchableOpacity,View} from 'react-native';
import { Container, Header, Item, Input, Icon, Button, Text,Right ,Footer,Content,FooterTab,Left,Body} from 'native-base';
import { EvilIcons,MaterialIcons,Ionicons,MaterialCommunityIcons, } from '@expo/vector-icons';
import { Font } from 'expo';
import { SearchBar } from 'react-native-elements'
export default class Search extends React.Component {
  componentDidMount() {
    Font.loadAsync({
      //'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
      'Roboto_medium': require('./assets/fonts/Roboto-Medium.ttf'),
    });
  }
  static navigationOptions = {
   //title: 'Search Twitter',
   tabBarIcon: ({ tintColor }) => (
      <Icon name="search" /*style={[{ tintColor: tintColor }]}*/  />),
       tabBarVisible: false ,
       header:   <View style={{flex: 1, flexDirection: 'row',marginTop:30}}><Button transparent   style={{left: 5}}><Ionicons style={{color:'#1DA1F2'}} name="ios-arrow-round-back-outline" size={40}/></Button><SearchBar
          lightTheme
          noIcon
          inputStyle={{margin: 0,backgroundColor:"white"}}
          containerStyle={{left:10 , width: 300}}
          //onChangeText={}
          placeholder='Search Twitter' /></View>,

 }

  render() {
    const { navigate } = this.props.navigation
      return (
        <Container style={{}}>
        <Content/>
        <Footer style={{backgroundColor:"white"}}>



              <Text style={{padding: 10,fontSize: 20,color:"#1DA1F2"}} >All</Text>



              <Text style={{padding: 10,fontSize: 20,color:'grey'}}>Mentions</Text>


            <Right >
              <Icon style={styles.bigblue} name="ios-settings-outline" size={20} />

            </Right>

        </Footer>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  bigblue: {
    padding:10,
    color: '#1DA1F2',


  },
  red: {
    padding: 20,
    fontSize: 20,

  },
});
