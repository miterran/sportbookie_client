import React, { Component } from 'react';
import { AsyncStorage, StatusBar } from 'react-native';
import Nav from './src/navigators';
import axios from 'axios';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

const URL = __DEV__ ? 'http://192.168.1.6:8080' : 'https://sportbookie.herokuapp.com';
axios.defaults.baseURL = URL;
const client = new ApolloClient({
	uri: URL + '/graphql',
	request: async (operation) => {
		const token = await AsyncStorage.getItem('token');
		operation.setContext({
			headers: {
				Authorization: `Bearer ${token}`
			}
		});
	}
});

class App extends Component {
	render() {
		return (
			<ApolloProvider client={client}>
				<StatusBar backgroundColor="blue" barStyle="light-content" />
				<Nav />
			</ApolloProvider>
		);
	}
}

export default App;
