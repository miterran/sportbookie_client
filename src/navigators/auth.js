import { createStackNavigator, createAppContainer } from 'react-navigation';
import AuthSigninScreen from '../screens/Auth.Signin';
import AuthLoginScreen from '../screens/Auth.Login';
import AuthRegisterScreen from '../screens/Auth.Register';
import colors from '../ui_style/colors';
const Auth = createStackNavigator(
	{
		Signin: { screen: AuthSigninScreen },
		Login: { screen: AuthLoginScreen, navigationOptions: { title: 'LOGIN' } },
		Register: { screen: AuthRegisterScreen, navigationOptions: { title: 'REGISTER' } }
	},
	{
		initialRouteName: 'Signin',
		defaultNavigationOptions: {
			gesturesEnabled: false,
			headerTransparent: true,
			headerTintColor: colors.white
		}
	}
);

export default createAppContainer(Auth);
