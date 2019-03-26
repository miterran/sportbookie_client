import React, { Component } from 'react';
import { AsyncStorage, StatusBar } from 'react-native';
import Nav from './src/navigators';
import axios from 'axios';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { AppLoading, Asset } from 'expo';

import wallpapers from './src/util/wallpapers';
import logos from './src/util/logos';
import sportsImg from './src/util/sportsImg';

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
	state = { isLoadingComplete: false };
	_loadResourcesAsync = async () =>
		Promise.all([ Asset.loadAsync(wallpapers.concat(Object.values(logos)).concat(sportsImg)) ]);
	_handleLoadingError = (error) => console.warn(error);
	_handleFinishLoading = () => this.setState({ isLoadingComplete: true });

	render() {
		if (!this.state.isLoadingComplete) {
			return (
				<AppLoading
					startAsync={this._loadResourcesAsync}
					onError={this._handleLoadingError}
					onFinish={this._handleFinishLoading}
				/>
			);
		}

		return (
			<ApolloProvider client={client}>
				<StatusBar backgroundColor="blue" barStyle="light-content" />
				<Nav />
			</ApolloProvider>
		);
	}
}

export default App;
