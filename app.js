// Init GitHub class
const github = new GitHub();
const ui = new UI();


// Search input
const searchUser = document.getElementById("searchUser");

// search input even listener
searchUser.addEventListener('keyup', (e) => {
  // Get input text
  const userText = e.target.value;
  if (userText !== '') {
    // make http call
    github.getUser(userText)
      .then(data => {
        if (data.profile.message === 'Not Found') {
          // show alert
          let alert = document.getElementsByClassName('alert alert-danger')[0];
          console.log(alert.innerHTML);
          ui.showAlert('User not found.', 'alert alert-danger');
        } else {
          // show profile
          ui.showProfile(data.profile)
        }
      })
  } else {
    // Clear UI
    ui.clearProfile();
  }
})