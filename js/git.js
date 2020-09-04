class Github{
    constructor(){
        this.client_id = 'd21ea365c3daf9eff18b';
        this.client_secret = '0190c52b72cc3bbc9baf8e5080d833db4ffa5350';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';

    }

    // Get Http Request
   async getUser(user){
    //    FOR PROFILE
       const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
       const profile= await profileResponse.json();

       // FOR REPOSITORY
       const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
       const repos = await repoResponse.json();

       return{
           profile,
           repos
       }
   }
}