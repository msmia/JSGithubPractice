/**
 * app.js is basically the expert view where you create a your test cases.
 */


// Init GitHub class
const github = new GitHub();
const ui = new UI();


// Search input
const searchUser = document.getElementById("searchUser");

// search input even listener
searchUser.addEventListener('keyup', (e) => {
  // Get input text
  ui.clearNoUserFoundAlert();
  const userText = e.target.value;
  if (userText !== '') {
    github.getUser(userText) // Mke http call
      .then(data => {
        if (data.profile.message === 'Not Found') {
          // show alert
          ui.showAlert('User not found.', 'alert alert-danger');
        } else { // show profile
          ui.showProfile(data.profile);
          ui.showRepos(data.repos);
        }
      })
  } else {
    ui.clearProfile();  // Clear UI
  }
})