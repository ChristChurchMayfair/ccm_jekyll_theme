


//Do things when the DOM content has loaded so that we can safely manipulate the DOM.
document.addEventListener("DOMContentLoaded", function() {
    console.log("Carols script loaded");
 
    var now = Date.now();
    
    console.log("Hiding all events before: ${now}");
    
    var carolEvents = document.querySelectorAll("section.carols .events .event");

    var i;
    for (i = 0; i < carolEvents.length; i++) {
        console.log(carolEvents[i]);
        var validUntil = new Date(carolEvents[i].getAttribute("valid_until"));
        console.log(validUntil);
        if (validUntil <= now) {
            carolEvents[i].style.display = "None";
        }
    }
});