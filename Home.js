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
    header:<View style={{flexDirection:'row',marginTop:30,backgroundColor:"white"}}><Thumbnail small source={require('./face4.png')} style={{left:10}} /><Text style={{left:15,padding:5, fontSize:20}} >Home</Text></View>
  }
  render() {
      const { navigate } = this.props.navigation
      return (


        <Container style={{backgroundColor:"white"}}>

        <Fab
          active="false"

          style={{ backgroundColor: '#1DA1F2',position: "absolute", bottom: 45, right: 0  }}
          position="bottomRight"
          >

          <Entypo name="new-message" />

        </Fab>

      <Content>
<Spinner color="#1DA1F2"/>

      <ScrollView >

        <Card>
          <CardItem>
            <Left>
              <Thumbnail source={require('./face1.jpg')} />
              <Body>
                <Text>Martina Belsic</Text>
                <Text note>The world is a stage and we are the actors!</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem cardBody style={{marginLeft:20,marginRight:5}}>
            <Image borderRadius={5} source={require('./card1.jpg')} style={{height: 200, width: null, flex: 1,}}/>
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
                <Text>John Huntre</Text>
                <Text note>It was a trial by 'fire'. Sink or Swim!</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem cardBody style={{marginLeft:20,marginRight:5}}>
            <Image borderRadius={5} source={require('./card2.jpeg')} style={{height: 200, width: null, flex: 1}}/>
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
                <Text>The Master Artist</Text>
                <Text note>Can anyones guess what it is?</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem cardBody style={{marginLeft:20,marginRight:5}}>
            <Image borderRadius={5} source={require('./card3.jpg')} style={{height: 200, width: null, flex: 1}}/>
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
