const form = document.querySelector('.form_container');
form.addEventListener('submit', logInUser);
const emailInput = form[0];
const passwordInput = form[1];

function logInUser(e) {
	e.preventDefault();
	const submittedEmail = emailInput.value;
	const submittedPassword = passwordInput.value;

	alert(
		`Your email is: ${submittedEmail}\nAnd your password is ${submittedPassword}`
	);

	greetLoggedInUser(submittedEmail);
}

const greeting = document.querySelector('.greeting');

function greetLoggedInUser(email) {
	greeting.textContent = email;
}
