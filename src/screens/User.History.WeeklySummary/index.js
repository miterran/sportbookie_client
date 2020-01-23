import React, { PureComponent } from 'react';
import Container from '../../components/Container';
import Hr from '../../components/Hr';
import CardBetDetail from '../../components/CardBetDetail';
import CardHistoryWeekSelect from '../../components/CardHistoryWeekSelect';
import { FlatList, SafeAreaView } from 'react-native';

class UserHistoryWeeklySummary extends PureComponent {
	render() {
		const { navigation: { state: { params: history } } } = this.props;
		return (
			<Container>
				<SafeAreaView>
					<CardHistoryWeekSelect
						disabled={true}
						fromDate={history.fromDate}
						toDate={history.toDate}
						bets={history.betsWithGame.length}
						balance={history.balance}
					/>
					<SafeAreaView style={{ height: 12 }} />
					<Hr />
				</SafeAreaView>
				<FlatList
					data={history.betsWithGame}
					keyExtractor={(bet) => bet.ID}
					ListHeaderComponent={<SafeAreaView style={{ height: 12 }} />}
					ItemSeparatorComponent={() => <SafeAreaView style={{ height: 12 }} />}
					ListFooterComponent={<SafeAreaView style={{ height: 48 }} />}
					showsVerticalScrollIndicator={false}
					renderItem={({ item: bet }) => (
						<CardBetDetail
							game={bet.game}
							selected={bet.selected}
							isBetOrder={true}
							wager={bet.wager}
							status={bet.status}
							balance={bet.balance}
						/>
					)}
					ListFooterComponent={<SafeAreaView style={{ height: 24 }} />}
				/>
			</Container>
		);
	}
}

export default UserHistoryWeeklySummary;
