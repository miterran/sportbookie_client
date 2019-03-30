import React from 'react';
import { Image, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import Card from '../components/Card';
import Hr from '../components/Hr';
import colors from '../ui_style/colors';
import moment from 'moment-timezone';
import periodConvert from '../util/period';
import displayOdd from '../util/displayOdd';
import logos from '../util/logos';

const defaultSelected = {
	ID: '',
	lineType: '',
	pointsType: '',
	odType: '',
	target: ''
};

const GameText = ({ text, fontSize = 11, color = colors.white }) => (
	<Text style={{ flex: 1, fontSize: fontSize, color: color, fontWeight: 'bold', textAlign: 'center' }}>{text}</Text>
);

const Time = ({ matchTime, period }) => (
	<SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'space-around' }}>
		<GameText fontSize={16} text={moment(matchTime).tz('America/Los_Angeles').format('hh:mm A')} />
		<GameText text={moment(matchTime).tz('America/Los_Angeles').format('ddd, MMM DD').toUpperCase()} />
		<GameText text={periodConvert[period].toUpperCase()} />
	</SafeAreaView>
);

const Logo = ({ name, sport }) => (
	<SafeAreaView style={{ flex: 1, alignItems: 'center' }}>
		<Image
			source={logos[name.toLowerCase().replace(/ /g, '_')] || logos[sport]}
			style={{
				height: 48,
				width: 60,
				resizeMode: 'contain'
			}}
		/>
	</SafeAreaView>
);

const Row = ({ left, middle, right, minWidth = 'auto', isEvent = false }) => (
	<SafeAreaView style={{ marginBottom: 6 }}>
		<SafeAreaView style={{ flex: 1, flexDirection: 'row', marginBottom: isEvent ? 0 : 6 }}>
			<SafeAreaView style={{ flex: 5 }}>{left}</SafeAreaView>
			<SafeAreaView style={{ flex: 2, minWidth: minWidth }}>{middle}</SafeAreaView>
			<SafeAreaView style={{ flex: 5 }}>{right}</SafeAreaView>
		</SafeAreaView>
		<Hr backgroundColor={colors.dark} height={isEvent ? 0 : 1} />
	</SafeAreaView>
);

const Team = ({ home, away }) => (
	<Row left={<GameText text={home} />} middle={<GameText text="VS" />} right={<GameText text={away} />} />
);

const Event = ({ matchTime, period, homeName, awayName, sport }) => (
	<Row
		left={<Logo name={homeName} sport={sport} />}
		middle={<Time matchTime={matchTime} period={period} />}
		minWidth={36}
		isEvent={true}
		right={<Logo name={awayName} sport={sport} />}
	/>
);

const BetButton = ({ text, selectHandle, selected, select }) => (
	<TouchableOpacity
		onPress={() =>
			selectHandle(
				selected.ID === select.ID && selected.lineType === select.lineType && selected.target === select.target
					? defaultSelected
					: select
			)}
		style={{ flex: 1 }}
	>
		<GameText
			text={text}
			color={
				selected.ID === select.ID &&
				selected.lineType === select.lineType &&
				selected.target === select.target ? (
					colors.success
				) : (
					colors.dust
				)
			}
		/>
	</TouchableOpacity>
);

const Money = ({ line, ID, selectHandle, selected }) => {
	if (line.homeOdd === 0 || line.awayOdd === 0) {
		return null;
	}
	return (
		<Row
			left={
				<BetButton
					selectHandle={selectHandle}
					text={`(${displayOdd(line.homeOdd)})`}
					selected={selected}
					select={{
						ID: ID,
						lineType: 'money',
						pointsType: '',
						oddType: 'homeOdd',
						target: 'home'
					}}
				/>
			}
			middle={
				<GameText
					text="M-LINE"
					color={selected.lineType === 'money' && selected.ID === ID ? colors.success : colors.white}
				/>
			}
			right={
				<BetButton
					selectHandle={selectHandle}
					text={`(${displayOdd(line.awayOdd)})`}
					selected={selected}
					select={{
						ID: ID,
						lineType: 'money',
						pointsType: '',
						oddType: 'awayOdd',
						target: 'away'
					}}
				/>
			}
		/>
	);
};

