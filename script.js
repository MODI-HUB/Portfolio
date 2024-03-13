const form = document.getElementById('contact-form');

form.addEventListener('submit', (e) => {
	e.preventDefault();
	
	const name = document.getElementById('name').value;
	const email = document.getElementById('email').value;
	const message = document.getElementById('message').value;
	
	alert(`Thank you for your message, ${name}! We will get back to you at ${email} with a response to ${message}.`);
});