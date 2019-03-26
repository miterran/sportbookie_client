import colors from '../../ui_style';
const status = {
	0: {
		text: 'SUBMIT ORDER',
		backgroundColor: colors.primary,
		done: false
	},
	1: {
		text: 'COMPLETED',
		backgroundColor: colors.success,
		done: true
	},
	2: {
		text: 'MINIMUM RISK REQUIRES 10',
		backgroundColor: colors.warning,
		done: false
	},
	3: {
		text: 'NOT ENOUGH CREDIT',
		backgroundColor: colors.danger,
		done: false
	},
	4: {
		text: 'ODD UPDATED',
		backgroundColor: colors.warning,
		done: false
	},
	5: {
		text: 'EVENT TIME OUT',
		backgroundColor: colors.danger,
		done: true
	},
	6: {
		text: 'GAME NOT FOUND',
		backgroundColor: colors.danger,
		done: true
	},
	7: {
		text: 'GAME NOT FOUND',
		backgroundColor: colors.danger,
		done: true
	},
	8: {
		text: 'LOADING',
		backgroundColor: colors.action,
		done: false
	}
};

export default status;
