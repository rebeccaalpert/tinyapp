import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  StyleSheet,
  TouchableOpacity,
  Button,
  TextInput,
  View,
} from 'react-native';
import { StackNavigator } from 'react-navigation';

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
    return (
		<View style={styles.container}>
			<Text style={styles.headLine}>Enter your to-do:</Text>
	    	<TextInput style={{height: 40, width: 350}} placeholder="Bring home the bacon"
	    	onChangeText={(text) => this.setState({text})}
        />
        <Text style={styles.text}>
          {this.state.text}
        </Text>
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
    marginBottom: 30,
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