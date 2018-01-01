import React from 'react';
import { AppRegistry, ScrollView, Image, Text} from 'react-native';
import { Button,  Icon, Footer, FooterTab } from "native-base";
export default class Home extends React.Component {
  static navigationOptions = {
    title: 'Home',
    tabBarLabel: 'Home',
    tabBarIcon: ({ tintColor }) => (
        <Icon name="home" style={[{ tintColor: tintColor }]}  />

    )
  }
  render() {
      const { navigate } = this.props.navigation
      return (
        <ScrollView>

          <Text style={{fontSize:80}}>Home</Text>
        </ScrollView>
    );
  }
}
