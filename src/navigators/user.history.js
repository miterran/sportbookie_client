import { createStackNavigator, createAppContainer } from 'react-navigation';
import UserHistoryWeekSelectScreen from '../screens/User.History.WeekSelect';
import UserHistoryWeeklySummaryScreen from '../screens/User.History.WeeklySummary';
import colors from '../ui_style';

const UserHistory = createStackNavigator(
	{
		UserHistoryWeekSelect: {
			screen: UserHistoryWeekSelectScreen,
			navigationOptions: {
				title: 'HISTORY'
			}
		},
		UserHistoryWeeklyDetail: {
			screen: UserHistoryWeeklySummaryScreen,
			navigationOptions: {
				title: 'WEEKLY SUMMARY'
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

export default createAppContainer(UserHistory);
