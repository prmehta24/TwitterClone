import React from 'react';
import { AppRegistry, View, Image, Text} from 'react-native';
import { Button,  Icon, Footer, FooterTab,Container,Content } from "native-base";
export default class Mail extends React.Component {
  static navigationOptions = {

    tabBarIcon: ({ tintColor }) => (
        <Icon name="mail" /*style={[ { tintColor: tintColor }]}*/  />

    ),
      header:<View style={{flexDirection:'row',marginTop:30,backgroundColor:"white"}}><Text style={{left:15,padding:5, fontSize:20}} >Messages</Text></View>

  }
  render() {
      const { navigate } = this.props.navigation
      return (
        <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Text style={{textAlign:'center',textAlignVertical:'center'}}>There are no new messages.</Text>
      </View>





    );
  }
}
