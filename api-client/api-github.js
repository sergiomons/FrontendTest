'use strict'

const githubUserApi = {

    _urlBase: 'https://api.github.com/users',

    _token: '9fa5383c3a248bd52d2c637576fc1e8069919887',

    _headers: { headers: { Authorization: `Bearer 9fa5383c3a248bd52d2c637576fc1e8069919887` , 
                'Content-Type': 'application/json',
                Accept: 'application/json' }},

    retrieveUserInfo(username) {
        return Promise.resolve()
                .then(() => {
                    if (typeof username !== 'string') throw Error('username is not a format correct')
                    if (!(username = username.trim()).length) throw Error('username cannot be empty or blank')
                    console.log(this._headers)
                    return fetch(`${this._urlBase}/${username}`, this._headers)
                        .then(res => res.json())
                        .then(data => data)
                        .catch(err => err.message)
                })
    },

    retrieveUserRepos(username) {
        return Promise.resolve()
                .then(() => {
                    if (typeof username !== 'string') throw Error('username is not a format correct')
                    if (!(username = username.trim()).length) throw Error('username cannot be empty or blank')

                    return fetch(`${this._urlBase}/${username}/repos`, this._headers)
                        .then(res => res.json())
                        .then(data => data)
                        .catch(err => err.message)
                })
    },




}