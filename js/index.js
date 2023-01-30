const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password1 = document.querySelector("#password1");
const password2 = document.querySelector("#password2");
const terms = document.querySelector("#terms");

const clearBtn = document.querySelector(".control-buttons__btn--clear");
const registerBtn = document.querySelector(".control-buttons__btn--register");

clearBtn.addEventListener("click", e => {
	e.preventDefault();
	[username, email, password1, password2].forEach(e => {
		e.value = "";
	});
	terms.checked = false;
});
