document.addEventListener("DOMContentLoaded", function() {
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const rememberCheckbox = document.getElementById("checkbox");
  const submitButton = document.getElementById("submit");

  // Check if there are saved details in local storage
  const savedUsername = localStorage.getItem("username");
  const savedPassword = localStorage.getItem("password");
document.addEventListener("DOMContentLoaded", function() {
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const rememberCheckbox = document.getElementById("checkbox");
  const submitButton = document.getElementById("submit");

  // Event listener for form submission
  document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    const username = usernameInput.value;
    const password = passwordInput.value;

    // Save username and password to local storage if "remember me" checkbox is checked
    if (rememberCheckbox.checked) {
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);

      // If saved details exist, display the "Login as existing user" button
      let existingButton = document.getElementById("existing");
      if (!existingButton) {
        existingButton = document.createElement("button");
        existingButton.id = "existing";
        existingButton.textContent = "Login as existing user";
        document.body.appendChild(existingButton);
      }

      // When the "Login as existing user" button is clicked, show alert
      existingButton.addEventListener("click", function() {
        alert(`Logged in as ${username}`);
      });
    } else {
      // Remove saved details from local storage if checkbox is unchecked
      localStorage.removeItem("username");
      localStorage.removeItem("password");
      const existingButton = document.getElementById("existing");
      if (existingButton) {
        existingButton.remove();
      }
    }

    // Display alert with logged in message
    alert(`Logged in as ${username}`);
  });
});
  // Event listener for form submission
  document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    const username = usernameInput.value;
    const password = passwordInput.value;

    // Save username and password to local storage if "remember me" checkbox is checked
    if (rememberCheckbox.checked) {
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);

      // If saved details exist, display the "Login as existing user" button
      const existingButton = document.createElement("button");
      existingButton.id = "existing";
      existingButton.textContent = "Login as existing user";
      document.body.appendChild(existingButton);

      // When the "Login as existing user" button is clicked, show alert
      existingButton.addEventListener("click", function() {
        alert(`Logged in as ${savedUsername}`);
      });
    } else {
      // Remove saved details from local storage if checkbox is unchecked
      localStorage.removeItem("username");
      localStorage.removeItem("password");
    }

    // Display alert with logged in message
    alert(`Logged in as ${username}`);
  });
});