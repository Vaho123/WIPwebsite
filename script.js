// Function to play a music sample (could be linked to an audio file)
function playMusicSample() {
   alert("Playing music sample...");
   // Here you could link to an actual audio file, like:
   // new Audio('path_to_your_audio_file.mp3').play();
}

// Function to show a video about adventure sports
function showAdventureVideo() {
   alert("Here's a cool video on adventure sports!");
   // You could link to an actual video here, like:
   // window.open('https://www.youtube.com/watch?v=some_video_id', '_blank');
}


// EmailJS initialization
emailjs.init('your_user_id'); // Replace with your EmailJS user ID

// Submit form and send email using EmailJS
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form data
    var formData = new FormData(this);

    // Send email
    emailjs.sendForm('your_service_id', 'your_template_id', formData)
        .then(function(response) {
            alert('Message sent successfully!');
        }, function(error) {
            alert('Failed to send message. Please try again.');
        });
});

function toggleVisibility(paragraphId1, paragraphId2, paragraphId3, paragraphId4 ) {
   var paragraph1 = document.getElementById(paragraphId1);
   var paragraph2 = document.getElementById(paragraphId2);
   var paragraph3 = document.getElementById(paragraphId3);
   var paragraph4 = document.getElementById(paragraphId4);
   if (paragraph1.classList.contains('hidden')) {
      paragraph1.classList.remove('hidden');
      paragraph2.classList.add('hidden');
      paragraph3.classList.add('hidden');
      paragraph4.classList.add('hidden');
   } else {
      paragraph1.classList.add('hidden');
   }
}

function nextPage(num) {
   switch (num) {
      case 1:
         window.location.href = "computer-programming.html"; // This navigates to the "about.html" page
          break;
      case 2:
         window.location.href = "it.html"; // This navigates to the "about.html" page
          break;
      case 3:
         window.location.href = "esol.html"; // This navigates to the "about.html" page
          break;
      case 4:
         window.location.href = "musical-instruments.html"; // This navigates to the "about.html" page
         break;
      case 5:
         window.location.href = "writing.html"; // This navigates to the "about.html" page
         break;
      case 6:
         window.location.href = "adventure-sports.html"; // This navigates to the "about.html" page
         break;
      case 7:
         window.location.href = "contact.html"; // This navigates to the "about.html" page
         break;
      default:
          alert("Inavalid selection")
          break;
  }
  

}

// Get the button element
const button = document.getElementById('sendButton');

// Add an event listener to the button to trigger the alert
button.addEventListener('click', function() {
  alert('Send was clicked!');
  window.location.href = "contact.html";
});

// Initialize EmailJS
emailjs.init('YOUR_USER_ID');

// Function to handle form submission
document.getElementById('contact').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const form = event.target;
  const name = form.user_name.value;
  const email = form.user_email.value;
  const message = form.message.value;

  const statusMessage = document.getElementById('status-message');
  statusMessage.textContent = 'Sending message...';
  
  // Prepare the email data
  const emailData = {
    user_name: name,
    user_email: email,
    message: message
  };

  // App password for Yahoo - qpjlgqxvtkotrpqi

  // Send the email using EmailJS
  emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', emailData)
    .then(function(response) {
      console.log('Email sent successfully:', response);
      statusMessage.textContent = 'Message sent successfully!';
      statusMessage.style.color = 'green';
      form.reset(); // Reset the form
    }, function(error) {
      console.log('Error sending email:', error);
      statusMessage.textContent = 'Failed to send message. Please try again later.';
      statusMessage.style.color = 'red';
    });
});


