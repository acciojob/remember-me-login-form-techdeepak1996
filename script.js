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