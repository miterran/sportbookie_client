import { createStackNavigator, createAppContainer } from 'react-navigation';
import AuthNav from './auth';
import UserDrawer from './user.drawer';

const AppNavigator = createStackNavigator(
	{
		Auth: { screen: AuthNav },
		User: { screen: UserDrawer }
	},
	{
		defaultNavigationOptions: {
			header: null,
			gesturesEnabled: false
		}
	}
);

export default createAppContainer(AppNavigator);
