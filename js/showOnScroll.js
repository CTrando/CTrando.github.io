/**
 * Created by Cameron on 3/25/2017.
 */

function initShowOnScroll() {

    /**
     * Because javascript is very bad, it calls this thing twice, using the previous value from last time the first time and the correct value the second time
     * Why could someone not design this language better
     */
    $(window).scroll(function () {
        $(".show-on-scroll").each(function (index) {
            var topOfScreen = window.scrollY;
            var topOfElement = $(this).parent().offset().top;

            var visible = $(this).is(":visible");

            if(topOfScreen +screen.height/2 > topOfElement && !visible){
                $(this).fadeIn(400);
            }
        });
    });
}