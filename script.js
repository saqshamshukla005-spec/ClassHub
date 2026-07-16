document.addEventListener("DOMContentLoaded", function () {

    console.log("ClassHub Loaded");

    const studentBtn = document.querySelector("a[href='student-login.html']");
    const adminBtn = document.querySelector("a[href='admin-login.html']");

    if(studentBtn){
        studentBtn.addEventListener("click", function(){
            console.log("Student Login Opened");
        });
    }

    if(adminBtn){
        adminBtn.addEventListener("click", function(){
            console.log("CR-DC/Admin Login Opened");
        });
    }

});
