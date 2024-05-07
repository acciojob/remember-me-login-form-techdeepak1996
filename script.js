// Function to save login details in local storage
function saveLoginDetails(username, password) {
  localStorage.setItem('username', username);
  localStorage.setItem('password', password);
}

// Function to remove login details from local storage
function removeLoginDetails() {
  localStorage.removeItem('username');
  localStorage.removeItem('password');
}

// Function to check if login details exist in local storage
function checkExistingLoginDetails() {
  return localStorage.getItem('username') && localStorage.getItem('password');
}

// Function to display alert with logged in message
function displayLoggedInAlert(username) {
  alert(`Logged in as ${username}.`);
}

// Function to handle form submission
document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const rememberMeChecked = document.getElementById('checkbox').checked;

  if (username && password) { // Check if username and password are entered
    if (rememberMeChecked) {
      saveLoginDetails(username, password);
    } else {
      removeLoginDetails();
    }

    displayLoggedInAlert(username);
  } else {
    alert('Please enter both username and password.');
  }
});

// Check if there are saved login details
window.onload = function() {
  if (checkExistingLoginDetails()) {
    const existingButton = document.createElement('button');
    existingButton.id = 'existing';
    existingButton.textContent = 'Login as existing user';
    existingButton.addEventListener('click', function() {
      const username = localStorage.getItem('username');
      displayLoggedInAlert(username);
    });
    document.body.appendChild(existingButton);
  }
}