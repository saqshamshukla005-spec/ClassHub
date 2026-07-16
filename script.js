document.addEventListener("DOMContentLoaded", function () {

    alert("Welcome to ClassHub 🎉");

    const buttons = document.querySelectorAll("button");

    buttons.forEach(button => {

        button.addEventListener("click", function () {

            const text = this.innerText;

            if (text.includes("Student")) {
                alert("Student Login page will be available soon.");
            }

            else if (text.includes("Teacher")) {
                alert("Teacher Login page will be available soon.");
            }

            else {
                alert("CR-DC / Admin Login page will be available soon.");
            }

        });

    });

});
