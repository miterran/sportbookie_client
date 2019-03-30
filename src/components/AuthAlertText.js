import React from 'react';
import { StyleSheet, SafeAreaView, Text } from 'react-native';
import colors from '../ui_style/colors';

const msg = {
	0: '',
	1: '', // success
	2: 'Username taken!',
	3: 'Invalid Input!',
	4: 'Server Error!',
	5: 'Username invalid!',
	6: 'Username at least 4 characters!',
	7: 'Password at least 4 characters!',
	8: 'Incorrect Username or Password'
};

const color = {
	0: '',
	1: '', // success
	2: colors.warning,
	3: colors.warning,
	4: colors.danger,
	5: colors.warning,
	6: colors.warning,
	7: colors.warning,
	8: colors.warning
};

const AuthAlertText = ({ code }) => (
	<SafeAreaView>
		<Text style={[ styles.text, { color: color[code] } ]}>{msg[code]}</Text>
		<SafeAreaView style={{ height: 12 }} />
	</SafeAreaView>
);

const styles = StyleSheet.create({
	text: {
		fontSize: 14,
		fontWeight: 'bold'
	}
});

export default AuthAlertText;
