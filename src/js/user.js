import { changeDateSeparator } from './helpers/formatDate';

export class User {
	constructor(data) {
		this.user = data;
		this.container = document.getElementById('card-section');
		this.renderUser();
	}

	async renderUser() {
		const { id, firstname = '-', lastname = '-', email = '-', phone = '-', birthday = '-', gender = '-', website = '-' } = this.user;
		const renderBirthday = changeDateSeparator(birthday, true, '.');
		const userMarkup = `
			<div id="user-${id}" class="card-container__card card">
				<h2 class="card__name">${firstname} ${lastname}</h2>
				<div class="card__inner">
					<ul class="card__list">
						<li class="card__item card__item--mail">
							<span class="card__item-text">
								<a href="mailto:${email}" class="card__item-link">${email}</a>
							</span>
						</li>
						<li class="card__item card__item--phone">
							<span class="card__item-text">
								<a href="tel:${phone}" class="card__item-link">${phone}</a>
							</span>
						</li>
						<li class="card__item card__item--birth">
							<p class="card__item-text">${renderBirthday}</p>
						</li>
						<li class="card__item card__item--gender">
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
