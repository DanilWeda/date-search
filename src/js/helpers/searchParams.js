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
