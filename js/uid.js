class UI{
    constructor(){
        this.profile = document.getElementById('profile');
    }

    // SHOW PROFILE IN UI
    showProfile(user){
        this.profile.innerHTML = `
            <div class="card card-body mb-3">
                <div class="row">
                    <div class="col-md-3">
                        <p>Name: ${user.name}</p>
                        <img src="${user.avatar_url}" class="rounded-circle img-fluid mb-2">
                        <a href="${user.html_url}" target="_blank" class="btn btn-info btn-block mb-4">View Profile</a>
                    </div>

                    <div class="col-md-9">
                        <span class="badge badge-success"> Public Gists: ${user.public_gists}</span>
                        <span class="badge badge-primary"> Public Repos: ${user.public_repos}</span>
                        <span class="badge badge-danger"> Followers: ${user.followers}</span>
                        <span class="badge badge-info"> Following: ${user.following}</span>
                        <br><br><br>

                        <ul class="list-group">                                              
                            <li class="list-group-item> Location: ${user.location}</li>
                            <li class="list-group-item> Website/Blog: ${user.blog}</li>    
                            <li class="list-group-item> Company: ${user.company}</li>
                            <li class="list-group-item> Email: ${user.email}</li> 
                            <li class="list-group-item> Member since: ${user.created_at}</li>
                                                       
                        </ul>
                    </div>
                </div>
            </div>
            <h3 class="page-heading mb-3">Latest Repository</h3>
            <div id="repos"></div> 
        `;
    }

    showRepos(repos){
        let output = '';

        repos.forEach((repo)=>{
            output += `
                <div class="card card-body mb-2">
                    <div class="row">
                        <div class="col-md-6">
                            <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                        </div>

                        <div class="col-md-6">
                        <span class="badge badge-danger"> Stars: ${repo.stargazer_count}</span>
                        <span class="badge badge-green"> Watchers: ${repo.watchers_count}</span>
                        <span class="badge badge-primary"> Folks: ${repo.forks_count}</span>
                        </div>

                    </div>
                </div>
            `
        });

        // Output Repository
        document.getElementById('repos').innerHTML = output;
    }

    // CLEAR PROFILE IN UI
    clearProfile(){
        this.profile.innerHTML = '';
    }

    // SHOW MESSAGE IN UI
    showMsg(msg,className){
        // Obtain UI element for placement
    const leadPara = document.querySelector('.searchContainer');

    // clear Message so as to make it appear only once
    this.clearMsg();

    const div = document.createElement('p');
    div.className = `msg ${className}`;
    div.appendChild(document.createTextNode(msg));
    leadPara.appendChild(div);
    setTimeout(()=>{
        this.clearMsg();
    },3000);
    }

    // clear Message
    clearMsg(){
        const msg = document.querySelector('.msg');

        if(msg){
            msg.remove();
        }
    }
}