class GitHub {
  constructor() {
    this.client_id = '581e1ba338ec0cf5808e';
    this.client_secret = 'a4b6adf1d32c643c2ada15ad29e7944d61c34dd2';
  }

  // Get user method
  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret${this.client_secret}`);
    const profile = await profileResponse.json();
    return {
      profile
    }
  }

}