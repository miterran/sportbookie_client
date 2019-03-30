import React, { Component } from 'react';
import { StyleSheet, ImageBackground, SafeAreaView, AsyncStorage } from 'react-native';
import { withFormik } from 'formik';
import AuthButton from '../../components/AuthButton';
import AuthTextInput from '../../components/AuthTextInput';
import AuthAlertText from '../../components/AuthAlertText';
import wallpaper from '../../../assets/images/background/wallpaper_3.jpg';
import colors from '../../ui_style/colors';
import axios from 'axios';
import yup from 'yup';

class AuthRegister extends Component {
	render() {
		const { errors, handleSubmit, setFieldValue, isSubmitting, values: { username, password } } = this.props;
		return (
			<ImageBackground source={wallpaper} style={styles.background}>
				<AuthAlertText code={errors} />
				<AuthTextInput
					editable={!isSubmitting}
					title="username"
					secureTextEntry={false}
					onChangeText={(text) => setFieldValue('username', text)}
					value={username}
				/>
				<SafeAreaView style={{ height: 12 }} />
				<AuthTextInput
					editable={!isSubmitting}
					title="password"
					secureTextEntry={true}
					onChangeText={(text) => setFieldValue('password', text)}
					value={password}
				/>
				<SafeAreaView style={{ height: 12 }} />
				<AuthButton
					disabled={!isSubmitting}
					onPress={handleSubmit}
					title={!isSubmitting ? 'REGISTER' : 'LOADING'}
					backgroundColor={!isSubmitting ? colors.primary : colors.dark}
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

const registerSechma = yup.object().shape({
	username: yup.string().matches(/^\w+$/, 5).min(4 | null, 6).max(12).required(5),
	password: yup.string().min(4 | null, 7).max(12).required(7)
});

const AuthRegisterWithData = withFormik({
	mapPropsToValues: () => ({ username: '', password: '' }),
	handleSubmit: async ({ username, password }, formik) => {
		const errors = await registerSechma.validate({ username: username, password: password }).catch((e) => e.errors);
		if (errors.length > 0) {
			formik.setErrors(errors[0]);
			formik.setSubmitting(false);
			return;
		}
		try {
			const { data: { code, token } } = await axios.post('/register', { username: username, password: password });
			if (code == 1) {
				await AsyncStorage.setItem('token', token);
				await AsyncStorage.setItem('username', username);
				formik.props.navigation.navigate('User');
				return;
			}
			formik.setErrors(code);
		} catch (e) {
			formik.setErrors(4); // server error
		}
		formik.setSubmitting(false);
	}
});

export default AuthRegisterWithData(AuthRegister);
