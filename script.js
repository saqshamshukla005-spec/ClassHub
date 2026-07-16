document.addEventListener("DOMContentLoaded", () => {

    const studentBtn = document.querySelector("a[href='student-login.html']");
    const adminBtn = document.querySelector("a[href='admin-login.html']");

    if(studentBtn){
        studentBtn.addEventListener("click", function(){
            window.location.href = "student-login.html";
        });
    }

    if(adminBtn){
        adminBtn.addEventListener("click", function(){
            window.location.href = "admin-login.html";
        });
    }

});
