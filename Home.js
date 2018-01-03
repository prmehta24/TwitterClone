import React from 'react';
import { AppRegistry, ScrollView, Image, StyleSheet,TouchableOpacity,View} from 'react-native';
import { Button,  Icon, Footer, FooterTab, Header, Left,Right,Content,Card,CardItem ,Container,Body,Thumbnail,  Item, Input,  Text,} from "native-base";
import { EvilIcons,MaterialIcons,Ionicons,MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import { Font } from 'expo';
export default class Home extends React.Component {
  componentDidMount() {
    Font.loadAsync({
      //'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
      'Roboto_medium': require('./assets/fonts/Roboto-Medium.ttf'),
    });
  }
  static navigationOptions = {
  //  title: 'Home',
    tabBarLabel: 'Home',
    tabBarIcon: ({ tintColor }) => (
        <Icon name="home" /*style={[{ tintColor: tintColor }]}*/  />

    ),
    header:<View style={{flexDirection:'row'}}><Thumbnail small source={require('./face4.png')} style={{left:10}} /><Text style={{left:15,padding:5, fontSize:20}} >Home</Text></View>
  }
  render() {
      const { navigate } = this.props.navigation
      return (


        <Container>
      <Header />
      <Content>
      <ScrollView>
        <Card>
          <CardItem>
            <Left>
              <Thumbnail source={require('./face1.jpg')} />
              <Body>
                <Text>NativeBase</Text>
                <Text note>GeekyAnts</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem cardBody>
            <Image source={require('./card1.jpg')} style={{height: 200, width: null, flex: 1}}/>
          </CardItem>
          <CardItem style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between',}}>

              <Button transparent>
              <Feather
                 name="message-circle"
                 size={20}
                />
                <Text>12</Text>
              </Button>


              <Button transparent>
                <EvilIcons name="refresh"  size={20} />
                <Text>4</Text>
              </Button>
              <Button transparent>
                <EvilIcons name="heart"  size={20} />
                <Text>6</Text>
              </Button>


            <Button transparent>
              <Icon active name="mail" />

            </Button>

          </CardItem>
        </Card>
        <Card>
          <CardItem>
            <Left>
              <Thumbnail source={require('./face2.jpg')} />
              <Body>
                <Text>NativeBase</Text>
                <Text note>GeekyAnts</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem cardBody>
            <Image source={require('./card2.jpeg')} style={{height: 200, width: null, flex: 1}}/>
          </CardItem>
          <CardItem style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between',}}>

              <Button transparent>
              <Feather
                 name="message-circle"
                 size={20}
                />
                <Text>13</Text>
              </Button>


              <Button transparent>
                <EvilIcons name="refresh"  size={20} />
                <Text>7</Text>
              </Button>
              <Button transparent>
                <EvilIcons name="heart"  size={20} />
                <Text>9</Text>
              </Button>


            <Button transparent>
              <Icon active name="mail" />

            </Button>

          </CardItem>
        </Card>
        <Card>
          <CardItem>
            <Left>
              <Thumbnail source={require('./face3.jpg')} />
              <Body>
                <Text>NativeBase</Text>
                <Text note>GeekyAnts</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem cardBody>
            <Image source={require('./card3.jpg')} style={{height: 200, width: null, flex: 1}}/>
          </CardItem>
          <CardItem style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between',}}>

              <Button transparent>
              <Feather
                 name="message-circle"
                 size={20}
                />
                <Text>2</Text>
              </Button>


              <Button transparent>
                <EvilIcons name="refresh"  size={20} />
                <Text>10</Text>
              </Button>
              <Button transparent>
                <EvilIcons name="heart"  size={20} />
                <Text>5</Text>
              </Button>


            <Button transparent>
              <Icon active name="mail" />

            </Button>

          </CardItem>
        </Card>
        </ScrollView>
      </Content>
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
