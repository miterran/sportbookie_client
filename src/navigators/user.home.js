import { createStackNavigator, createAppContainer } from 'react-navigation';
import UserHomeScreen from '../screens/User.Home';
import colors from '../ui_style';

const UserHome = createStackNavigator({
	UserHome: {
		screen: UserHomeScreen,
		navigationOptions: {
			title: 'HOME',
			headerStyle: {
				backgroundColor: colors.dark,
				borderBottomWidth: 0
			},
			headerTintColor: colors.white
		}
	}
});

export default createAppContainer(UserHome);
