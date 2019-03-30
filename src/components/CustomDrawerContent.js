import React, { Component } from 'react';
import { Constants } from 'expo';
import { DrawerItems, SafeAreaView } from 'react-navigation';
import { ScrollView, StyleSheet, Text, TouchableOpacity, AsyncStorage } from 'react-native';
import colors from '../ui_style/colors';

class CustomDrawerContent extends Component {
	state = {
		username: ''
	};
	componentWillMount() {
		AsyncStorage.getItem('username').then((username) => this.setState({ username: username }));
	}
	render() {
		return (
			<SafeAreaView style={{ flex: 1 }}>
				<ScrollView>
					<SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
						<DrawerItems {...this.props} />
					</SafeAreaView>
				</ScrollView>
				<SafeAreaView style={styles.footer}>
					<Text style={styles.username}>{this.state.username}</Text>
					<SafeAreaView style={{ height: 6 }} />
					<TouchableOpacity
						onPress={() => AsyncStorage.clear(() => this.props.navigation.navigate('Signin'))}
					>
						<Text style={styles.logout}>LOGOUT</Text>
					</TouchableOpacity>
					<SafeAreaView style={{ height: 24 }} />
					<Text style={styles.app}>Sport Bookie v{Constants.manifest.version}</Text>
					<SafeAreaView style={{ height: 6 }} />
				</SafeAreaView>
			</SafeAreaView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	footer: {
		paddingLeft: 18
	},
	username: {
		fontSize: 18,
		fontWeight: 'bold',
		color: colors.mute
	},
	logout: {
		fontSize: 18,
		fontWeight: 'bold',
		color: colors.danger
	},
	app: {
		fontSize: 12,
		fontWeight: 'bold',
		color: colors.mute
	}
});

export default CustomDrawerContent;
