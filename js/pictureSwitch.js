/**
 * Created by Cameron on 4/15/2017.
 */

function switchPicture() {
    $("img").each(function () {
        var hello = $(this);
        $(this).fadeOut(100, switcher(hello));
        hello.fadeIn(100);
    });
}

function switcher(thingss) {
    var things = thingss[0];
    var thing = things.getAttribute("data-pics").split(",");
    var current = things.getAttribute("src");

    var pick = thing[Math.floor(Math.random() * thing.length)];
    while (pick === current) {
        pick = thing[Math.floor(Math.random() * thing.length)];
    }

    things.src = pick;
}


function init() {
    //setInterval(switchPicture, 2000);
    $("img").each(function() {
        var image = $(this)[0];
        image.onmouseover = function() {
            if(image.hasAttribute("hoverImg")) {
                image.src = image.getAttribute("hoverImg");
            }
        };

        image.onmouseout = function() {
            if(image.hasAttribute("origImg")) {
                image.src = image.getAttribute("origImg");
            }
        }
    });
}

$(document).ready(init);