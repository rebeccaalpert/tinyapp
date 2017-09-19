import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  StyleSheet,
  TouchableOpacity,
  Button,
  TextInput,
  Image,
  View,
  ScrollView,
} from 'react-native';
import {
  StackNavigator,
  NavigationActions
} from 'react-navigation';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };

  render() {
  	const { navigate } = this.props.navigation;

  	return (
  	<View style={styles.container}>
		<Text style={styles.headLine}>
	    	Feeling sad?
	    </Text>
	    <Image source={require('./images/sad-face-emoji-emoticon-by-Vexels.png')} style={{width: 100, height: 100, marginBottom: 20}}/>
	    <Text style={styles.text, {marginBottom: 20}}>
        Let's cheer you up!
      </Text>
	    <Button onPress={() => navigate('Cats')}
          title="Onward"
        />
	</View>
	);
  }
}

class CatScreen extends React.Component {
  static navigationOptions = {
    title: 'Cute Cats!!!111',
  };

  render() {
  	const { navigate } = this.props.navigation;
  	const { goBack } = this.props.navigation;
    return (
		<View style={styles.container}>
			<Text style={styles.headLine}>So many cats!</Text>
      <ScrollView contentContainerStyle={styles.toDo}>
        <Image source={require('./images/cat1.jpg')} style={{width: 350, marginBottom: 20}}/>
        <Image source={require('./images/cat2.jpg')} style={{width: 350, marginBottom: 20}}/>
        <Image source={require('./images/cat3.jpg')} style={{width: 350, marginBottom: 20}}/>
        <Image source={require('./images/cat4.jpg')} style={{width: 350, marginBottom: 20}}/>
        <Image source={require('./images/cat5.jpg')} style={{width: 350, marginBottom: 20}}/>
        <Image source={require('./images/cat6.jpg')} style={{width: 350, marginBottom: 20}}/>
        <Image source={require('./images/cat7.jpg')} style={{width: 350, marginBottom: 20}}/>
        <Image source={require('./images/cat8.jpg')} style={{width: 350, marginBottom: 20}}/>
        <Image source={require('./images/cat9.jpg')} style={{width: 350, marginBottom: 20}}/>
      </ScrollView>
	    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  headLine: {
    fontSize: 30,
    marginTop: 30,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  toDo: {
    width: 350,
  },
  text: {
    color: '#333333',
    fontSize: 16,
  },
});

const TinyToDo = StackNavigator({
  Home: { screen: HomeScreen },
  Cats: { screen: CatScreen },
});

AppRegistry.registerComponent('TinyToDo', () => TinyToDo);