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


const app = (() => {
	let body;
	let menu;
	let menuLinks;
	
	const init = () => {
		body = document.querySelector('body');
		menu = document.querySelector('.menu-icon');
		menuLinks = document.querySelectorAll('.nav__list-item a, .nav__icon-item a');

		applyListeners();
	}
	
	const applyListeners = () => {
		menu.addEventListener('click', () => toggleClass(body, 'nav-active'));
		menuLinks.forEach(link => {
			link.addEventListener('click', () => {
				body.classList.remove('nav-active');
			});
		});
	}

	
	const toggleClass = (element, stringClass) => {
		if(element.classList.contains(stringClass))
			element.classList.remove(stringClass);
		else
			element.classList.add(stringClass);
	}
	
	init();
})();

window.addEventListener('scroll', () => {
	const contactSection = document.querySelector('#contact');
	const contactTitle = document.querySelector('.contact__title');
	const contactSectionOffset = contactSection.offsetTop;
	const scrollPosition = window.scrollY + window.innerHeight;
  
	if (scrollPosition > contactSectionOffset) {
	  contactTitle.classList.add('visible');
	  
	  
	  let scale = 3 - (scrollPosition - contactSectionOffset) / window.innerHeight;
	  scale = Math.max(scale, 1); 
  
	  
	  contactTitle.style.transform = `scale(${scale})`;
	} else {
	  contactTitle.classList.remove('visible');
	  contactTitle.style.transform = 'scale(3)'; 
	}
  });
  
  


