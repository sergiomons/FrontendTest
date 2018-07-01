// DOM render the information of the repositories
userRepos = (repositories) => {

    const userRepositories = document.getElementById('user-repos');

    userRepositories.style = 'display:block';
    
    // List of the repositories to show.
    const repoList = repositories.map(repository => {

        const {name, stargazers_count, forks_count } = repository;

        return `<li>
                    
                    <h3 class='title-repo'>${name}</h3>
                    <div id='right-count'>
                       
                        <img src="docs/images/star-icon-github.jpg"> <span>${stargazers_count}</span>
                        
                        <img src="docs/images/fork-icon-github.jpg"> <span>${forks_count}</span>
            
                    </div>
                </li>`
    })

    //Render of the repositories container.
    userRepositories.innerHTML = `<p id='repo-word'>Repositories</p> 
                                    ${repoList.join('')}
                                `
}