import React from 'react';
import { AppRegistry, ScrollView, Image, Text} from 'react-native';
import { Button,  Icon, Footer, FooterTab } from "native-base";
export default class Mail extends React.Component {
  static navigationOptions = {

    tabBarIcon: ({ tintColor }) => (
        <Icon name="mail" style={[ { tintColor: tintColor }]}  />

    )
  }
  render() {
      const { navigate } = this.props.navigation
      return (
        <ScrollView>
        <Text style={{fontSize:80}}>Mail</Text>
        </ScrollView>
    );
  }
}
