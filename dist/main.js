"use strict";

!function() {
    function t() {
        $("#description").addClass("fixed").removeClass("absolute"), $("#navigation").slideUp(), 
        $("#sticky-navigation").slideDown("fast");
    }
    function n() {
        $("#description").removeClass("fixed").addClass("absolute"), $("#navigation").slideDown("fast"), 
        $("#sticky-navigation").slideUp("fast");
    }
    function i(t) {
        $.ajax({
            url: t.attr("action"),
            method: "POST",
            data: t.formObject(),
            dataType: "json",
            success: function() {
                alert("Todo Salio Bien");
            }
        });
    }
    function a() {
        var t = $("#description").height();
        return $(window).scrollTop() > $(window).height() - 2.5 * t;
    }
    var e = !1, o = 0, s = $("[data-name='image-counter']").attr("content");
    $("#contact-form").on("submit", function(t) {
        return t.preventDefault(), i($(this)), !1;
    }), $("#sticky-navigation").removeClass("hidden"), $("#sticky-navigation").slideUp(0), 
    setInterval(function() {
        o < s ? o++ : o = 0, $("#galeria .inner").css({
            left: "-" + 100 * o + "%"
        });
    }, 4e3), $(window).scroll(function() {
        var i = a();
        i && !e && (e = !0, t()), !i && e && (e = !1, n());
    });
}();