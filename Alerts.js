import React from 'react';
import { AppRegistry, ScrollView, Image, Text} from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import { Button, Icon, Footer, FooterTab } from "native-base";
export default class Alerts extends React.Component {
  static navigationOptions = {

   tabBarIcon: ({ tintColor }) => (
       <EvilIcons name="bell" size={32} color="white" /*style={[ { tintColor: tintColor }]}*/ />

    ),
  }
  render() {
      const { navigate } = this.props.navigation
      return (
        <ScrollView>


          <Text style={{fontSize:80}}>Alerts</Text>
        </ScrollView>
    );
  }
}
