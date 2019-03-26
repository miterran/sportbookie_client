export const displayOdd = (n = 0, line) => {
	if (line === 'money' || line === 'draw') {
		return '';
	}
	if (line === 'total') {
		return n;
	}
	if (n > 0) {
		return `+${n.toString()}`;
	}
	return `${n.toString()}`;
};
