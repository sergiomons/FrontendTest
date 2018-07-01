'use strict'

// Api-github calls in order to retrieve information of the user

const githubUserApi = {

    _urlBase: 'https://api.github.com/users',

    /**
     * Function that gets several info of the user profile.
     * 
     * @param {String} username The username of the user.
     * 
     * @returns {<Promise>}
     */
    retrieveUserInfo(username) {
        return Promise.resolve()
                .then(() => {
                    if (typeof username !== 'string') throw Error('username is not a correct format');
                    if (!(username = username.trim()).length) throw Error('username cannot be empty or blank');

                    return fetch(`${this._urlBase}/${username}`)
                        .then(res => res.json())
                        .then(data => data)
                        .catch(err => err)
                })
    },

    /**
     * Function that gets all repositories of the user.
     * 
     * @param {String} username The username of the user.
     * 
     * @returns {<Promise>}
     */
    retrieveUserRepos(username) {
        return Promise.resolve()
                .then(() => {
                    if (typeof username !== 'string') throw Error('username is not a correct format');
                    if (!(username = username.trim()).length) throw Error('username cannot be empty or blank');

                    return fetch(`${this._urlBase}/${username}/repos`)
                        .then(res => res.json())
                        .then(data => data)
                        .catch(err => err.message)
                })
    },
}