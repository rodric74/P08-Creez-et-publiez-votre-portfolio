(function() {
    // Initialize EmailJS
    emailjs.init('NiRKY6SfZxvr8ysRx'); 
})();

window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // Generate a five-digit number for the contact_number variable
        this.contact_number.value = Math.random() * 100000 | 0;
        // Send the form using EmailJS
        emailjs.sendForm('service_spf4zxs', 'template_fs1fdnq', this)
            .then(function() {
                console.log('SUCCESS!');
                alert('Message sent!');
            }, function(error) {
                console.log('FAILED...', error);
                alert('Oops... ' + JSON.stringify(error));
            });
    });
    
};

console.clear();

const app = (() => {
	let body;
	let menu;
	let menuItems;
	
	const init = () => {
		body = document.querySelector('body');
		menu = document.querySelector('.menu-icon');
		menuItems = document.querySelectorAll('.nav__list-item');

		applyListeners();
	}
	
	const applyListeners = () => {
		menu.addEventListener('click', () => toggleClass(body, 'nav-active'));
	}
	
	const toggleClass = (element, stringClass) => {
		if(element.classList.contains(stringClass))
			element.classList.remove(stringClass);
		else
			element.classList.add(stringClass);
	}
	
	init();
})();


