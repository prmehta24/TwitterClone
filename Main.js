import React from 'react';
import { AppRegistry, ScrollView, Image, Text,TouchableHighlight, StyleSheet,View} from 'react-native';

export default class Main extends React.Component {
  render() {
    const { navigate } = this.props.navigation
      return (


<View>
          <Text style={{fontSize:80}}>Main</Text>
          <View style={styles.container}>
        <TouchableHighlight
          onPress={() => navigate("Search")}
          style={styles.button}>
          <Text
            style={styles.buttonText}>Screen One </Text>
        </TouchableHighlight>
      </View></View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    alignSelf: 'stretch',
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 5,
    height: 40,
    justifyContent: 'center'
  },
  buttonText: {
    color: 'white',
    fontSize: 22,
    alignSelf: 'center'
  }
});
