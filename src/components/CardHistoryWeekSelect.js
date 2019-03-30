import React from 'react';
import { StyleSheet, TouchableOpacity, Text, SafeAreaView } from 'react-native';
import Card from './Card';
import colors from '../ui_style/colors';
import moment from 'moment-timezone';

const CardHistoryWeekSelect = ({ onPress, fromDate, toDate, bets, balance, disabled }) => {
	if (bets === 0) return null;
	return (
		<TouchableOpacity onPress={onPress} disabled={disabled}>
			<Card>
				<SafeAreaView style={{ margin: 12 }}>
					<SafeAreaView style={{ flexDirection: 'row' }}>
						<Text style={[ styles.text, { flex: 2 } ]}>DATE</Text>
						<Text style={[ styles.text, { flex: 1, textAlign: 'right' } ]}>BETS</Text>
						<Text style={[ styles.text, { flex: 1, textAlign: 'right' } ]}>BALANCE</Text>
					</SafeAreaView>
					<SafeAreaView style={{ flexDirection: 'row' }}>
						<Text style={[ styles.text, { flex: 2, color: colors.dust, fontSize: 14 } ]}>
							{moment(fromDate).tz('America/Los_Angeles').format('MMM DD, YY')}
							{' - '}
							{moment(toDate).tz('America/Los_Angeles').format('MMM DD, YY')}
						</Text>
						<Text
							style={[
								styles.text,
								{
									flex: 1,
									textAlign: 'right',
									fontSize: 14,
									color: bets > 0 ? colors.action : colors.dust
								}
							]}
						>
							{bets}
						</Text>
						<Text
							style={[
								styles.text,
								{
									flex: 1,
									textAlign: 'right',
									fontSize: 14,
									color: balance >= 0 ? colors.success : colors.danger
								}
							]}
						>
							{balance}
						</Text>
					</SafeAreaView>
				</SafeAreaView>
			</Card>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	text: {
		color: colors.mute,
		fontSize: 11,
		fontWeight: 'bold'
	}
});

export default CardHistoryWeekSelect;
