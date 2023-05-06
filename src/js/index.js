/*=======================================================================================
    Default Section
=========================================================================================*/



/*=======================================================================================
    Funtion Section
=========================================================================================*/



/*=======================================================================================
    Event Section
=========================================================================================*/
$("#btn-admin").click(function() {
    console.log("[INFO] - admin button is clicked!");
    sessionStorage.setItem("screen", "admin");
    window.location.replace("/src/main.html");
});

$("#btn-user").click(function() {
    console.log("[INFO] - user button is clicked!");
    sessionStorage.setItem("screen", "user");
    window.location.replace("/src/main.html");
});