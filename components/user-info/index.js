// DOM render the information of the user
userInfo = (userData) => {

    const userInformation = document.getElementById('user-info');
    const notFound = document.getElementById('user-notFound');

    notFound.style = 'display: none';
    userInformation.style = 'display: flex';

    const {avatar_url, login, name, bio } = userData;

    //Render of the user info container.
    userInformation.innerHTML = `<div class='img-content'>
                                    <img src='${avatar_url}'>
                                </div>
                                <div class='info-content'>
                                    <p class='username'>@${login}</p>
                                    <h1>${name !== null ? name : `No name`}</h1>
                                    <p class='bio'>${bio !== null ? bio : `No user info bio `}</p>
                                <div>`
}