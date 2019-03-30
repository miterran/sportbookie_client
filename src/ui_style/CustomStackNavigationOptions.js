import colors from './colors';
import DrawMenuButton from '../components/DrawMenuButton';
const CustomStackNavigationOptions = ({ navigation }) => ({
	headerRight: DrawMenuButton({ navigation: navigation }),
	headerStyle: {
		backgroundColor: colors.dark,
		borderBottomWidth: 0
	},
	headerTintColor: colors.white
});

export default CustomStackNavigationOptions;
