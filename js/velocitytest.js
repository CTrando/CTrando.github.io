/**
 * Created by Cameron on 4/29/2017.
 */


function init() {
    var $element = $("#intro");

    $element.velocity(
        {
            width: "10px",
            right: "500px"
        },
        {
            duration: 500
        }
    );


    for(var i = 0; i< 5; i++) {
        $element.velocity("reverse");
    }
}

$(document).ready(init);