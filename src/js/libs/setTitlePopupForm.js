export function setTitlePopupForm() {
		let body = document.querySelector("body");
		body.addEventListener("click", searchBtn)

		function searchBtn() {
			let data = event.target.dataset.src;
			let el = event.target
			if (data && data == "#universal-popup-form") {
				updateTitle(el.dataset.title, el.dataset.subtitle, data)
			}
		}

		function updateTitle(titleText,subtitleText, id) {
			let form = document.querySelector(`${id}`);
			let title = form.querySelector(".main-form__title");
			let subtitle = form.querySelector(".main-form__subtitle");
			if (!titleText) {
				title.innerHTML = `Заказать обратный звонок`;
			} else {
				title.innerHTML = `${titleText}`;
			}

			if (!subtitleText) {
				subtitle.innerHTML = `Наш менеджер свяжется с вами в ближайшее время`;
			} else {
				subtitle.innerHTML = `${subtitleText}`;
			}

		}
	};
	setTitlePopupForm();