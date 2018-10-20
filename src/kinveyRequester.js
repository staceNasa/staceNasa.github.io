
const kinveyRequester = (function () {

    const BASE_URL = 'https://baas.kinvey.com/';
    const APP_KEY = 'kid_HJpkkOfom';
    const APP_SECRET = 'aeccb186a8fc4b71923ebadc0dfa25ff';
    const AUTH_HEADERS = {'Authorization': "Basic " + btoa(APP_KEY + ":" + APP_SECRET)}

    function registerUser(username, password) {
        $.ajax({
            method: "POST",
            url: BASE_URL + 'user/' + APP_KEY + '/',
            headers: AUTH_HEADERS,
            data: {username, password}
        }).then(function (res) {
            signInUser(res, 'Registration successful.')
            $('#formRegister').trigger('reset')
        }).catch(handleError)
    }

    function loginUser(username, password) {
        $.ajax({
            method: 'POST',
            url: BASE_URL + 'user/' + APP_KEY + '/login',
            headers: AUTH_HEADERS,
            data: {username, password}
        }).then(function (res) {
            signInUser(res, 'Login successful.')
            $('#formLogin').trigger('reset')
        }).catch(handleError)
    }

    function logoutUser() {
        $.ajax({
            method: 'POST',
            url: BASE_URL +  'user/' + APP_KEY + '/_logout',
            headers: {Authorization: 'Kinvey ' + sessionStorage.getItem('authToken')}
        }).catch(function (err) {
            console.log(err)
        })
        sessionStorage.clear()
        showInfo("Logout successful")
        showHomeView();
        showHideLinks()
    }
    function marsRoverPhotos() {
        let oReq = new XMLHttpRequest();
        function reqListener () {

            let res = this.responseText;
            console.log(res)
        }


        oReq.addEventListener("load", reqListener);
        oReq.open("GET", "https://sscweb.sci.gsfc.nasa.gov/WS/sscr/2/observatories");
        oReq.send();
        //https://sscweb.sci.gsfc.nasa.gov/WS/sscr/2/observatories"
    }




    async function signInUser(res, message) {
        saveUserSession(res);
        showInfo(message);
        await showHomeView();
        showHideLinks()
    }

    function saveUserSession(userInfo) {
        sessionStorage.setItem('authToken', userInfo._kmd.authtoken)
        sessionStorage.setItem('username', userInfo.username)
        sessionStorage.setItem('userId', userInfo._id)
    }

    function handleError(err) {
        showError(err.message)
    }

    return {registerUser, loginUser, logoutUser,marsRoverPhotos}
}())
