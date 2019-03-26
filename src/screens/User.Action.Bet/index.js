import React, { Component } from 'react';
import Container from '../../components/Container';
import { ScrollView, RefreshControl } from 'react-native';
import BottomButton from '../../components/BottomButton';
import Loading from '../../components/Loading';
import CardBetWagerInput from '../../components/CardBetWagerInput';
import CardBetDetail from '../../components/CardBetDetail';
import { query, mutation } from './gql';
import { compose, graphql } from 'react-apollo';
import { withFormik } from 'formik';
import status from './status';

class UserActionBet extends Component {
	state = status[0];
	_onChangeAtRisk(atRisk) {
		if (Number(atRisk) < 0 || isNaN(Number(atRisk)) || atRisk % 1 != 0 || this.state.done) return;
		const {
			setFieldValue,
			navigation: { state: { params: { lineType, oddType } } },
			data: { game: { line } }
		} = this.props;
		let odd = line[lineType][oddType];
		let toWin = 0;
		odd > 0 ? (toWin = Number(atRisk) * odd / 100) : (toWin = Number(atRisk) / Math.abs(odd) * 100);
		setFieldValue('atRisk', Math.round(Number(atRisk)).toString());
		setFieldValue('toWin', Math.round(toWin).toString());
		this.setState(status[0]);
	}
	_onChangeToWin(toWin) {
		if (Number(toWin) < 0 || isNaN(Number(toWin)) || toWin % 1 != 0 || this.state.done) return;
		const {
			setFieldValue,
			navigation: { state: { params: { lineType, oddType } } },
			data: { game: { line } }
		} = this.props;
		let odd = line[lineType][oddType];
		let atRisk = 0;
		odd > 0 ? (atRisk = Number(toWin) * 100 / odd) : (atRisk = Number(toWin) * Math.abs(odd) / 100);
		setFieldValue('atRisk', Math.round(atRisk).toString());
		setFieldValue('toWin', Math.round(Number(toWin)).toString());
		this.setState(status[0]);
	}
	_refetch() {
		if (this.state.done) return;
		this.setState(status[0]);
		const { setFieldValue, data: { refetch } } = this.props;
		setFieldValue('atRisk', '');
		setFieldValue('toWin', '');
		refetch();
	}
	_handleOrderSubmit() {
		const {
			mutate,
			values: { atRisk, toWin },
			data: { game: { ID, line } },
			navigation: { state: { params } }
		} = this.props;

		this.setState(status[8]);

		mutate({
			variables: {
				selectedGameID: ID,
				selectedLineType: params.lineType,
				selectedPointsType: params.pointsType,
				selectedPoints: line[params.lineType][params.pointsType],
				selectOddType: params.oddType,
				selectedOdd: line[params.lineType][params.oddType],
				selectedTarget: params.target,
				toWin: toWin || '0',
				atRisk: atRisk || '0'
			}
		})
			.then((res) => res.data.submitBetOrder.code)
			.then((code) => {
				this.setState(status[code]);
			})
			.catch((e) => {
				this.setState(status[7]);
			});
	}
	_handleBottomButton() {
		if (this.state.done) {
			this.props.navigation.popToTop();
			this.props.navigation.navigate('UserState');
			return;
		}
		this._handleOrderSubmit();
		return;
	}
	render() {
		if (this.props.data.loading) return <Loading />;
		const {
			navigation: { state: { params } },
			values: { atRisk, toWin },
			data: { loading, game, userState: { available } }
		} = this.props;
		return (
			<Container>
				<ScrollView refreshControl={<RefreshControl refreshing={loading} onRefresh={() => this._refetch()} />}>
					<CardBetWagerInput
						editable={!loading || !this.state.done}
						avaiableCredit={available - atRisk}
						atRisk={atRisk}
						toWin={toWin}
						onChangeAtRisk={(amount) => this._onChangeAtRisk(amount)}
						onChangeToWin={(amount) => this._onChangeToWin(amount)}
						selected={params}
						line={game.line}
					/>
					<CardBetDetail game={game} selected={params} />
				</ScrollView>
				<BottomButton
					disabled={loading}
					text={this.state.text}
					backgroundColor={this.state.backgroundColor}
					onPress={() => this._handleBottomButton()}
				/>
			</Container>
		);
	}
}

const StateWithData = compose(
	graphql(query, {
		options: ({ navigation: { state: { params } } }) => ({
			variables: { ID: params.ID },
			fetchPolicy: 'network-only'
		})
	}),
	graphql(mutation),
	withFormik({
		mapPropsToValues: () => ({ atRisk: '', toWin: '' })
	})
)(UserActionBet);

export default StateWithData;
