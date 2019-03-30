import React from 'react';
import { TouchableOpacity } from 'react-native';
import colors from '../ui_style/colors';
import { Ionicons } from '@expo/vector-icons';
import { DrawerActions } from 'react-navigation';

const DrawMenuButton = ({ navigation }) => (
	<TouchableOpacity style={{ flex: 1 }} onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
		<Ionicons style={{ marginRight: 12 }} name="md-menu" size={32} color={colors.dust} />
	</TouchableOpacity>
);

export default DrawMenuButton;
