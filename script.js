
function toggleMode() {
    document.body.classList.toggle("dark-mode");
    /*localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");*/
    document.body.classList.toggle('dark-mode');
    const icon = document.getElementById('mode-icon');
    icon.classList.toggle('fa-moon');
    icon.classList.toggle('fa-sun');
  }

  window.onload = function () {
    if (localStorage.getItem("theme") === "dark") {
      document.body.classList.add("dark-mode");
    }
     

    const typedText = document.querySelector('.typed-text');
    const texts = ["Finance Office", "Registration Office", "Lecturer Support", "Odel Office", "ICT Office"];
    let index = 0, charIndex = 0;

    function type() {
      if (charIndex < texts[index].length) {
        typedText.textContent += texts[index].charAt(charIndex);
        charIndex++;
        setTimeout(type, 100);
      } else {
        setTimeout(erase, 1500);
      }
    }

    function erase() {
      if (charIndex > 0) {
        typedText.textContent = texts[index].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 50);
      } else {
        index = (index + 1) % texts.length;
        setTimeout(type, 500);
      }
    }

    type();
  }

  let currentTime = new Date();

function updateReverseClock() {
// Subtract one second
currentTime.setSeconds(currentTime.getSeconds() - 1);

// Format time
const hours = String(currentTime.getHours()).padStart(2, '0');
const minutes = String(currentTime.getMinutes()).padStart(2, '0');
const seconds = String(currentTime.getSeconds()).padStart(2, '0');

// Display time
document.getElementById('reverseClock').textContent = `${hours}:${minutes}:${seconds}`;
}

// Run every 1 second
setInterval(updateReverseClock, 1000);
updateReverseClock(); // Initial call



//Modifications starts here

const slides = document.querySelectorAll('.carousel-slide');
let currentSlide = 0;

function showSlide(index) {
slides.forEach((slide, i) => {
slide.classList.toggle('active', i === index);
});
}

function nextSlide() {
currentSlide = (currentSlide + 1) % slides.length;
showSlide(currentSlide);
}

// Auto-slide every 6 seconds
setInterval(nextSlide, 6000);
//Modification ends

function sendToWhatsApp() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const service = document.getElementById("service").value;
    const message = document.getElementById("message").value;

    const phoneNumber = "254701872952"; // Replace with your WhatsApp number in international format without the '+' sign

    const whatsappMessage = `Hello, my name is ${name}.\nEmail: ${email}\nService Needed: ${service}\nMessage: ${message}`;
    
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappURL, "_blank");
  }