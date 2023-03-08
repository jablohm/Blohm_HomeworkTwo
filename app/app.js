// function changeRoute() {
//     let hashTag = window.location.hash;
//     let pageID = hashTag.replace("#", "");
//     // console.log(hashTag + " " + pageID); 
//     $.get(`pages/${pageID}/${pageID}.html`, function(data){
//         console.log("data" + data);
//         $("#app").html(data);
//     });
// }

// function initURLlistener() {
//     $(window).on("hashchange", changeRoute);
//     changeRoute();
// }


// $(document).ready(function() {
//     initURLlistener();

// })

function initListeners () {
    $(".bars").click(function(e) {
        // console.log("clicked");
        $(".bars").toggleClass("active");
        // turns added class on and off
    })
}

$(document).ready(function() {
    initListeners();
     });