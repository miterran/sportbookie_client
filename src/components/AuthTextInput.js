import React from 'react';
import { StyleSheet, SafeAreaView, TextInput } from 'react-native';
import colors from '../ui_style';

const AuthTextInput = ({ editable = true, title, secureTextEntry, onChangeText, value }) => {
	return (
		<SafeAreaView style={styles.box}>
			<TextInput
				editable={editable}
				style={styles.text}
				placeholder={title.toUpperCase()}
				placeholderTextColor={colors.white}
				secureTextEntry={secureTextEntry}
				keyboardAppearance="dark"
				autoCapitalize="none"
				autoCorrect={false}
				maxLength={12}
				onChangeText={(text) => onChangeText(text)}
				value={value}
			/>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	box: {
		width: 240,
		height: 48,
		borderRadius: 6,
		backgroundColor: 'rgba(0, 0, 0, 0.7)'
	},
	text: {
		width: 240,
		height: 48,
		fontWeight: 'bold',
		fontSize: 14,
		color: 'white',
		textAlign: 'center'
	}
});

export default AuthTextInput;
