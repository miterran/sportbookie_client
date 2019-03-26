import React, { Component } from 'react';
import { StyleSheet, ImageBackground, SafeAreaView, AsyncStorage } from 'react-native';
import { withFormik } from 'formik';
import colors from '../../ui_style';
import AuthButton from '../../components/AuthButton';
import AuthTextInput from '../../components/AuthTextInput';
import AuthAlertText from '../../components/AuthAlertText';
import wallpaper from '../../../assets/images/background/wallpaper_4.jpg';
import axios from 'axios';

class AuthLogin extends Component {
	render() {
		const { errors, isSubmitting, handleSubmit, setFieldValue, values: { username, password } } = this.props;
		return (
			<ImageBackground source={wallpaper} style={styles.background}>
				<AuthAlertText code={errors} />
				<AuthTextInput
					disabled={!isSubmitting}
					title="username"
					secureTextEntry={false}
					onChangeText={(text) => setFieldValue('username', text)}
					value={username}
				/>
				<SafeAreaView style={{ height: 12 }} />
				<AuthTextInput
					disabled={!isSubmitting}
					title="password"
					secureTextEntry={true}
					onChangeText={(text) => setFieldValue('password', text)}
					value={password}
				/>
				<SafeAreaView style={{ height: 12 }} />
				<AuthButton
					disabled={!isSubmitting}
					onPress={handleSubmit}
					title={!isSubmitting ? 'LOGIN' : 'LOADING'}
					color={!isSubmitting ? colors.primary : colors.dark}
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

const AuthLoginWithData = withFormik({
	mapPropsToValues: () => ({ username: '', password: '' }),
	handleSubmit: async ({ username, password }, { setErrors, setSubmitting, props: { navigation: { navigate } } }) => {
		try {
			const { data: { code, token } } = await axios.post('/login', { username: username, password: password });
			if (code == 200 && token !== '') {
				await AsyncStorage.setItem('token', token);
				await AsyncStorage.setItem('username', username);
				navigate('User');
				return;
			}
		} catch (e) {
			setErrors(8); // server error
		}
		setSubmitting(false);
	}
});

export default AuthLoginWithData(AuthLogin);
