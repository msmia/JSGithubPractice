/**
 * UI class should have all the functions realted to the UI. 
 * 
 */

class UI {
  constructor() {
    this.profile = document.getElementById('profile');
  }
  showProfile(user) {
    this.profile.innerHTML = `
      <div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-3">
            <img class="img-fluid mb-2" src="${user.avatar_url}">
            <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
          </div>
          <div class="col-md-9">
            <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
            <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
            <span class="badge badge-success">Followers: ${user.followers}</span>
            <span class="badge badge-info">Following: ${user.following}</span>
            <br><br>
            <ul class="list-group">
              <li class="list-group-item">Company: ${user.company}</li>
              <li class="list-group-item">Website/Blog: ${user.blog}</li>
              <li class="list-group-item">Location: ${user.location}</li>
              <li class="list-group-item">Member Since: ${user.created_at}</li>
            </ul>
          </div>
        </div>
      </div>
      <h3 class="page-heading mb-3">Latest Repos</h3>
      <div id="repos"></div>
    `;
  }

  // Show repository
  showRepos(repos) {
    let output = '';
    repos.forEach(function (repo) {
      output += `
      <div class="card card-body mb-2">
        <div class="row">
          <div class="col-md-6">
            <a href="${repo.html_url}" target="_blank">${repo.name}</a>
          </div>  
          <div class="col-md-6">
            <span class="badge badge-secondary">Stars: ${repo.stargazers_count}</span>
            <span class="badge badge-success">Watchers: ${repo.watchers_count}</span>
            <span class="badge badge-info">Forks: ${repo.forks_count}</span>
          </div>
        </div>
      </div> 
      `
    });
    // output the repos
    document.getElementById('repos').innerHTML = output;
  }
  // Clear profile
  clearProfile() {
    this.profile.innerHTML = '';
  }
  // Show alert
  showAlert(msg, cls) {
    const firstAlert = document.getElementsByClassName(cls);
    // Only show one alert "user not found"
    if (firstAlert.length < 1) {
      const div = document.createElement('div');
      div.className = cls;
      div.appendChild(document.createTextNode(msg));
      const container = document.querySelector('.searchContainer');
      const search = document.querySelector('.search')
      container.insertBefore(div, search);
    }
  }

  // Clear alert
  clearNoUserFoundAlert() {
    const alert = document.getElementsByClassName('alert alert-danger');
    if (alert.length === 1) {
      alert[0].remove();
    }
  }
}