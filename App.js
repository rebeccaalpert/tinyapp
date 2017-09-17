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
} from 'react-native';
import {
  StackNavigator,
  NavigationActions
} from 'react-navigation';

var toDosList = [];

function addToDo(newToDo) {
	toDosList.push(newToDo);
}

class ToDo {
	constructor(title) {
		this.title = title;
		this.completed = false;
		this.createdAt = new Date();
	}
};

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Tiny To-Do',
  };

  render() {
  	const { navigate } = this.props.navigation;
  	return (
  	<View style={styles.container}>
		<Text style={styles.headLine}>
	    	Your To-Dos
	    </Text>
	    <Image source={{uri: 'http://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-10/256/crying-face.png'}} style={{width: 100, height: 100}}/>
	    <Text style={styles.text, {marginBottom: 20}}>
	    	You don't have any to-dos!
	    </Text>
	    <Button
          onPress={() => navigate('Add')}
          title="Add a To-Do"
        />
	</View>
	);
  }
}

class AddScreen extends React.Component {
  static navigationOptions = {
    title: 'Add a To-Do',
  };

  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
  	const { navigate } = this.props.navigation;
  	const {goBack} = this.props.navigation;
    return (
		<View style={styles.container}>
			<Text style={styles.headLine}>Enter your to-do:</Text>
	    	<TextInput style={{height: 40, width: 350}} placeholder="Bring home the bacon"
	    	onSubmitEditing={addToDo(new ToDo(this.text)), () => goBack()}
        />
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
    backgroundColor: '#FFFFFF',
    padding: 30,
    marginBottom: 20,
    width: 350,
  },
  text: {
    color: '#333333',
    fontSize: 16,
  },
});

const TinyToDo = StackNavigator({
  Home: { screen: HomeScreen },
  Add: { screen: AddScreen },
});

AppRegistry.registerComponent('TinyToDo', () => TinyToDo);