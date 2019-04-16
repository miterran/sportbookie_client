import React, { PureComponent } from 'react';
import Container from '../../components/Container';
import CardHistoryWeekSelect from '../../components/CardHistoryWeekSelect';
import { FlatList, SafeAreaView } from 'react-native';
import { gql } from 'apollo-boost';
import { compose, graphql } from 'react-apollo';
import Loading from '../../components/Loading';
import NoData from '../../components/NoData';
class UserHistoryWeekSelect extends PureComponent {
	render() {
		if (this.props.data.loading) return <Loading />;
		if (this.props.data.historysBets.every((history) => history.betsWithGame.length === 0)) {
			return <NoData onPress={() => this.props.data.refetch} />;
		}
		const { data: { loading, refetch, historysBets } } = this.props;
		return (
			<Container>
				<FlatList
					data={historysBets}
					onRefresh={refetch}
					refreshing={loading}
					keyExtractor={(history, i) => 'h' + i}
					ItemSeparatorComponent={() => <SafeAreaView style={{ height: 12 }} />}
					ListFooterComponent={<SafeAreaView style={{ height: 48 }} />}
					renderItem={({ item: history }) => (
						<CardHistoryWeekSelect
							onPress={() => this.props.navigation.navigate('UserHistoryWeeklyDetail', history)}
							fromDate={history.fromDate}
							toDate={history.toDate}
							bets={history.betsWithGame.length}
							balance={history.balance}
						/>
					)}
					ListFooterComponent={<SafeAreaView style={{ height: 24 }} />}
				/>
			</Container>
		);
	}
}

const query = gql`
	query {
		historysBets {
			fromDate
			toDate
			balance
			betsWithGame {
				balance
				ID
				status
				createdAt
				wager {
					toWin
					atRisk
				}
				selected {
					lineType
					pointsType
					points
					oddType
					odd
					target
				}
				game {
					sport
					league
					matchTime
					period
					score {
						home
						away
					}
					team {
						home {
							name
						}
						away {
							name
						}
					}
				}
			}
		}
	}
`;
const StateWithData = compose(graphql(query, { options: { fetchPolicy: 'network-only' } }))(UserHistoryWeekSelect);
export default StateWithData;
