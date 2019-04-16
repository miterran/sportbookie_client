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
import { Constants } from 'expo';
const URL = __DEV__
	? `http://${Constants.manifest.hostUri.replace('19000', '8080')}`
	: Constants.manifest.extra.serverUri;
axios.defaults.baseURL = URL;
const client = new ApolloClient({
	uri: URL + '/graphql',
	request: async (operation) => {
		const token = await AsyncStorage.getItem('token');
		operation.setContext({ headers: { Authorization: `Bearer ${token}` } });
	},
	onError: () => {
		AsyncStorage.clear();
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
