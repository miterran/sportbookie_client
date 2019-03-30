import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import colors from '../ui_style/colors';

const AuthButton = ({
	onPress,
	title,
	disable = false,
	backgroundColor = colors.primary,
	textColor = colors.white
}) => {
	return (
		<TouchableOpacity
			disabled={disable}
			style={[ styles.box, { backgroundColor: backgroundColor } ]}
			onPress={onPress}
		>
			<Text style={[ styles.text, { color: textColor } ]}>{title}</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	box: {
		width: 240,
		height: 48,
		borderRadius: 6,
		justifyContent: 'center'
	},
	text: {
		fontWeight: 'bold',
		fontSize: 14,
		textAlign: 'center'
	}
});

export default AuthButton;
