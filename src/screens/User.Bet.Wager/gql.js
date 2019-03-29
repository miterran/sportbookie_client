import { gql } from 'apollo-boost';

export const query = gql`
	query($ID: String!) {
		game(ID: $ID) {
			ID
			provider
			providerID
			sport
			league
			matchTime
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
			period
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
		userState {
			available
		}
	}
`;
export const mutation = gql`
	mutation(
		$selectedGameID: String!
		$selectedLineType: String!
		$selectedPointsType: String
		$selectedPoints: Float
		$selectOddType: String
		$selectedOdd: Float
		$selectedTarget: String
		$toWin: Int
		$atRisk: Int
	) {
		submitBetOrder(
			selectedGameID: $selectedGameID
			selectedLineType: $selectedLineType
			selectedPointsType: $selectedPointsType
			selectedPoints: $selectedPoints
			selectOddType: $selectOddType
			selectedOdd: $selectedOdd
			selectedTarget: $selectedTarget
			toWin: $toWin
			atRisk: $atRisk
		) {
			code
		}
	}
`;
