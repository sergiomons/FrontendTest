'use strict'

// Logic that handles the information shown of the user according to the information entered.
    
    const userSearch = document.getElementById('user-search');
    
    //Submit from search user form.
    userSearch.addEventListener('submit', (e) => {
        e.preventDefault();

        const username = document.getElementById('input-username').value

        // Api call in order to retrieve the information of the user.
        githubUserApi.retrieveUserInfo(username)
            .then(userData => {
                
                if (userData.message !== 'Not Found')  
                    userInfo(userData)   

                else {
                    notFoundResults()
                }          
            })
            .catch(err => err)  

        // Api call in order to retrieve the repositories of the user
        githubUserApi.retrieveUserRepos(username)
            .then(repositories => userRepos(repositories))
            .catch(err => err)
    })

