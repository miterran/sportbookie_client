import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import colors from '../ui_style';

const Hr = ({ backgroundColor = colors.black, height = 1 }) => (
	<SafeAreaView style={[ styles.hr, { backgroundColor: backgroundColor }, { height: height } ]} />
);

const styles = StyleSheet.create({
	hr: {
		width: '100%'
	}
});

export default Hr;
