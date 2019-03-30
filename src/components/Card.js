import React from 'react';
import { StyleSheet, View } from 'react-native';
import colors from '../ui_style/colors';

const Card = ({ children }) => <View style={styles.background}>{children}</View>;

const styles = StyleSheet.create({
	background: {
		borderRadius: 12,
		marginLeft: 12,
		marginRight: 12,
		marginBottom: 12,
		backgroundColor: colors.black
	}
});

export default Card;
