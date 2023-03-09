function changeRoute() {
    let hashTag = window.location.hash;
    let pageID = hashTag.replace("#", "");
    // console.log(hashTag + " " + pageID); 
    $.get(`pages/${pageID}/${pageID}.html`, function(data){
        console.log("data" + data);
        $("#app").html(data);
    });
}

function initURLlisteners() {
    $(window).on("hashchange", changeRoute);
    changeRoute();
}

function initListeners () {
    $(".bars").click(function(e) {
        // console.log("clicked");
        $(".bars").toggleClass("active");
        $(".links").toggleClass("active");
        // turns added class on and off
    });

    $(".links a").click(function(e) {
        // console.log("clicked");
        $(".bars").toggleClass("active");
        $(".links").toggleClass("active");
    });

    
}

$(document).ready(function() {
    initListeners();
    initURLlisteners();
     });