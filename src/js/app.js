import IMask from 'imask';

import { Datepicker } from './datepicker';
import { getUserLoaders, getUsers, removeUserLoaders, toggleError } from './helpers';
import { changeDateSeparator, getNumFromDate } from './helpers/formatDate';
import { createSearchParams, getInputDates } from './helpers/searchParams';
import { User } from './user';

const createUsers = async () => {
	const cardContainer = document.getElementById('card-section');
	getUserLoaders(User);
	const users = await getUsers();
	if (!users?.data?.length) toggleError(false);
	cardContainer.innerHTML = '';
	users?.data?.forEach((user) => new User(user));
	removeUserLoaders();
};

const updateButton = document.getElementById('update-button');
const datepickerInputs = document.querySelectorAll('[id^=calendar-input]');

updateButton.addEventListener('click', () => {
	const startDate = datepickerInputs[0].value;
	const endDate = datepickerInputs[1].value;
	const { correctStartDate, correctEndDate } = validate(startDate, endDate);
	const params = createSearchParams({
		...(correctStartDate && { ['_birthday_start']: startDate }),
		...(correctEndDate && { ['_birthday_end']: endDate }),
	});
	if (params.length) window.location.search = params;
	createUsers();
});

const validate = (startDate, endDate) => {
	const countNumOfDateValue = 8;

	const startDateSymbolsLength = getNumFromDate(startDate)?.length;
	const endDateSymbolsLength = getNumFromDate(endDate)?.length;

	const startDateTime = new Date(changeDateSeparator(startDate, true, '-')).getTime();
	const endDateTime = new Date(changeDateSeparator(endDate, true, '-')).getTime();

	const startDateEquals = endDateSymbolsLength ? startDateTime < endDateTime : true;
	const endDateEquals = startDateSymbolsLength ? startDateEquals < endDateTime : true;

	const correctStartDate = startDateSymbolsLength === countNumOfDateValue && startDateEquals;
	const correctEndDate = endDateSymbolsLength === countNumOfDateValue && endDateEquals;

	return { correctStartDate, correctEndDate };
};

const activeDatePickers = [];

const closeDatepickers = () => {
	activeDatePickers.forEach((active) => {
		const container = active.datepickerContainer;
		if (container.classList.contains('hide')) return;
		container.classList.add('hide');
	});
};

const openDatepickers = (id) => {
	activeDatePickers.forEach((active) => {
		const container = active.id === id ? active.datepickerContainer : null;
		if (!container || !container.classList.contains('hide')) return;
		container.classList.remove('hide');
	});
};

const activeDateElem = [];

const handleChangeNextMonth = (datepicker) => () => {
	datepicker.changeMonth();
};

const handleChangePrevMonth = (datepicker) => () => {
	datepicker.changeMonth(true);
};

const handleChangeDays = (datepicker, input, id) => (event) => {
	const targetElement = event.target;
	if (targetElement === datepicker.dateListElement) return;
	const newDate = targetElement.dataset.value;
	if (activeDateElem[id]) activeDateElem[id].classList.remove('choose');
	targetElement.classList.add('choose');
	activeDateElem[id] = targetElement;
	input.value = newDate;
};

const handleStopPropagation = (event) => {
	event.stopPropagation();
};

const createPicker = (id, date) => {
	return new Datepicker({
		id,
		date,
	});
};

const handleOutside = (event) => {
	if (!event.target.id.includes('calendar-input')) closeDatepickers();
};

datepickerInputs.forEach((dateInput, pickerId) => {
	const dates = getInputDates();
	dateInput.value = dates[pickerId];

	IMask(dateInput, {
		mask: Date,
		min: new Date(1900, 0, 1),
		max: new Date(),

		lazy: true,
	});

	dateInput.addEventListener('focus', () => {
		closeDatepickers();
		const defaultYear = !pickerId ? 2000 : 2023;
		const defaultDate = `${defaultYear}-01-01`;
		const isActive = activeDatePickers.find((active) => active.id === pickerId);
		if (!isActive) {
			const date = changeDateSeparator(dates[pickerId], true, '-') || defaultDate;
			const datepicker = createPicker(pickerId, date);
			activeDatePickers.push(datepicker);
			datepicker.render();
			datepicker.datepickerContainer.addEventListener('click', handleStopPropagation);
			datepicker.nextMonthElement.addEventListener('click', handleChangeNextMonth(datepicker));
			datepicker.prevMonthElement.addEventListener('click', handleChangePrevMonth(datepicker));
			datepicker.dateListElement.addEventListener('click', handleChangeDays(datepicker, dateInput));
		} else {
			openDatepickers(pickerId);
		}

		document.body.addEventListener('click', handleOutside);
	});
});

document.addEventListener('DOMContentLoaded', createUsers);
