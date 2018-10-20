function attachButtonEvents() {
    $('#formRegister').on('submit', function (event) {
        event.preventDefault()
        let username = $("#formRegister input[name=username]").val()
        let password = $("#formRegister input[name=pass]").val()
        let checkPass = $("#formRegister input[name=checkPass]").val()
        if (username.length > 4 && password === checkPass && password) {
            kinveyRequester.registerUser(username, password)
        } else if (username.length < 5) {
            showError("Username must be at least 5 characters long!")
        } else if (password !== checkPass) {
            showError("Password does not match!")
        } else {
            showError("Username and password can not be empty!")
        }
    })

    $('#formLogin').on('submit', function (event) {
        event.preventDefault()
        let username = $("#formLogin input[name=username]").val()
        let password = $("#formLogin input[name=pass]").val()
        kinveyRequester.loginUser(username, password)
    })

}