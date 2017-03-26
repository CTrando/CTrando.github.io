/**
 * Created by Cameron on 3/24/2017.
 */

function initFadeInButton() {

    function fadeButton() {
        $("#fly-in-element").each(function(index){
           $(this).animate({
               top: "0px"
           }, 600);
        });
    }

    setTimeout(fadeButton, 9500);
}


