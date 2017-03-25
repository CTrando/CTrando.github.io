var messages = [
    "student.",
    "tutor.",
    "thinker.",
    "programmer."
];
var index = 0;
var loop;

function setNextDiv() {
    if(index < messages.length) {
        var val = messages[index];
        index++;
        return val;
    }
}

function finishedLooping() {
    return index == messages.length;
}

function update() {
    var sentence = setNextDiv();
    if(sentence != null) {
        $("#intro-switch").html(sentence).css("color", "firebrick").fadeIn(250);
    }

    if (!finishedLooping()) {
        setTimeout(function () {
            $("#intro-switch").fadeOut(250);
        }, 1750);
    } else {
        clearInterval(loop);
    }
}

function initSwitchFadeText() {
    loop = setInterval(function () {
        update();
    }, 2000);
}

