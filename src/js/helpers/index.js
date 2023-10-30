import { baseUrl } from '../api';
import { getSearchParams } from './searchParams';

export const getUsers = async () => {
	toggleError(true);
	const personsUrl = new URL('persons', baseUrl);
	const params = getSearchParams(true);
	personsUrl.search = params;

	try {
		const response = await fetch(personsUrl.href);
		if (response.status >= 400) throw response;
		const users = await response.json();
		return users;
	} catch (error) {
		console.warn(error?.statusText);
	}
};

export const toggleError = (hide) => {
	const emptySection = document.getElementById('empty-data');
	if (!emptySection) return;
	if (hide) return emptySection.classList.add('hide');
	emptySection.classList.remove('hide');
};

export const getUserLoaders = (User) => Array.from({ length: 6 }, (_, i) => new User({ id: `loader-${i}` }));

export const removeUserLoaders = () => {
	const loaderCards = document.querySelectorAll('[id^=user-loader]');
	loaderCards.forEach((card) => card.remove());
};
