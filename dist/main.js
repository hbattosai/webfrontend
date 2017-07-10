"use strict";

!function() {
    function isInBottom() {
        var descriptionHeight = $("#description").Height();
        return $(window).scrollTop() > $(window).height() - 1.8 * descriptionHeight;
    }
    $(window).scroll(function() {
        console.log(isInBottom());
    });
}();