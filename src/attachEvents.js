function hideAllViews() {
    $("#container > section").hide();
}
function showHideLinks() {
    hideAllLinks()
    if (sessionStorage.getItem("authToken")) {
        $('#linkObservatories').show()
        $('#linkLogout').show()
    } else {
        $('#linkLogin').show()
        $('#linkRegister').show()
    }
}

function hideAllLinks() {
    $('#linkObservatories').hide()
    $('#linkLogin').hide()
    $('#linkRegister').hide()
    $('#linkLogout').hide()
}
function attachLinkEvents() {
    $('#linkHome').on('click', function () {
        hideAllViews()
        $('#viewWelcome').show()
    })
    $(() => {
        hideAllViews()
        $('#viewWelcome').show()
    })
    $('#linkLogin').on('click', function () {
        hideAllViews()
        $('#viewLogin').show()
    })
    $('#linkRegister').on('click', function () {
        hideAllViews()
        $('#viewRegister').show()
    })
    $("#linkLogout > a").on('click',function () {
        kinveyRequester.logoutUser();
    })

}
function showHomeView() {
    hideAllViews()
    $('#viewWelcome').show()
}


