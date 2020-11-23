$(document).ready(function() {

    $("#submit").on("click", function(event) {
        event.preventDefault();

        console.log("test")
        let email = {
            name: $("#fullName").val().trim(),
            sender: $("#enterEmail").val().trim(),
            content: $("#userInput").val().trim()
        }
        console.log(email)
    })
});