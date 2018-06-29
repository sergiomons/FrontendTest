'use strict'

    const userSearch = document.getElementById('user-search');
    
    userSearch.addEventListener('submit', (e) => {
        e.preventDefault();

        const username = document.getElementById('input-username').value
   
        githubUserApi.retrieveUserInfo(username)
            .then(userData => {

                return userData
            })
            .catch(err => err)  

        githubUserApi.retrieveUserRepos(username)
            .then(repos => {

                return repos
            })
            .catch(err => err)
    })

