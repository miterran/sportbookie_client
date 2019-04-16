import React from 'react';
import Container from './Container';
import { StyleSheet, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import colors from '../ui_style/colors';

const NoData = ({ onPress }) => (
	<Container>
		<SafeAreaView style={{ flex: 1 }} />
		<SafeAreaView style={{ flex: 1, alignItems: 'center' }}>
			<TouchableOpacity onPress={onPress}>
				<Text style={styles.title}>NO DATA AVAILABLE</Text>
				<Text style={[ styles.title, { fontSize: 12.5 } ]}>PLEASE CHECK BACK LATER</Text>
			</TouchableOpacity>
		</SafeAreaView>
		<SafeAreaView style={{ flex: 1 }} />
	</Container>
);

const styles = StyleSheet.create({
	title: {
		textAlign: 'center',
		color: colors.mute,
		fontSize: 18,
		fontWeight: 'bold'
	}
});

export default NoData;
