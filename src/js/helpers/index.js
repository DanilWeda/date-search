export const getUsers = async () => {
	toggleError(true);
	const baseUrl = 'https://fakerapi.it/api/v1/';
	const personsUrl = new URL('persons', baseUrl);
	const params = getSearchParams(true);
	personsUrl.search = params;

	try {
		const response = await fetch(personsUrl.href);
		if (response.status >= 400) throw response;
		const users = await response.json();
		return users;
	} catch (error) {
		console.log(error?.statusText);
	}
};

export const toggleError = (hide) => {
	const emptySection = document.getElementById('empty-data');
	if (!emptySection) return;
	if (hide) {
		if (!emptySection.classList.contains('hide')) emptySection.classList.add('hide');
	} else {
		if (emptySection?.classList.contains('hide')) emptySection.classList.remove('hide');
	}
};

export const getUserLoaders = (User) => Array.from({ length: 6 }, (_, i) => new User({ id: `loader-${i}` }));

export const removeUserLoaders = () => {
	const loaderCards = document.querySelectorAll('[id^=user-loader]');
	loaderCards.forEach((card) => card.remove());
};

export const getSearchParams = (returnString) => {
	const url = new URL(window.location.href);
	const searchParams = new URLSearchParams(url.search);
	return returnString ? searchParams.toString() : searchParams;
};

export const getInputDates = () => {
	const searchParams = getSearchParams();
	const start = searchParams.get('_birthday_start');
	const end = searchParams.get('_birthday_end');
	return [start, end];
};

export const createSearchParams = (paramsObj) => {
	const searchParams = getSearchParams();
	Object.entries(paramsObj).forEach(([name, value]) => searchParams.set(name, value));
	return searchParams.toString();
};

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
	return day + separator + month + separator + year;
};

export const getCorrectDayOrMonth = (dayOrMonth) => {
	return dayOrMonth < 10 ? '0' + dayOrMonth : dayOrMonth;
};

export const concatYearAndMonth = (year, month) => {
	return `${year}-${month}`;
};

export const getNumFromDate = (date) => {
	return date?.split('.').join('').split('_').join('');
};
