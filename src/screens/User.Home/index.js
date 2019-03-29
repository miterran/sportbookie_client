import React, { PureComponent } from 'react';
import { ScrollView, RefreshControl, FlatList, SafeAreaView } from 'react-native';
import Container from '../../components/Container';
import CardCredit from '../../components/CardCredit';
import CardCreditDual from '../../components/CardCreditDual';
import HeaderTitle from '../../components/HeaderTitle';
import CardBetDetail from '../../components/CardBetDetail';
import Loading from '../../components/Loading';
import Hr from '../../components/Hr';
import colors from '../../ui_style';
import { gql } from 'apollo-boost';
import { compose, graphql } from 'react-apollo';

class Home extends PureComponent {
	render() {
		if (this.props.data.loading) return <Loading />;
		const {
			data: { loading, refetch, userState: { initial, balance, atRisk, toWin, available, betsWithGame } }
		} = this.props;
		return (
			<Container>
				<ScrollView refreshControl={<RefreshControl refreshing={loading} onRefresh={refetch} />}>
					<HeaderTitle title="WEEKLY CREDIT" />
					<CardCredit title="INITIAL" amount={initial} color={colors.special} />
					<CardCreditDual
						titleLeft="AT RISK"
						amountLeft={atRisk}
						colorLeft={colors.warning}
						titleRight="TO WIIN"
						amountRight={toWin}
						colorRight={colors.primary}
					/>
					<CardCreditDual
						titleLeft="AVAILABLE"
						amountLeft={available}
						colorLeft={colors.action}
						titleRight="BALANCE"
						amountRight={balance}
						colorRight={balance >= 0 ? colors.success : colors.danger}
					/>

					<Hr />
					<SafeAreaView style={{ marginTop: 12, marginBottom: 48 }}>
						<HeaderTitle title={`${betsWithGame.length} OPEN BETS`} />
						<FlatList
							data={betsWithGame}
							keyExtractor={(bet) => bet.ID}
							ListFooterComponent={<SafeAreaView style={{ height: 24 }} />}
							renderItem={({ item: bet }) => (
								<CardBetDetail
									status={bet.status}
									game={bet.game}
									selected={bet.selected}
									isBetOrder={true}
									wager={bet.wager}
								/>
							)}
						/>
					</SafeAreaView>
				</ScrollView>
			</Container>
		);
	}
}
const query = gql`
	query {
		userState {
			initial
			toWin
			atRisk
			balance
			available
			betsWithGame {
				ID
				status
				createdAt
				balance
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
const StateWithData = compose(graphql(query, { options: { fetchPolicy: 'network-only' } }))(Home);
export default StateWithData;
