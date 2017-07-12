"use strict";

!function() {
    function i() {
        $("#description").addClass("fixed").removeClass("absolute"), $("#navigation").slideUp(), 
        $("#sticky-navigation").slideDown("fast");
    }
    function n() {
        $("#description").removeClass("fixed").addClass("absolute"), $("#navigation").slideDown("fast"), 
        $("#sticky-navigation").slideUp("fast");
    }
    function t() {
        var i = $("#description").height();
        return $(window).scrollTop() > $(window).height() - 2.5 * i;
    }
    var e = !1, a = 0, s = $("[data-name='image-counter']").attr("content");
    $("#contact-form").on("submit", function(i) {
        return i.preventDefault(), sendForm($(this)), !1;
    }), $("#sticky-navigation").removeClass("hidden"), $("#sticky-navigation").slideUp(0), 
    setInterval(function() {
        a < s ? a++ : a = 0, $("#galeria .inner").css({
            left: "-" + 100 * a + "%"
        });
    }, 4e3), $(window).scroll(function() {
        var a = t();
        a && !e && (e = !0, i()), !a && e && (e = !1, n());
    });
}();