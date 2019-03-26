import { createDrawerNavigator, createAppContainer } from 'react-navigation';
import UserState from '../navigators/user.state';
import UserAction from '../navigators/user.action';
import UserHistoryScreen from '../navigators/user.history';
import CustomDrawerContent from '../components/CustomDrawerContent';
import colors from '../ui_style';

const UserDrawerNav = createDrawerNavigator(
	{
		UserState: {
			screen: UserState,
			navigationOptions: {
				drawerLabel: 'HOME'
			}
		},
		UserAction: {
			screen: UserAction,
			navigationOptions: {
				drawerLabel: 'BET'
			}
		},
		UserHistory: {
			screen: UserHistoryScreen,
			navigationOptions: {
				drawerLabel: 'HISTORY'
			}
		}
	},
	{
		initialRouteName: 'UserState',
		drawerType: 'back',
		drawerWidth: 192,
		gesturesEnabled: false,
		drawerBackgroundColor: colors.dark,
		contentOptions: {
			labelStyle: {
				fontSize: 24
			},
			inactiveLabelStyle: {
				color: colors.white
			}
		},
		contentComponent: CustomDrawerContent
	}
);

export default createAppContainer(UserDrawerNav);
