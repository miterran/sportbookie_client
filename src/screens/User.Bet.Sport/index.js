import React, { PureComponent } from 'react';
import Container from '../../components/Container';
import { FlatList, SafeAreaView } from 'react-native';
import BetSportPick from '../../components/BetSportPick';
import basketball_img from '../../../assets/images/sport/basketball.jpg';
import football_img from '../../../assets/images/sport/football.jpg';
import baseball_img from '../../../assets/images/sport/baseball.jpg';
import soccer_img from '../../../assets/images/sport/soccer.jpg';
import fighting_img from '../../../assets/images/sport/fighting.jpg';
import hockey_img from '../../../assets/images/sport/hockey.jpg';
import esport_img from '../../../assets/images/sport/esport.jpg';

const sports = [
	{ name: 'Basketball', title: 'BASKET BALL', img: basketball_img },
	{ name: 'Football', title: 'FOOT BALL', img: football_img },
	{ name: 'Baseball', title: 'BASE BALL', img: baseball_img },
	{ name: 'Soccer', title: 'SOCCER', img: soccer_img },
	{ name: 'Fighting', title: 'FIGHTING', img: fighting_img },
	{ name: 'Hockey', title: 'HOCKEY', img: hockey_img },
	{ name: 'esport', title: 'E-SPROT', img: esport_img }
];

class UserBetSport extends PureComponent {
	render() {
		return (
			<Container>
				<FlatList
					data={sports}
					keyExtractor={(sport) => sport.name}
					extraData={() => null}
					ListFooterComponent={<SafeAreaView style={{ height: 48 }} />}
					ItemSeparatorComponent={() => <SafeAreaView style={{ height: 12 }} />}
					renderItem={({ item: sport }) => {
						return (
							<BetSportPick
								onPress={() =>
									this.props.navigation.navigate('UserBetGame', {
										name: sport.name,
										title: sport.title
									})}
								source={sport.img}
								title={sport.title}
							/>
						);
					}}
				/>
			</Container>
		);
	}
}
export default UserBetSport;
