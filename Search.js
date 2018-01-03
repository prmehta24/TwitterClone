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
       header:   <View style={{flex: 1, flexDirection: 'row'}}><Button transparent   style={{left: 5}}><Ionicons name="ios-arrow-round-back-outline" size={40}/></Button><SearchBar
          lightTheme
          noIcon
          inputStyle={{margin: 0}}
          containerStyle={{left:10 , width: 300}}
          //onChangeText={}
          placeholder='Search Twitter' /></View>,

 }

  render() {
    const { navigate } = this.props.navigation
      return (
        <Container>
        <Content/>
        <Footer>



              <Text style={styles.red} >All</Text>



              <Text style={styles.red}>Mentions</Text>


            <Right >
              <Icon style={styles.bigblue} name="ios-settings-outline" />

            </Right>

        </Footer>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  bigblue: {
    padding:10,
    color: 'blue',


  },
  red: {
    padding: 10,
    fontSize: 30,

  },
});
