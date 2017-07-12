"use strict";

function _classCallCheck(e, n) {
    if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function");
}

var _createClass = function() {
    function e(e, n) {
        for (var t = 0; t < n.length; t++) {
            var a = n[t];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), 
            Object.defineProperty(e, a.key, a);
        }
    }
    return function(n, t, a) {
        return t && e(n.prototype, t), a && e(n, a), n;
    };
}();

!function() {
    var e = function() {
        function e() {
            _classCallCheck(this, e);
        }
        return _createClass(e, null, [ {
            key: "obtener",
            value: function(e) {
                navigator.geolocation ? navigator.geolocation.getCurrentPosition(function(n) {
                    e({
                        lat: n.coords.latitude,
                        lng: n.coords.longitude
                    });
                }) : alert("No pudimos detectar el lugar en el que te encuentras");
            }
        } ]), e;
    }(), n = {
        lat: -34.5604792,
        lng: -58.50612639999997
    };
    google.maps.event.addDomListener(window, "load", function() {
        var t = new google.maps.Map(document.getElementById("map"), {
            center: n,
            zoom: 15
        });
        new google.maps.Marker({
            map: t,
            position: n,
            title: "RestauranteFacilito",
            visible: !0
        });
        e.obtener(function(e) {
            var t = new google.maps.LatLng(e.lat, e.lng), a = new google.maps.LatLng(n.lat, n.lng);
            new google.maps.DistanceMatrixService().getDistanceMatrix({
                origins: [ t ],
                destinations: [ a ],
                travelMode: google.maps.TravelMode.DRIVING
            }, function(e, n) {
                if (n === google.maps.DistanceMatrixStatus.OK) {
                    var t = e.rows[0].elements[0].duration.text;
                    document.querySelector("#message").innerHTML = "Estás a " + t + ' de una noche inolvidable en <span class="dancing-script medium">RestauranteFacilito</span>';
                }
            });
        });
    });
}();