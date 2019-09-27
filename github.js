class GitHub {
  constructor() {
    this.client_id = '581e1ba338ec0cf5808e';
    this.client_secret = 'a4b6adf1d32c643c2ada15ad29e7944d61c34dd2';
    this.repos_count = 2;
    this.repos_sort = 'created: asc';
  }

  // Get user method
  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret${this.client_secret}`);

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret${this.client_secret}`);

    const profile = await profileResponse.json();

    const repos = await repoResponse.json();

    return {
      profile,
      repos
    }
  }



}