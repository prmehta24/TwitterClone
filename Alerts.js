import React from 'react';
import { AppRegistry, View, Image, Text} from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import { Button, Icon, Footer, FooterTab ,Container,Content} from "native-base";
export default class Alerts extends React.Component {
  static navigationOptions = {

   tabBarIcon: ({ tintColor }) => (
       <EvilIcons name="bell" size={32} color="black" /*style={[ { tintColor: tintColor }]}*/ />

    ),
    header:<View style={{flexDirection:'row',marginTop:30,backgroundColor:"white"}}><Text style={{left:15,padding:5, fontSize:20}} >Notifications</Text></View>
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
        <Text style={{textAlign:'center',textAlignVertical:'center'}}>There are no new notifications.</Text>
      </View>
    );
  }
}
