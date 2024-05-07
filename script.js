document.addEventListener("DOMContentLoaded", function() {
      const usernameInput = document.getElementById("username");
      const passwordInput = document.getElementById("password");
      const rememberCheckbox = document.getElementById("checkbox");
      const submitButton = document.getElementById("submit");
      const existingButton = document.getElementById("existing");

      // Check if there are saved details in local storage
      const savedUsername = localStorage.getItem("username");
      const savedPassword = localStorage.getItem("password");

      // If saved details exist, display the "Login as existing user" button
      if (savedUsername && savedPassword) {
        const existingButton = document.createElement("button");
        existingButton.id = "existing";
        existingButton.textContent = "Login as existing user";
        document.body.appendChild(existingButton);

        // When the "Login as existing user" button is clicked, show alert
        existingButton.addEventListener("click", function() {
          alert(`Logged in as ${savedUsername}`);
        });
      }

      // Event listener for form submission
      document.getElementById("login-form").addEventListener("submit", function(event) {
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
    });