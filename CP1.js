document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("reviewForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        
        alert("Your feedback is submitted!");

       
        form.reset();
    });
});
