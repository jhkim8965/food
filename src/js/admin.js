/*=======================================================================================
    Default Section
=========================================================================================*/
const PATH_HOME = "/src";
const PATH_ADMIN = "/admin/features";
const $bodyIframe = document.getElementById("body-iframe");


/*=======================================================================================
    Funtion Section
=========================================================================================*/



/*=======================================================================================
    Event Section
=========================================================================================*/
$("#btn-main").click(function() {
    sessionStorage.setItem("screen", "");
    window.parent.location.replace("/index.html");
});

$("#btn-stock").click(function() {
    $bodyIframe.src = PATH_HOME + PATH_ADMIN + "/stock.html";
});

$("#btn-menu").click(function() {
    $bodyIframe.src = PATH_HOME + PATH_ADMIN + "/menu.html";
});

$("#btn-sales").click(function() {
    $bodyIframe.src = PATH_HOME + PATH_ADMIN + "/sales.html";
});