//window['ga-disable-UA-XXXXX-Y'] = true;

function hideCookieNotice() {
    var cookie_notice = document.getElementById("cookie-notice");

    setTimeout(function() {
        cookie_notice.style.bottom = "-400px";
    },200);

    setTimeout(function() {
        cookie_notice.style.display = "none";
    },1000);
}

function acceptCookies() {
    console.log("Accepted cookies!");
    hideCookieNotice();
    Cookies.set('ccm_cookie_consent', 'accepted', { expires: 365 });
}

function declineCookies() {
    console.log("Declined cookies!");
    hideCookieNotice();
    Cookies.set('ccm_cookie_consent', 'declined', { expires: 365 });
}

function disableGATracking() {
    window['ga-disable-UA-XXXXX-Y'] = true;
}


document.addEventListener("DOMContentLoaded", function() {
    var cookie_consent = Cookies.get('ccm_cookie_consent')

    var accept_cookie_button = document.getElementById("accept-cookie-button");
    var decline_cookie_button = document.getElementById("decline-cookie-button");

    accept_cookie_button.addEventListener("click",acceptCookies);
    decline_cookie_button.addEventListener("click",declineCookies);

    if (cookie_consent == null) {
        console.log("User has not seen or consented to cookies");

        var cookie_notice = document.getElementById("cookie-notice");

        setTimeout(function() {
            cookie_notice.style.bottom = "0px";
        },2000); 
    }

    console.log(cookie_consent);
});