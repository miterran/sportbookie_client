import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import Card from './Card';
import colors from '../ui_style';

const CardCredit = ({ title, amount, color }) => (
	<Card>
		<SafeAreaView style={styles.margin}>
			<Text style={[ styles.text, styles.title ]}>{title}</Text>
			<Text style={[ styles.text, styles.amount, { color: color } ]}>{amount}</Text>
		</SafeAreaView>
	</Card>
);

const styles = StyleSheet.create({
	margin: {
		marginTop: 12,
		marginBottom: 12
	},
	text: {
		textAlign: 'center',
		fontWeight: 'bold'
	},
	title: {
		color: colors.mute,
		fontSize: 12
	},
	amount: {
		fontSize: 36
	}
});

export default CardCredit;
