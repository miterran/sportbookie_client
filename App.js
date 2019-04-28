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

const imageAssets = wallpapers
	.concat(Object.values(logos))
	.concat(sportsImg)
	.map((image) => Asset.fromModule(image).downloadAsync());

class App extends Component {
	state = { isLoadingComplete: false };
	render() {
		if (!this.state.isLoadingComplete) {
			return (
				<AppLoading
					startAsync={async () => await Promise.all([ ...imageAssets ])}
					onError={(error) => console.warn(error)}
					onFinish={() => this.setState({ isLoadingComplete: true })}
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
