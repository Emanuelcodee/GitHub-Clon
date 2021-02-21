class Github{

    constructor(clientId, clientSecret){
        this.client_id = clientId;
        this.client_secret = clientSecret;
        this.repost_count = 9;
        this.repor_sort = 'created: asc';
    }
    async fetchUser(user){
        const userDataRequest = await fetch(`http://api.github.com/users/${user}?client_id=${this.client_id}&
        client_secret=${this.client_secret}`);
        const repositoriesRequest = await fetch(`http://api.github.com/users/${user}/repos?client_id=${this.client_id}&
        client_secret=${this.client_secret}&per_page=${this.repost_count}&sort=${this.repor_sort}`)
        const repositoriesData = await repositoriesRequest.json();
        const userData = await userDataRequest.json();
        return {
            userData,
            repositoriesData
        };
    }


}

module.exports = Github;