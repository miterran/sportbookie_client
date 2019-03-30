import { createStackNavigator, createAppContainer } from 'react-navigation';
import UserHistoryWeekSelectScreen from '../screens/User.History.WeekSelect';
import UserHistoryWeeklySummaryScreen from '../screens/User.History.WeeklySummary';
import CustomStackNavigationOptions from '../ui_style/CustomStackNavigationOptions';
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
		defaultNavigationOptions: ({ navigation }) => CustomStackNavigationOptions({ navigation: navigation })
	}
);

export default createAppContainer(UserHistory);
