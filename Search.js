import React from 'react';
import { AppRegistry, ScrollView, Image, StyleSheet} from 'react-native';
import { Container, Header, Item, Input, Icon, Button, Text,Right ,Footer,Content,FooterTab} from 'native-base';
export default class Main extends React.Component {
  static navigationOptions = {
   title: 'Search Twitter',
   tabBarIcon: ({ tintColor }) => (
      <Icon name="search" style={[{ tintColor: tintColor }]}  />),
       tabBarVisible: false ,
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
