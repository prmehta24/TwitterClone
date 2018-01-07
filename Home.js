import React from 'react';
import { AppRegistry, ScrollView, Image, StyleSheet,TouchableOpacity} from 'react-native';
import { Button,  Icon, Footer, FooterTab, Header, Left,Right,Content,Card,CardItem ,Container,Body,Thumbnail,  Item, Input,  Text,Fab ,View,Spinner} from "native-base";
import { EvilIcons,MaterialIcons,Ionicons,MaterialCommunityIcons, Feather,Entypo } from '@expo/vector-icons';

export default class Home extends React.Component {


  static navigationOptions = {
  //  title: 'Home',
    tabBarLabel: 'Home',
    tabBarIcon: ({ tintColor }) => (
        <Icon name="home"   />

    ),
    header:<View style={{flexDirection:'row'}}><Thumbnail small source={require('./face4.png')} style={{left:10}} /><Text style={{left:15,padding:5, fontSize:20}} >Home</Text></View>
  }
  render() {
      const { navigate } = this.props.navigation
      return (


        <Container>

        <Fab
          active="false"

          style={{ backgroundColor: '#5067FF',position: "absolute", bottom: 45, right: 0  }}
          position="bottomRight"
          >

          <Entypo name="new-message" />

        </Fab>

      <Content>
<Spinner />

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
                <EvilIcons name="retweet"  size={20} />
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
                <EvilIcons name="retweet"  size={20} />
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
                <EvilIcons name="retweet"  size={20} />
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
      <Footer style={{backgroundColor:"white"}}>



            <Text style={styles.red} >All</Text>



            <Text style={styles.red}>Mentions</Text>


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
    color: '#42d4f4',


  },
  red: {
    padding: 10,
    fontSize: 15,

  },
});
