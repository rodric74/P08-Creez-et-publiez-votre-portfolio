//MENU

const app = (() => {
  let body;
  let menu;
  let menuLinks;
  let navItems;

  const init = () => {
    body = document.querySelector("body");
    menu = document.querySelector(".menu-icon");
    menuLinks = document.querySelectorAll(
      ".nav__list-item a, .nav__icon-item a"
    );
    navItems = document.querySelectorAll(".nav__list-item");

    applyListeners();
  };

  const applyListeners = () => {
    menu.addEventListener("click", () => toggleClass(body, "nav-active"));
    menuLinks.forEach((link) => {
      link.addEventListener("click", () => {
        body.classList.remove("nav-active");
      });
    });

    navItems.forEach((item) => {
      item.addEventListener("mouseenter", handleMouseEnter);
      item.addEventListener("mouseleave", handleMouseLeave);
    });
  };

  const handleMouseEnter = (event) => {
    const item = event.currentTarget;
    const navContent = document.querySelector(".nav__content");
    const itemWidth = item.offsetWidth;
    const itemLeftOffset = item.offsetLeft;
    const navContentWidth = navContent.offsetWidth;

    const maxWidth = navContentWidth - (itemLeftOffset + itemWidth);
    const barWidth = itemWidth + Math.min(0, maxWidth);

    item.style.setProperty("--bar-width", `${barWidth}px`);
  };

  const handleMouseLeave = (event) => {
    const item = event.currentTarget;
    item.style.removeProperty("--bar-width");
  };

  const toggleClass = (element, stringClass) => {
    if (element.classList.contains(stringClass))
      element.classList.remove(stringClass);
    else element.classList.add(stringClass);
  };

  init();
})();

//READ MORE

document.querySelectorAll(".work__project-text").forEach((paragraph, index) => {
  const words = paragraph.textContent.split(" ");
  const readMoreSpan = document.querySelectorAll(".read-more")[index];

  if (words.length > 25) {
    const shortText = words.slice(0, 25).join(" ") + "...";
    paragraph.setAttribute("data-fulltext", paragraph.textContent);
    paragraph.textContent = shortText;

    readMoreSpan.addEventListener("click", () => {
      if (paragraph.textContent === shortText) {
        paragraph.textContent = paragraph.getAttribute("data-fulltext");
        readMoreSpan.textContent = "Show less...";
      } else {
        paragraph.textContent = shortText;
        readMoreSpan.textContent = "Show more...";
      }
    });
  } else {
    readMoreSpan.style.display = "none";
  }
});

// EMAIL JS

(function () {
  // Initialize EmailJS
  emailjs.init("NiRKY6SfZxvr8ysRx");
})();

window.onload = function () {
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      // Generate a five-digit number for the contact_number variable
      this.contact_number.value = (Math.random() * 100000) | 0;

      // Send the form using EmailJS
      emailjs.sendForm("service_spf4zxs", "template_fs1fdnq", this).then(
        function () {
          console.log("SUCCESS!");
          alert("Message sent!");
        },
        function (error) {
          console.log("FAILED...", error);
          alert("Oops... " + JSON.stringify(error));
        }
      );
    });
};

//Animation and form verification
const formInputs = document.querySelectorAll(
  ".contact__form input, .contact__form textarea"
);
const title = document.querySelector(".contact__title");

formInputs.forEach((input) => {
  const label = input.previousElementSibling;

  input.addEventListener("focus", () => {
    title.classList.add("blurred");

    if (label) {
      label.style.fontWeight = "bold";
    }

    setTimeout(() => {
      title.classList.remove("blurred");
    }, 1000);
  });

  input.addEventListener("blur", () => {
    title.classList.remove("blurred");

    if (label) {
      label.style.fontWeight = "normal";
    }
  });
});

const emailInput = document.querySelector("#user_email");
const emailError = document.createElement("div");
emailError.style.color = "red";
emailError.textContent = "Veuillez entrer une adresse email valide";
emailError.style.display = "none";
emailInput.insertAdjacentElement("afterend", emailError);

emailInput.addEventListener("blur", () => {
  setTimeout(() => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailInput.value.trim() === "") {
      emailError.style.display = "none";
    } else if (!emailRegex.test(emailInput.value)) {
      emailError.style.display = "block";
    } else {
      emailError.style.display = "none";
    }
  }, 0);
});
