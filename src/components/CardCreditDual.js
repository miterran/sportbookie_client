import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import Card from './Card';
import colors from '../ui_style';

const CardCreditDual = ({ titleLeft, amountLeft, colorLeft, titleRight, amountRight, colorRight }) => (
	<Card>
		<SafeAreaView style={styles.margin}>
			<SafeAreaView style={{ flex: 1 }}>
				<Text style={[ styles.text, styles.title ]}>{titleLeft}</Text>
				<Text style={[ styles.text, styles.amount, { color: colorLeft } ]}>{amountLeft}</Text>
			</SafeAreaView>

			<SafeAreaView style={{ flex: 1 }}>
				<Text style={[ styles.text, styles.title ]}>{titleRight}</Text>
				<Text style={[ styles.text, styles.amount, { color: colorRight } ]}>{amountRight}</Text>
			</SafeAreaView>
		</SafeAreaView>
	</Card>
);

const styles = StyleSheet.create({
	margin: {
		marginTop: 12,
		marginBottom: 12,
		flexDirection: 'row'
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

export default CardCreditDual;

// flexDirection: 'row'
