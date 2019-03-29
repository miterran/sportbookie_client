import { createStackNavigator, createAppContainer } from 'react-navigation';
import UserBetSportScreen from '../screens/User.Bet.Sport';
import UserBetGameScreen from '../screens/User.Bet.Game';
import UserBetWagerScreen from '../screens/User.Bet.Wager';
import colors from '../ui_style';

const UserBet = createStackNavigator(
	{
		UserBetSport: {
			screen: UserBetSportScreen,
			navigationOptions: {
				title: 'SPORT'
			}
		},
		UserBetGame: {
			screen: UserBetGameScreen,
			navigationOptions: ({ navigation: { state: { params } } }) => ({
				title: params.title.toUpperCase()
			})
		},
		UserBetWager: {
			screen: UserBetWagerScreen,
			navigationOptions: {
				title: 'WAGER'
			}
		}
	},
	{
		defaultNavigationOptions: {
			headerStyle: {
				backgroundColor: colors.dark,
				borderBottomWidth: 0
			},
			headerTintColor: colors.white
		}
	}
);

export default createAppContainer(UserBet);
