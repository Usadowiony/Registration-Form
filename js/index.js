const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password1 = document.querySelector("#password1");
const password2 = document.querySelector("#password2");
const terms = document.querySelector("#terms");
const clearBtn = document.querySelector(".control-buttons__btn--clear");
const registerBtn = document.querySelector(".control-buttons__btn--register");
const formBoxes = document.querySelectorAll(".form-box");
const eyeBtns = [
	password1.parentElement.querySelector(".form-box__icon"),
	password2.parentElement.querySelector(".form-box__icon"),
];

const emptyInputError = input => {
	input.forEach(e => {
		if (e.value === "") {
			const formBox = e.parentElement;
			const errorMsg = formBox.querySelector(".form-box__error-text");
			formBox.classList.add("form-box--error");
			errorMsg.textContent = e.placeholder;
		} else {
			const formBox = e.parentElement;
			formBox.classList.remove("form-box--error");
		}
	});
};

const termsError = () => {
	if (terms.checked == false) {
		document.querySelector(".form-box--terms").classList.add("form-box--error");
	} else {
		document
			.querySelector(".form-box--terms")
			.classList.remove("form-box--error");
	}
};

const checkForm = el => {
	emptyInputError(el);
	termsError();
};

registerBtn.addEventListener("click", e => {
	e.preventDefault();

	checkForm([username, email, password1, password2]);
});

clearBtn.addEventListener("click", e => {
	e.preventDefault();
	[username, email, password1, password2].forEach(e => {
		e.value = "";
	});
	terms.checked = false;
	formBoxes.forEach(e => {
		e.classList.remove("form-box--error");
	});
});

eyeBtns.forEach(e => {
	e.addEventListener("click", () => {
		eyeBtns.forEach(el => {
			el.classList.toggle("fa-eye");
			el.classList.toggle("fa-eye-slash");
		});
		if (password1.type === "password") {
			password1.type = "text";
			password2.type = "text";
		} else {
			password1.type = "password";
			password2.type = "password";
		}
	});
});
