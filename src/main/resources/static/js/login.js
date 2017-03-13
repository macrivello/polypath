// jQuery callback for document loaded
$(function () {
    var modal = document.getElementById('id01');

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };


    $("#signInButton").click(function(event) {
        event.preventDefault();

        submitLogin();
    });

    function submitLogin() {
        var username = $("#usernameInput").val();
        var password = $("#passwordInput").val();
        var loginDetails = {username: username, password: password};

        $.ajax({
            type: "POST",
            url: "/login",
            data: JSON.stringify(loginDetails),
            contentType:"application/json",
            dataType: "json",
            done: function(data) {
                console.log(data)
            },
            success: function(data) {
                console.log(data)

                //TODO: Store JWT Token
                //TODO: Redirect to Home
            },
            fail: function(data) {
                console.log(data)
            }
        });
    }

});