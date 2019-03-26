import { createStackNavigator, createAppContainer } from 'react-navigation';
import UserStateScreen from '../screens/User.State';
import colors from '../ui_style';

const UserState = createStackNavigator({
	UserState: {
		screen: UserStateScreen,
		navigationOptions: {
			title: 'STATE',
			headerStyle: {
				backgroundColor: colors.dark,
				borderBottomWidth: 0
			},
			headerTintColor: colors.white
		}
	}
});

export default createAppContainer(UserState);
