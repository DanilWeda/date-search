export const getUsers = async () => {
	toggleError(true);
	try {
		const response = await fetch('https://fakerapi.it/api/v1/persons');
		if (response.status >= 400) throw response;
		const users = await response.json();
		return users;
	} catch (error) {
		alert(error?.statusText);
	}
};

export const toggleError = (hide) => {
	const emptySection = document.getElementById('empty-data');
	if (hide) {
		if (!emptySection.classList.contains('hide')) emptySection.classList.add('hide');
	} else {
		if (emptySection.classList.contains('hide')) emptySection.classList.remove('hide');
	}
};

export const getUserLoaders = (User) => Array.from({ length: 6 }, (_, i) => new User({ id: `loader-${i}` }));

export const removeUserLoaders = () => {
	const loaderCards = document.querySelectorAll('[id^=user-loader]');
	loaderCards.forEach((card) => card.remove());
};
