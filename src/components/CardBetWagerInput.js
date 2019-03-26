import React from 'react';
import { StyleSheet, SafeAreaView, TextInput, Text } from 'react-native';
import Card from './Card';
import colors from '../ui_style';
import { displayOdd } from '../util';

const lineRename = {
	money: 'M-LINE',
	spread: 'SPREAD',
	total: 'TOTAL',
	draw: 'DRAW'
};

const WagerInput = ({ title, value, valueColor, onChangeValue, editable }) => (
	<SafeAreaView style={{ flex: 1, flexDirection: 'row', margin: 12 }}>
		<Text style={styles.title}>{title}</Text>
		<TextInput
			editable={editable}
			style={[ styles.input, { color: valueColor } ]}
			placeholderTextColor={valueColor}
			placeholder={'0'}
			keyboardType="numeric"
			keyboardAppearance="dark"
			autoCorrect={false}
			onChangeText={(amount) => onChangeValue(amount)}
			value={value}
		/>
	</SafeAreaView>
);

const CardBetWagerInput = ({
	atRisk,
	toWin,
	onChangeAtRisk,
	onChangeToWin,
	avaiableCredit,
	editable = true,
	selected: { lineType, oddType, pointsType, target },
	line
}) => (
	<Card>
		<SafeAreaView style={{ flex: 1, flexDirection: 'row', margin: 12 }}>
			<Text style={styles.title}>BET</Text>
			<Text style={[ styles.input, { color: colors.special } ]}>{`${lineRename[
				lineType
			]} ${target.toUpperCase()} ${displayOdd(line[lineType][pointsType], lineType) || ''} (${displayOdd(
				line[lineType][oddType]
			)})`}</Text>
		</SafeAreaView>

		<SafeAreaView style={{ flex: 1, flexDirection: 'row', margin: 12 }}>
			<Text style={styles.title}>CREDIT</Text>
			<Text style={[ styles.input, { color: avaiableCredit >= 0 ? colors.primary : colors.danger } ]}>
				{avaiableCredit}
			</Text>
		</SafeAreaView>
		<WagerInput
			title="AT RISK"
			value={atRisk}
			valueColor={colors.warning}
			onChangeValue={onChangeAtRisk}
			editable={editable}
		/>
		<WagerInput
			title="TO WIN"
			value={toWin}
			valueColor={colors.success}
			onChangeValue={onChangeToWin}
			editable={editable}
		/>
	</Card>
);

const styles = StyleSheet.create({
	title: {
		fontWeight: 'bold',
		fontSize: 14,
		color: colors.white
	},
	input: {
		flex: 1,
		fontWeight: 'bold',
		fontSize: 16,
		textAlign: 'right'
	}
});

export default CardBetWagerInput;
