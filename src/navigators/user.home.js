import { createStackNavigator, createAppContainer } from 'react-navigation';
import UserHomeScreen from '../screens/User.Home';
import colors from '../ui_style/colors';
import CustomStackNavigationOptions from '../ui_style/CustomStackNavigationOptions';
const UserHome = createStackNavigator(
	{
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
	},
	{
		defaultNavigationOptions: ({ navigation }) => CustomStackNavigationOptions({ navigation: navigation })
	}
);

export default createAppContainer(UserHome);
