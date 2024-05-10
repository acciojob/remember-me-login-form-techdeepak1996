document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("login-form");
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const rememberCheckbox = document.getElementById("checkbox");

  // Function to handle form submission
  form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    const username = usernameInput.value;
    const password = passwordInput.value;

    // Save username and password to local storage if "remember me" checkbox is checked
    if (rememberCheckbox.checked) {
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
    } else {
      // Remove saved details from local storage if checkbox is unchecked
      localStorage.removeItem("username");
      localStorage.removeItem("password");
    }

    // Display alert with logged in message
    alert(`Logged in as ${username}`);
  });

  // Check if there are saved details in local storage
  const savedUsername = localStorage.getItem("username");
  if (savedUsername) {
    // Create a button to login as an existing user
    const existingButton = document.createElement("button");
    existingButton.textContent = "Login as existing user";
    existingButton.addEventListener("click", function() {
      // Show an alert with the logged in username
      alert(`Logged in as ${savedUsername}`);
    });
    form.appendChild(existingButton);
  }
});