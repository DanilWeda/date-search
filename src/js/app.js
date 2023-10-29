import { getUserLoaders, getUsers, removeUserLoaders, toggleError } from './helpers';

class User {
	constructor(data) {
		this.user = data;
		this.renderUser();
	}

	async renderUser() {
		const { id, firstname = '-', lastname = '-', email = '-', phone = '-', birthday = '-', gender = '-', website = '-' } = this.user;
		const cardContainer = document.getElementById('card-section');

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
							<p class="card__item-text">${birthday}</p>
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

		cardContainer.insertAdjacentHTML('beforeend', userMarkup);
	}
}

const createUsers = async () => {
	getUserLoaders(User);
	const users = await getUsers();
	if (!users?.data?.length) toggleError(false);
	users?.data?.forEach((user) => new User(user));
	removeUserLoaders();
};

document.addEventListener('DOMContentLoaded', createUsers);
