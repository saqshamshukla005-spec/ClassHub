document.addEventListener("DOMContentLoaded", function () {

    console.log("ClassHub Loaded Successfully");

    const studentBtn = document.querySelector("a[href='student-login.html']");
    const adminBtn = document.querySelector("a[href='admin-login.html']");

    if (studentBtn) {
        studentBtn.onclick = function () {
            window.location.href = "student-login.html";
        };
    }

    if (adminBtn) {
        adminBtn.onclick = function () {
            window.location.href = "admin-login.html";
        };
    }

});
