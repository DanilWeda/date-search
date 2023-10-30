export const generateDaysClass = (propDay, currentValue, date) => {
	const isActiveDay = currentValue === changeDateSeparator(date, true);
	switch (true) {
		case !propDay:
			return 'off-day';
		case isActiveDay:
			return 'active';
		default:
			return '';
	}
};

export const changeDateSeparator = (date, reverse = false, separator = '.') => {
	if (!date) return;
	const oppositeSeparator = separator === '-' ? '.' : '-';
	const splitDate = reverse ? date.split(oppositeSeparator).reverse() : date.split(oppositeSeparator);
	return splitDate.join(separator);
};

export const formatDate = (day, month, year, separator = '.') => {
	return `${day}${separator}${month}${separator}${year}`;
};

export const getCorrectDayOrMonth = (dayOrMonth) => {
	if (dayOrMonth < 10) return `0${dayOrMonth}`;
	return dayOrMonth;
};

export const concatYearAndMonth = (year, month) => {
	if (month > 9) return `${year}-${month}`;
	return `${year}-0${month}`;
};

export const getNumFromDate = (date) => {
	return date?.split('.').join('').split('_').join('');
};
