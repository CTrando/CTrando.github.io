/**
 * Created by Cameron on 3/24/2017.
 */

function initFadeInButton() {

    function fadeButton() {
        $("#fade-menu li").each(function (index) {
            $(this).animate({
                opacity: 1,
            }, 2000);
        });

        $("#fly-in-element").each(function(index){
           $(this).animate({
               top: "0px"
           }, 600);
        });

        $("#fade-menu li").each(function (index) {
            $(this).animate({
                borderTopLeftRadius: 100,
                borderTopRightRadius: 100,
                borderBottomLeftRadius: 100,
                borderBottomRightRadius: 100
            }, 5000);
        });
    }

    setTimeout(fadeButton, 9500);
}


