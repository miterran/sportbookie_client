import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import Card from './Card';
import colors from '../ui_style';

const ActionPickButton = ({ onPress, title }) => (
	<TouchableOpacity onPress={onPress}>
		<Card>
			<Text style={styles.text}>{title}</Text>
		</Card>
	</TouchableOpacity>
);

const styles = StyleSheet.create({
	text: {
		paddingTop: 24,
		paddingBottom: 24,
		fontWeight: 'bold',
		textAlign: 'center',
		color: colors.white,
		fontSize: 18
	}
});

export default ActionPickButton;
