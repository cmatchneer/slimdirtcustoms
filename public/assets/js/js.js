$(document).ready(function() {

    $("#submit").on("click", (event) => {
        event.preventDefault();


        let email = {
            name: $("#fullName").val().trim(),
            sender: $("#enterEmail").val().trim(),
            content: $("#userInput").val().trim()
        }

        $.post("/api/email", email).then(function(response) {
            console.log(response);
        })
    })
});