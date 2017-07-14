"use strict";

navigator.serviceWorker && navigator.serviceWorker.register("/sw.js"), function() {
    function e() {
        var e = o();
        e && !a && (a = !0, i()), !e && a && (a = !1, t());
    }
    function n() {
        $("#responsive-nav ul").toggleClass("active"), $("#menu-opener").toggleClass("glyphicon-menu-hamburger");
    }
    function i() {
        $("#description").addClass("fixed").removeClass("absolute"), $("#navigation").slideUp(), 
        $("#sticky-navigation").slideDown("fast");
    }
    function t() {
        $("#description").removeClass("fixed").addClass("absolute"), $("#navigation").slideDown("fast"), 
        $("#sticky-navigation").slideUp("fast");
    }
    function o() {
        var e = $("#description").height();
        return $(window).scrollTop() > $(window).height() - 2.5 * e;
    }
    var a = !1, s = 0, r = $("[data-name='image-counter']").attr("content");
    $("#contact-form").on("submit", function(e) {
        return e.preventDefault(), sendForm($(this)), !1;
    }), $("#sticky-navigation").removeClass("hidden"), $("#sticky-navigation").slideUp(0), 
    e(), function() {
        var e = new Date().getHours();
        (e < 17 || e > 23) && $("#is-open .text").html("Cerrado ahora <br> Abierto de 5:00pm a 23:00pm");
    }(), $("#menu-opener").on("click", n), $(".menu-link").on("click", n), setInterval(function() {
        s < r ? s++ : s = 0, $("#galeria .inner").css({
            left: "-" + 100 * s + "%"
        });
    }, 4e3), $(window).scroll(e);
}();