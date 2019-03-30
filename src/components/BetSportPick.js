import React from 'react';
import { StyleSheet, Text, TouchableOpacity, ImageBackground } from 'react-native';
import colors from '../ui_style/colors';

const ActionSportPick = ({ source, title, onPress }) => (
	<TouchableOpacity onPress={onPress}>
		<ImageBackground source={source} style={styles.background}>
			<Text style={styles.text}>{title}</Text>
		</ImageBackground>
	</TouchableOpacity>
);

const styles = StyleSheet.create({
	background: {
		height: 120,
		marginBottom: 12,
		justifyContent: 'center'
	},
	text: {
		backgroundColor: 'transparent',
		paddingLeft: 24,
		color: colors.white,
		paddingTop: 72,
		fontSize: 18,
		fontWeight: 'bold'
	}
});

export default ActionSportPick;