const Spread = ({ line, ID, selectHandle, selected }) => {
	if (line.homeOdd === 0 || line.awayOdd === 0) {
		return null;
	}
	return (
		<Row
			left={
				<BetButton
					text={`${displayOdd(line.homePoints)} (${displayOdd(line.homeOdd)})`}
					selectHandle={selectHandle}
					selected={selected}
					select={{
						ID: ID,
						lineType: 'spread',
						pointsType: 'homePoints',
						oddType: 'homeOdd',
						target: 'home'
					}}
				/>
			}
			middle={
				<GameText
					text="SPREAD"
					color={selected.lineType === 'spread' && selected.ID === ID ? colors.success : colors.white}
				/>
			}
			right={
				<BetButton
					text={`${displayOdd(line.awayPoints)} (${displayOdd(line.awayOdd)})`}
					selectHandle={selectHandle}
					selected={selected}
					select={{
						ID: ID,
						lineType: 'spread',
						pointsType: 'awayPoints',
						oddType: 'awayOdd',
						target: 'away'
					}}
				/>
			}
		/>
	);
};

const Total = ({ line, ID, selectHandle, selected }) => {
	if (line.overOdd === 0 || line.underOdd === 0) {
		return null;
	}
	return (
		<Row
			left={
				<BetButton
					text={`O${line.points} (${displayOdd(line.overOdd)})`}
					selectHandle={selectHandle}
					selected={selected}
					select={{
						ID: ID,
						lineType: 'total',
						pointsType: 'points',
						oddType: 'overOdd',
						target: 'over'
					}}
				/>
			}
			middle={
				<GameText
					text="TOTAL"
					color={selected.lineType === 'total' && selected.ID === ID ? colors.success : colors.white}
				/>
			}
			right={
				<BetButton
					text={`U${line.points} (${displayOdd(line.underOdd)})`}
					selectHandle={selectHandle}
					selected={selected}
					select={{
						ID: ID,
						lineType: 'total',
						pointsType: 'points',
						oddType: 'underOdd',
						target: 'under'
					}}
				/>
			}
		/>
	);
};

const Draw = ({ line, ID, selectHandle, selected }) => {
	if (line.odd === 0) {
		return null;
	}
	return (
		<Row
			left={
				<BetButton
					text={`(${displayOdd(line.odd)})`}
					selectHandle={selectHandle}
					selected={selected}
					select={{
						ID: ID,
						lineType: 'draw',
						pointsType: '',
						oddType: 'odd',
						target: ''
					}}
				/>
			}
			middle={
				<GameText
					text="DRAW"
					color={selected.lineType === 'draw' && selected.ID === ID ? colors.success : colors.white}
				/>
			}
			right={
				<BetButton
					text={`(${displayOdd(line.odd)})`}
					selectHandle={selectHandle}
					selected={selected}
					select={{
						ID: ID,
						lineType: 'draw',
						pointsType: '',
						oddType: 'odd',
						target: ''
					}}
				/>
			}
		/>
	);
};

const CardGame = ({
	selectHandle,
	selected,
	game: { league, ID, sport, matchTime, period, team: { home, away }, line: { money, spread, total, draw } }
}) => (
	<Card>
		<SafeAreaView style={{ flex: 1, marginLeft: 6, marginRight: 6, marginTop: 12, marginBottom: 12 }}>
			<GameText text={league.toUpperCase()} color={colors.mute} fontSize={14} />
			<SafeAreaView style={{ height: 6 }} />
			<Event matchTime={matchTime} period={period} homeName={home.name} awayName={away.name} sport={sport} />
			<Team home={home.name} away={away.name} />
			<Money line={money} ID={ID} selectHandle={selectHandle} selected={selected} />
			<Spread line={spread} ID={ID} selectHandle={selectHandle} selected={selected} />
			<Total line={total} ID={ID} selectHandle={selectHandle} selected={selected} />
			<Draw line={draw} ID={ID} selectHandle={selectHandle} selected={selected} />
		</SafeAreaView>
	</Card>
);

export default CardGame;
