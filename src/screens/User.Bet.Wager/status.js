import colors from '../../ui_style/colors';
const status = {
	0: {
		text: 'SUBMIT ORDER',
		backgroundColor: colors.primary,
		done: false,
		disabled: false
	},
	1: {
		text: 'COMPLETED',
		backgroundColor: colors.success,
		done: true,
		disabled: false
	},
	2: {
		text: 'MINIMUM RISK REQUIRES 10',
		backgroundColor: colors.warning,
		done: false,
		disabled: true
	},
	3: {
		text: 'NOT ENOUGH CREDIT',
		backgroundColor: colors.danger,
		done: false,
		disabled: true
	},
	4: {
		text: 'ODD UPDATED',
		backgroundColor: colors.warning,
		done: false,
		disabled: true
	},
	5: {
		text: 'EVENT TIME OUT',
		backgroundColor: colors.danger,
		done: true,
		disabled: false
	},
	6: {
		text: 'GAME NOT FOUND',
		backgroundColor: colors.danger,
		done: true,
		disabled: true
	},
	8: {
		text: 'LOADING',
		backgroundColor: colors.action,
		done: false,
		disabled: true
	},
	9: {
		text: 'INPUT BET AMOUNT',
		backgroundColor: colors.black,
		done: false,
		disabled: true
	}
};

export default status;
