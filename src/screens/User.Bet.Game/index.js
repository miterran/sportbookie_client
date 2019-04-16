import React, { Component } from 'react';
import Container from '../../components/Container';
import { FlatList, SafeAreaView } from 'react-native';
import CardGame from '../../components/CardGame';
import NoData from '../../components/NoData';
import BottomButton from '../../components/BottomButton';
import colors from '../../ui_style/colors';
import { gql } from 'apollo-boost';
import { compose, graphql } from 'react-apollo';
import Loading from '../../components/Loading';

const initialState = {
	ID: '',
	lineType: '',
	pointsType: '',
	oddType: '',
	target: ''
};

class UserBetGame extends Component {
	state = initialState;
	_refetch() {
		this.props.data.refetch().then(() => this.setState(initialState));
	}
	render() {
		if (this.props.data.loading) return <Loading />;
		if (this.props.data.games.length === 0) {
			return <NoData onPress={() => this.props.data.refetch} />;
		}
		const { games, loading } = this.props.data;
		return (
			<Container>
				<FlatList
					data={games}
					onRefresh={() => this._refetch()}
					refreshing={loading}
					keyExtractor={(game) => game.ID}
					ItemSeparatorComponent={() => <SafeAreaView style={{ height: 12 }} />}
					ListFooterComponent={<SafeAreaView style={{ height: 48 }} />}
					extraData={this.state}
					renderItem={({ item: game }) => (
						<CardGame game={game} selectHandle={(select) => this.setState(select)} selected={this.state} />
					)}
				/>
				<BottomButton
					disabled={!this.state.ID}
					backgroundColor={this.state.ID ? colors.success : colors.dark}
					text={this.state.ID ? 'NEXT' : 'SELECT ODD'}
					onPress={() => this.props.navigation.navigate('UserBetWager', this.state)}
				/>
			</Container>
		);
	}
}

const query = gql`
	query($sport: String!) {
		games(sport: $sport) {
			ID
			provider
			providerID
			sport
			league
			matchTime
			period
			team {
				home {
					rot
					name
				}
				away {
					rot
					name
				}
			}
			line {
				money {
					homeOdd
					awayOdd
				}
				spread {
					homePoints
					awayPoints
					homeOdd
					awayOdd
				}
				total {
					points
					overOdd
					underOdd
				}
				draw {
					odd
				}
			}
		}
	}
`;

const StateWithData = compose(
	graphql(query, {
		options: ({ navigation: { state: { params } } }) => ({
			variables: { sport: params.name },
			fetchPolicy: 'network-only'
		})
	})
)(UserBetGame);

export default StateWithData;
