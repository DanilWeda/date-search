import moment from 'moment/moment';

import { concatYearAndMonth, formatDate, generateDaysClass, getCorrectDayOrMonth } from './helpers';

export class Datepicker {
	constructor(options) {
		this.id = options?.id;
		this.date = options.date;
		this.currentYear = this.getCurrentYear(options.date);
		this.currentMonth = this.getCurrentMonth(options.date);
		this.inputElement = document.getElementById(`calendar-input-${this.id}`);
		this.dateListElement = null;
		this.nextMonthElement = null;
		this.prevMonthElement = null;
		this.datepickerContainer = null;
	}

	render() {
		const datepickerMarkup = `<div id="datepicker-${this.id}" class="calendar-wrapper">
			<div class="calendar-container">
				<header class="calendar-container__header">
					<p class="calendar-container__current-date">
						<span id="datepicker-month-title"></span>
						<span id="datepicker-year-title"></span>
					</p>
					<div class="calendar-container__icons">
						<span id="prev" class="calendar-container__symbols">
							<i class="calendar-container__arrow calendar-container__arrow--left"></i>
						</span>
						<span id="next" class="calendar-container__symbols">
							<i class="calendar-container__arrow calendar-container__arrow--right"></i>
						</span>
					</div>
				</header>
				<div class="calendar-container__calendar">
					<ul class="calendar-container__weeks">
					<li>Sun</li>
					<li>Mon</li>
					<li>Tue</li>
					<li>Wed</li>
					<li>Thu</li>
					<li>Fri</li>
					<li>Sat</li>
					</ul>
					<ul id="calendar-days" class="calendar-container__days"></ul>
				</div>
			</div>
		</div>`;

		this.inputElement.parentElement.insertAdjacentHTML('beforeend', datepickerMarkup);

		this.datepickerContainer = document.getElementById(`datepicker-${this.id}`);
		this.dateListElement = this.datepickerContainer.querySelector('#calendar-days');
		this.nextMonthElement = this.datepickerContainer.querySelector('#next');
		this.prevMonthElement = this.datepickerContainer.querySelector('#prev');
		this.setHeaderYearAndMonthRange();
	}

	setHeaderYearAndMonthRange() {
		const monthContainer = this.datepickerContainer.querySelector('#datepicker-month-title');
		const yearContainer = this.datepickerContainer.querySelector('#datepicker-year-title');
		monthContainer.innerHTML = this.getCurrentMonth(this.date, true);
		yearContainer.innerHTML = this.getCurrentYear(this.date, true);

		this.renderDays();
	}

	renderDays() {
		const monthArray = [];
		const firstDayOfMonth = this.firstWeekDayOfTheMonth();
		const daysInMonth = this.daysInCurrentMonth();
		const listOfDays = this.dateListElement;
		listOfDays.innerHTML = '';

		if (firstDayOfMonth !== 7) for (let i = 1; i <= firstDayOfMonth; i++) monthArray.push('');
		for (let i = 1; i <= daysInMonth; i++) monthArray.push(i);

		if (monthArray.length % 7 !== 0) {
			const trailingEmptySlots = 7 - (monthArray.length % 7);
			for (let i = 1; i <= trailingEmptySlots; i++) monthArray.push('');
		}

		monthArray.forEach((day) => {
			const currentDay = getCorrectDayOrMonth(day);
			const currentMonth = getCorrectDayOrMonth(this.currentMonth);
			const dateValue = formatDate(currentDay, currentMonth, this.currentYear);

			const newDay = `<li data-value=${dateValue} class=${generateDaysClass(day, dateValue, this.date)}>${day}</li>`;
			listOfDays.insertAdjacentHTML('beforeend', newDay);
		});
	}

	firstWeekDayOfTheMonth() {
		return moment(new Date(concatYearAndMonth(this.currentYear, this.currentMonth))).isoWeekday();
	}

	getCurrentMonth(date, returnLabel) {
		if (returnLabel) return moment(this.currentMonth, 'MM').format('MMMM');
		return moment(new Date(date)).month() + 1;
	}

	getCurrentYear(date, returnLabel) {
		if (returnLabel) return moment(this.currentYear, 'YYYY').format('YYYY');
		return moment(new Date(date)).year();
	}

	changeMonth(prev) {
		const lastMonthIndex = 12;
		const firstMonthIndex = 1;
		const handleNextMonth = () => {
			const isLastMonth = this.currentMonth === lastMonthIndex;
			if (isLastMonth) {
				this.currentMonth = firstMonthIndex;
				this.currentYear = this.currentYear + 1;
				return;
			}
			this.currentMonth = this.currentMonth + 1;
		};

		const handlePrevMonth = () => {
			const isFirstMonth = this.currentMonth === firstMonthIndex;
			if (isFirstMonth) {
				this.currentMonth = lastMonthIndex;
				this.currentYear = this.currentYear - 1;
				return;
			}
			this.currentMonth = this.currentMonth - 1;
		};

		const onChangeDateMonth = prev ? handlePrevMonth : handleNextMonth;

		onChangeDateMonth();
		this.setHeaderYearAndMonthRange();
	}

	daysInCurrentMonth() {
		return moment(new Date(concatYearAndMonth(this.currentYear, this.currentMonth))).daysInMonth();
	}
}
