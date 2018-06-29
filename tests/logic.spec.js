describe('Test logic Github Api', () => {
    const username = 'sergiomons';
    const fakeUsername = '.....A56B45'
    // let originalTimeout

    // beforeEach(done => {
    //     originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL
    //     jasmine.DEFAULT_TIMEOUT_INTERVAL = 300;
    //     done()
    // })

    describe('Testing retrieve user info', () => {
        it('should retrieve on correct data', done => {
            githubUserApi.retrieveUserInfo(username)
                .then(userData => {
                    
                    const { login, name, bio } = userData;

                    expect(userData).toBeDefined();
                    expect(login).toEqual('sergiomons');
                    expect(name).toEqual('Sergio Monge');
                    expect(bio).toEqual(null);

                    done()
                })
                .catch(done)
        })

        it('should throw an error if username input is not a string', done => {
            githubUserApi.retrieveUserInfo()
                .catch(err => {
                    expect(err).toBeDefined()
                    expect(err.message).toBe('username is not a correct format')

                    done()
                })
        })

        it('should throw an error if username input is blank', done => {
            githubUserApi.retrieveUserInfo('')
                .catch(err => {
                    expect(err).toBeDefined()
                    expect(err.message).toBe('username cannot be empty or blank')

                    done()
                })
        })

        it('should throw an error if username input is empty', done => {
            githubUserApi.retrieveUserInfo('   ')
                .catch(err => {
                    expect(err).toBeDefined()
                    expect(err.message).toBe('username cannot be empty or blank')

                    done()
                })
        })


        it('search get no results', done => {
            githubUserApi.retrieveUserInfo(fakeUsername)
                .then(userData => {

                    expect(userData).toBeDefined();
                    expect(userData.message).toEqual('Not Found');

                    done()
                })
                .catch(done)
        })
    })

    describe('Testing retrieve user repos', () => {
        it('should retrieve on correct data', done => {
            githubUserApi.retrieveUserRepos(username)
                .then(repos => {

                    expect(repos).toBeDefined();
                    expect(repos.length).toBeGreaterThan(0)
                    expect(repos[0].owner.login).toEqual('sergiomons');

                    done()
                })
                .catch(done)
        })

        it('should throw an error if username input is not a string', done => {
            githubUserApi.retrieveUserRepos()
                .catch(err => {
                    expect(err).toBeDefined()
                    expect(err.message).toBe('username is not a correct format')

                    done()
                })
        })

        it('should throw an error if username input is blank', done => {
            githubUserApi.retrieveUserRepos('')
                .catch(err => {
                    expect(err).toBeDefined()
                    expect(err.message).toBe('username cannot be empty or blank')

                    done()
                })
        })

        it('should throw an error if username input is empty', done => {
            githubUserApi.retrieveUserRepos('   ')
                .catch(err => {
                    expect(err).toBeDefined()
                    expect(err.message).toBe('username cannot be empty or blank')

                    done()
                })
        })

        it('search get no results', done => {
            githubUserApi.retrieveUserRepos(fakeUsername)
                .then(userData => {

                    expect(userData).toBeDefined();
                    expect(userData.message).toEqual('Not Found');

                    done()
                })
                .catch(done)
        })
    })


    // afterEach(done => {
    //     jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout
    //     done()
    // })
})