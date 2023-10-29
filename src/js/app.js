import IMask from 'imask';

import { Datepicker } from './datepicker';
import {
	changeDateSeparator,
	createSearchParams,
	getInputDates,
	getNumFromDate,
	getUserLoaders,
	getUsers,
	removeUserLoaders,
	toggleError,
} from './helpers';
class User {
	constructor(data) {
		this.user = data;
		this.container = document.getElementById('card-section');
		this.renderUser();
	}

	async renderUser() {
		const { id, firstname = '-', lastname = '-', email = '-', phone = '-', birthday = '-', gender = '-', website = '-' } = this.user;
		const renderBirthday = birthday.split().reverse().join().replace(/-/g, '.');
		const userMarkup = `
			<div id="user-${id}" class="card-container__card card">
				<h2 class="card__name">${firstname} ${lastname}</h2>
				<div class="card__inner">
					<ul class="card__list">
						<li class="card__item card__item--mail">
							<p class="card__item-text">
								<a href="mailto:${email}" class="card__item-link">${email}</a>
							</p>
						</li>
						<li class="card__item card__item--phone">
							<p class="card__item-text">
								<a href="tel:${phone}" class="card__item-link">${phone}</a>
							</p>
						</li>
						<li class="card__item card__item--birth">
							<p class="card__item-text">${renderBirthday}</p>
						</li>
						<li class="card__item card__item--sex">
							<p class="card__item-text">${gender}</p>
						</li>
						<li class="card__item card__item--site">
							<p class="card__item-text">
								<a href="${website}" target="_blank" class="card__item-link">${website}</a>
							</p>
						</li>
					</ul>
				</div>
			</div>
		`;

		this.container.insertAdjacentHTML('beforeend', userMarkup);
	}
}

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
		if (!container) return;
		if (!container.classList.contains('hide')) return;
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

datepickerInputs.forEach((dateInput, idx) => {
	const dates = getInputDates();
	dateInput.value = dates[idx];

	IMask(dateInput, {
		mask: Date,
		min: new Date(1970, 0, 1),
		max: new Date(2023, 0, 1),

		lazy: false,
	});

	dateInput.addEventListener('focus', () => {
		closeDatepickers();
		const defaultDate = `200${idx}-01-01`;
		const isActive = activeDatePickers.find((active) => active.id === idx);
		if (!isActive) {
			const test = changeDateSeparator(dates[idx], true, '-') || defaultDate;
			const datepicker = createPicker(idx, test);
			activeDatePickers.push(datepicker);
			datepicker.render();
			datepicker.datepickerContainer.addEventListener('click', handleStopPropagation);
			datepicker.nextMonthElement.addEventListener('click', handleChangeNextMonth(datepicker));
			datepicker.prevMonthElement.addEventListener('click', handleChangePrevMonth(datepicker));
			datepicker.dateListElement.addEventListener('click', handleChangeDays(datepicker, dateInput));
		} else {
			openDatepickers(idx);
		}

		document.body.addEventListener('click', handleOutside);
	});
});

document.addEventListener('DOMContentLoaded', createUsers);
