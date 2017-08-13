/**
 * Created by Cameron on 3/22/2017.
 */

function init() {
    var thing = document.cookie.indexOf("visited");
    if(document.cookie.indexOf("visited") < 0) {
        initFadeInText(2000);
        initSwitchFadeText(2000);
        initFadeInButton(7500);
        initShowOnScroll(400);
        document.cookie = "visited";
    } else {
        initFadeInText(0);
        initSwitchFadeText(2000);
        initFadeInButton(0);
        initShowOnScroll(0);
    }
}


$(document).ready(init);
