import React from 'react';
import { StyleSheet, Text } from 'react-native';
import colors from '../ui_style'

const HeaderTitle = ({ title }) => (
	<Text style={styles.title}>{title}</Text>
)

const styles = StyleSheet.create({
	title: {
		textAlign: 'center',
		paddingTop: '6%',
		paddingLeft: '3%',
		paddingRight: '3%',
		paddingBottom: '3%',
		color: colors.mute,
		fontSize: 18,
		fontWeight: 'bold'
	}
});

export default HeaderTitle