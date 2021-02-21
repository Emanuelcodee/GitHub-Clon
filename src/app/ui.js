class UI{
    constructor(){
        this.profile = document.getElementById('profile');
    }

    //METODO PARA MOSTRAR PERFIL DEL USUARIO
    showProfile(user){
        console.log(user);
        this.profile.innerHTML = `
            <div class="card mt-4 animate__animated animate__backInLeft">
                <img src="${user.avatar_url}" class="card-img-top"/>
                <div class="card-body">
                    <h5 class="card-title" style="color:#FFFFFF">${user.name}</h5>
                    <h7>${user.login}</h7>
                    <h7 style="color:#FFFFFF" mt-4><br> ${user.bio}</h7>
                    <a href="${user.html_url}" class="btn btn-info btn-block mt-4" target="_blank">View Profile</a>
                    <div class="mt-4">
                        <i class="fas fa-users" style="color:#FFFFFF"></i> Followers: ${user.followers}
                        <i class="fas fa-user-plus ml-2" style="color:#FFFFFF"></i> Following: ${user.following}
                        <i class="fas fa-star ml-2"style="color:#EFB810"></i>${user.followers}
                    </div>
                    <div class="mt-2">
                        <i class="fas fa-map-marker-alt" style="color:#FFFFFF"></i> Location: ${user.location}
                    </div>
                    <div class="mt-2">
                        <i class="fab fa-twitter" style="color:#FFFFFF"></i> Twitter: @${user.twitter_username}
                    </div>
                </div>
            </div>
        `;
        this.clearMessage();
    }

    //METODO PARA MOSTRAR ALERT SI EL USUARIO NO ES ENCONTRADO
    showMessage(message, cssClass){
        const div = document.createElement('div');
        div.className = cssClass;
        div.appendChild(document.createTextNode(message));
        const content = document.querySelector('.row');
        const profile = document.querySelector('#profile');
        content.insertBefore(div, profile);
    }

    //METODO PARA BORRAR ALERT CUANDO ENCUENTRA EL USUARIO SI FUE ENCONTRADO
    clearMessage(){
        const alertFound = document.querySelector('.alert');
        if(alertFound){
            alertFound.remove();
        }
    }

    showRepositories(repositories){
        let template = '';
        console.log(repositories);
            repositories.forEach(repo => {
                template += `
                    <div class="card card-body mt-4 animate__animated animate__backInRight">
                        <div class="row">
                            <div class="col-md-5">
                                <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                            </div>
                            <div class="col-md-7">  
                                <a href="${repo.html_url}" class="btn btn-info" target="_blank">Language:${repo.language}</a>
                                <a href="${repo.html_url}" class="btn btn-info" target="_blank">Forks:${repo.forks_count}</a>
                            </div>
                        </div>
                    </div>
        `
            });
        document.getElementById('repositories').innerHTML = template;
    }
}

module.exports = UI;