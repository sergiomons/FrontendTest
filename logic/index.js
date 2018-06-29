'use strict'

    const userSearch = document.getElementById('user-search');
    userSearch.addEventListener('submit', (e) => {
        e.preventDefault();

        const username = document.getElementById('input-username').value
        console.log(username)
        githubUserApi.retrieveUserInfo(username)
            .then(userData =>{
                console.log(userData)
            })
    })

