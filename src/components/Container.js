import React from 'react';
import { StyleSheet, View } from 'react-native';
import colors from '../ui_style'

const Container = ({ style, children }) => (
	<View style={[styles.container, style]}>
		{children}
	</View>
)

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.dark
	},
});

export default Container