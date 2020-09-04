// Init Github
const github =  new Github();

// Init UI
const ui =  new UI();

// Search
const search = document.getElementById('searchUser');

// Search input event listener
search.addEventListener('keyup',(e)=>{
    let user_input = e.target.value;

    if(user_input !== ''){
        // Http call
        github.getUser(user_input)     //Calling up getUser with the init of Github
        .then(data => {
            if(data.profile.message){  //Check when the data returns not found
                // Show Error 
                ui.showMsg('User not found! Hint:Check spelling','alert alert-danger');
            }else{
                // Show Profile
                ui.showProfile(data.profile);
                ui.showRepos(data.repos);

            }
        })
    }else{
        // clear profile
        ui.clearProfile();
    }

    e.preventDefault();
})


