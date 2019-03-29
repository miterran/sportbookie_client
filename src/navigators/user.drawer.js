import { createDrawerNavigator, createAppContainer } from 'react-navigation';
import UserHome from '../navigators/user.home';
import UserBet from '../navigators/user.bet';
import UserHistoryScreen from '../navigators/user.history';
import CustomDrawerContent from '../components/CustomDrawerContent';
import colors from '../ui_style';

const UserDrawerNav = createDrawerNavigator(
	{
		UserHome: {
			screen: UserHome,
			navigationOptions: {
				drawerLabel: 'HOME'
			}
		},
		UserBet: {
			screen: UserBet,
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
		initialRouteName: 'UserHome',
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
