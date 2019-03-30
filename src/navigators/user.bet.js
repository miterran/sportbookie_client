import { createStackNavigator, createAppContainer } from 'react-navigation';
import UserBetSportScreen from '../screens/User.Bet.Sport';
import UserBetGameScreen from '../screens/User.Bet.Game';
import UserBetWagerScreen from '../screens/User.Bet.Wager';
import CustomStackNavigationOptions from '../ui_style/CustomStackNavigationOptions';

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
		defaultNavigationOptions: ({ navigation }) => CustomStackNavigationOptions({ navigation: navigation })
	}
);

export default createAppContainer(UserBet);
