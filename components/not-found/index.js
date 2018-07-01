 // DOM render when a user is not found.

 notFoundResults = () => {

    const notFound = document.getElementById('user-notFound');
    const userInformation = document.getElementById('user-info');
    const userRepositories = document.getElementById('user-repos');

    userInformation.style = 'display: none';
    userRepositories.style = 'display: none';
    notFound.style = 'display: grid';

    //Render of the 'not-found' container.
    notFound.innerHTML = `<div id="not-found-content">
                            <p>Does not exist</p>
                          </div>`
 }