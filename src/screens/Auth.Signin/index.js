import React, { Component } from 'react';
import { StyleSheet, ImageBackground, SafeAreaView, AsyncStorage } from 'react-native';
import AuthButton from '../../components/AuthButton';
import wallpaper from '../../../assets/images/background/wallpaper_2.jpg';
import colors from '../../ui_style';

class AuthSignin extends Component {
	async componentWillMount() {
		const token = await AsyncStorage.getItem('token');
		const username = await AsyncStorage.getItem('username');
		if (token && username) {
			this.props.navigation.navigate('User');
		}
	}
	render() {
		return (
			<ImageBackground source={wallpaper} style={styles.background}>
				<AuthButton
					onPress={() => this.props.navigation.navigate('Login')}
					title="LOGIN"
					color={colors.primary}
					textColor={colors.white}
				/>
				<SafeAreaView style={{ height: 12 }} />
				<AuthButton
					onPress={() => this.props.navigation.navigate('Register')}
					title="REGISTER"
					color={colors.primary}
					textColor={colors.white}
				/>
				<SafeAreaView style={{ height: 12 }} />
			</ImageBackground>
		);
	}
}
const styles = StyleSheet.create({
	background: {
		height: '100%',
		width: '100%',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'black'
	}
});

export default AuthSignin;
