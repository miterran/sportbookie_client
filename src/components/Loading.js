import React from 'react';
import { StyleSheet, ActivityIndicator } from 'react-native';
import colors from '../ui_style/colors';
import Container from '../components/Container';

const Loading = () => (
	<Container style={styles.container}>
		<ActivityIndicator size="large" color={colors.primary} />
	</Container>
);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center'
	}
});

export default Loading;
