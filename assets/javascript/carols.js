
function show_more_events() {
    var laterEvents = document.querySelectorAll("section.carols .events.later");
    var i;
    for (i = 0; i < laterEvents.length; i++) {
        laterEvents[i].style.display = "grid";
    }

    var show_fewer_button = document.getElementById("showfewerevents");
    show_fewer_button.style.display = "block";

    var show_more_button = document.getElementById("showmoreevents");
    show_more_button.style.display = "None";
}

function show_fewer_events() {
    var laterEvents = document.querySelectorAll("section.carols .events.later");
    var i;
    for (i = 0; i < laterEvents.length; i++) {
        laterEvents[i].style.display = "None";
    }

    var show_fewer_button = document.getElementById("showfewerevents");
    show_fewer_button.style.display = "None";

    var show_more_button = document.getElementById("showmoreevents");
    show_more_button.style.display = "block";
}


//Do things when the DOM content has loaded so that we can safely manipulate the DOM.
document.addEventListener("DOMContentLoaded", function() {

    var show_more_button = document.getElementById("showmoreevents");
    show_more_button.addEventListener("click",show_more_events);

    var show_fewer_button = document.getElementById("showfewerevents");
    show_fewer_button.addEventListener("click",show_fewer_events);

    console.log("Carols script loaded");
 
    var now = Date.now();
    
    console.log("Hiding all events before: ${now}");
    
    var carolEvents = document.querySelectorAll("section.carols .events .event");
    var i;
    for (i = 0; i < carolEvents.length; i++) {
        var validUntil = new Date(carolEvents[i].getAttribute("valid_until"));
        if (validUntil <= now) {
            carolEvents[i].parentNode.removeChild(carolEvents[i]);
        }
    }

    console.log("Hiding later events");

    var show_fewer_button = document.getElementById("showfewerevents");
    show_fewer_button.style.display = "None";

    var laterEvents = document.querySelectorAll("section.carols .events.later");
    var i;
    for (i = 0; i < laterEvents.length; i++) {
        laterEvents[i].style.display = "None";
    }

});