"use strict";

!function() {
    function t() {
        n() || e($(i).find(".input:invalid").first().parent());
    }
    function n() {
        return document.querySelector(i).checkValidity();
    }
    function e(t) {
        $(".step.active").removeClass("active"), t.addClass("active"), t.find(".input").focus();
    }
    var i = "#contact-form";
    $(i).find(".input").on("change", function(n) {
        var i = $(n.target).parent().next(".step");
        i.lenght > 0 ? e(i) : t();
    });
}();