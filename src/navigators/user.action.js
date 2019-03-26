import { createStackNavigator, createAppContainer } from 'react-navigation';
import UserActionSportScreen from '../screens/User.Action.Sport';
import UserActionGameScreen from '../screens/User.Action.Game';
import UserActionBetScreen from '../screens/User.Action.Bet';
import colors from '../ui_style';

const UserAction = createStackNavigator(
	{
		UserActionSport: {
			screen: UserActionSportScreen,
			navigationOptions: {
				title: 'SPORT'
			}
		},
		UserActionGame: {
			screen: UserActionGameScreen,
			navigationOptions: ({ navigation: { state: { params } } }) => ({
				title: params.title.toUpperCase()
			})
		},
		UserActionBet: {
			screen: UserActionBetScreen,
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

export default createAppContainer(UserAction);
