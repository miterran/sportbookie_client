import React from 'react';
import { StyleSheet, SafeAreaView, Image, Text } from 'react-native';
import Card from './Card';
import colors from '../ui_style/colors';
import Hr from './Hr';
import moment from 'moment-timezone';
import periodConvert from '../util/period';
import displayOdd from '../util/displayOdd';
import logos from '../util/logos';

const sportRename = {
	Basketball: 'Basket Ball',
	Football: 'Football Ball',
	Baseball: 'Base Ball',
	Soccer: 'Soccer',
	Fighting: 'Fighting',
	Hockey: 'Hockey',
	Esport: 'E-Sport'
};

const lineRename = {
	money: 'M-LINE',
	spread: 'SPREAD',
	total: 'TOTAL',
	draw: 'DRAW'
};

const Row = ({ title, detail, color = colors.dust }) => (
	<SafeAreaView style={styles.row}>
		<Text style={[ styles.title, { color: colors.mute } ]}>{title}</Text>
		<Text style={[ styles.detail, { color: color } ]}>{detail}</Text>
	</SafeAreaView>
);

const RowTeam = ({ title, teamName, sport, score, status }) => (
	<SafeAreaView style={styles.row}>
		<Text style={[ styles.title, { color: colors.mute } ]}>{title}</Text>
		<SafeAreaView style={{ flex: 1, flexDirection: 'row' }}>
			<SafeAreaView
				style={{
					width: 32,
					justifyContent: 'center'
				}}
			>
				<Image source={logos[teamName.toLowerCase().replace(/ /g, '_')] || logos[sport]} style={styles.logo} />
			</SafeAreaView>
			{status !== 0 && (
				<Text
					style={{ fontWeight: 'bold', fontSize: 12, color: colors.special, width: 32, textAlign: 'center' }}
				>
					{score}
				</Text>
			)}
			<Text style={[ styles.detail, { color: colors.dust } ]}>{teamName}</Text>
		</SafeAreaView>
	</SafeAreaView>
);

const CardBetDetail = ({
	balance,
	status,
	game: { sport, league, matchTime, period, team, score },
	isBetOrder,
	selected: { lineType, target, points, odd },
	wager
}) => (
	<Card>
		<Row title="SPORT" detail={sportRename[sport]} />
		<Hr backgroundColor={colors.dark} height={1} />
		<Row title="LEAGUE" detail={league} />
		<Hr backgroundColor={colors.dark} height={1} />
		<Row title="TIME" detail={moment(matchTime).tz('America/Los_Angeles').format('ddd, MMM DD - hh:mm A')} />
		<Hr backgroundColor={colors.dark} height={1} />
		<Row title="PERIOD" detail={periodConvert[period]} />
		<Hr backgroundColor={colors.dark} height={1} />
		<RowTeam title="HOME" teamName={team.home.name} sport={sport} score={score.home} status={status} />
		<Hr backgroundColor={colors.dark} height={1} />
		<RowTeam title="AWAY" teamName={team.away.name} sport={sport} score={score.away} status={status} />
		<Hr backgroundColor={colors.dark} height={1} />
		{status === 2 && <Row title="RESULT" detail="CANCELLED" color={colors.danger} />}
		{isBetOrder &&
		status !== 2 && (
			<SafeAreaView>
				<Row
					title="BET"
					detail={`${lineRename[lineType]} ${target.toUpperCase()} ${displayOdd(points, lineType) ||
						''} (${displayOdd(odd)})`}
					color={colors.special}
				/>
				<Hr backgroundColor={colors.dark} height={1} />
				<Row title="AT RISK" detail={wager.atRisk} color={colors.warning} />
				<Hr backgroundColor={colors.dark} height={1} />
				<Row title="TO WIN" detail={wager.toWin} color={colors.primary} />
				<Hr backgroundColor={colors.dark} height={1} />
				{status !== 0 && (
					<SafeAreaView>
						<Row title="RESULT" detail={balance} color={balance >= 0 ? colors.success : colors.danger} />
						<Hr backgroundColor={colors.dark} height={1} />
					</SafeAreaView>
				)}
			</SafeAreaView>
		)}
	</Card>
);

const styles = StyleSheet.create({
	row: {
		flex: 1,
		flexDirection: 'row',
		margin: 12
	},
	title: {
		width: 72,
		fontWeight: 'bold',
		fontSize: 12
	},
	logo: {
		height: 15,
		width: 30,
		resizeMode: 'contain'
	},
	detail: {
		flex: 1,
		fontWeight: 'bold',
		fontSize: 12
	}
});

export default CardBetDetail;
