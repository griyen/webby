// Function to play a click sound and prevent link from opening on small screens
function playClickSound(link) {
  var audio = document.getElementById("clickSound");

  // Reset the audio playback position to the beginning
  audio.currentTime = 0;

  // Add an event listener to play the sound
  audio.addEventListener('ended', function() {
      audio.pause();
      audio.currentTime = 0;
  });

  // Play the sound
  audio.play();

  // Prevent the link from opening if the screen width is smaller
  if (link && window.innerWidth <= 768) {
      return false;
  }
}

// Typing animation
const textElement = document.getElementById('typing-text');
const text = "Exploring the world of computer engineering in order to become a front-end developer.";
let index = 0;

function typeNextLetter() {
  if (index < text.length) {
    textElement.textContent += text[index];
    index++;
    setTimeout(typeNextLetter, 30);
  }
}

typeNextLetter();

// Tab switching
const tabLinks = document.querySelectorAll(".tab-links");
const tabContents = document.querySelectorAll(".tab-contents");

function opentab(tabname) {
  tabLinks.forEach((tabLink) => {
    tabLink.classList.remove("active-link");
  });
  tabContents.forEach((tabContent) => {
    tabContent.classList.remove("active-tab");
  });
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

// Side menu
const sideMenu = document.getElementById("sidemenu");

function openmenu() {
  sideMenu.style.right = "0";
}

function closemenu() {
  sideMenu.style.right = "-200px";
}

// Email verification
const emailPattern = /^[a-zA-Z0-9._%+-]+@gmail.com$/;

function handleFormSubmission() {
  const emailInput = document.getElementById('email');
  const goBackButton = document.getElementById('goBackButton');
  const emailMessage = document.getElementById('emailMessage');
  const feedbackForm = document.getElementById('feedback-form');

  feedbackForm.addEventListener('submit', (event) => {
      if (!emailPattern.test(emailInput.value)) {
          // Prevent form submission if the email format is invalid
          event.preventDefault();
          emailMessage.textContent = "Invalid Gmail format. Please use a valid Gmail address.";
          emailMessage.style.color = "red";
      }
  });

  emailInput.addEventListener('input', () => {
      if (emailPattern.test(emailInput.value)) {
          // Valid Gmail format
          emailMessage.textContent = "nice";
          emailMessage.style.color = "green";
      } else {
          // Invalid format
          emailMessage.textContent = "Invalid Gmail format. Please use a valid Gmail address.";
          emailMessage.style.color = "red";
      }
  });

  goBackButton.addEventListener('click', (event) => {
    event.preventDefault();
    feedbackForm.reset(); // Reset the form fields
    clearErrorMessage(); // Clear any error message if present
  });

  function clearErrorMessage() {
    const emailMessage = document.getElementById('emailMessage');
    emailMessage.textContent = ''; // Clear the error message
  }
}

// Form submission
function handleFormSubmission() {
  const msg = document.getElementById("msg");
  const form = document.getElementById('your-form-id'); // Replace with your actual form ID
  const scriptURL = 'your-formspree-url'; // Replace with your Formspree URL

  form.addEventListener('submit', e => {
    e.preventDefault();
    msg.innerHTML = "Sending message...";

    const submitBtn = form.querySelector('button[type="submit"]');
    submitBtn.disabled = true;

    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
      .then(response => {
        form.reset();
        msg.innerHTML = "Message sent successfully";
        setTimeout(function () {
          msg.innerHTML = "";
        }, 2000);
        submitBtn.disabled = false;
      })
      .catch(error => {
        console.error('Error!', error.message);
        msg.innerHTML = "An error occurred. Please try again.";
        submitBtn.disabled = false;
      });
  });
}
