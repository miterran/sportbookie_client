import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import colors from '../ui_style/colors';

const BottomButton = ({ onPress, text, backgroundColor = colors.dark, color = colors.white, disabled = false }) => (
	<TouchableOpacity
		style={[ styles.button, { backgroundColor: backgroundColor } ]}
		onPress={onPress}
		disabled={disabled}
	>
		<Text style={[ styles.text, { color: color } ]}>{text}</Text>
	</TouchableOpacity>
);

const styles = StyleSheet.create({
	button: {
		height: 80,
		width: '100%',
		alignItems: 'center',
		justifyContent: 'center'
	},
	text: {
		fontSize: 18,
		fontWeight: 'bold'
	}
});

export default BottomButton;
