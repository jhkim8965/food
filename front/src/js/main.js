/*=======================================================================================
    Default Section
=========================================================================================*/
const PATH_HOME = "/src";
const PATH_ADMIN = PATH_HOME + "/admin";
const PATH_USER = PATH_HOME + "/user";

// Retrieve session data
let screen = sessionStorage.getItem("screen");

// Initialize a appropriate screen
const $mainIframe = document.getElementById("main-iframe");
switch(screen) {
    case "admin":
        $mainIframe.src = PATH_ADMIN + "/admin.html";
        break;
    case "user":
        $mainIframe.src = PATH_USER + "/user.html";
        break;
}



/*=======================================================================================
    Funtion Section
=========================================================================================*/



/*=======================================================================================
    Event Section
=========================================================================================*/