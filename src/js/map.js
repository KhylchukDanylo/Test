$(function(){
  
  
  $('.callback_button').click(function () {
    $('#call_back').arcticmodal({
    beforeOpen: function(data, el) {
           initialize();
    },
});
        return false;
    });

});


var geo; 
var address = 'Дубна Московская область';
function initialize() { 
geo = new google.maps.Geocoder();    
geo.geocode({ 'address' : address}, function (results,status) {
if(status == google.maps.GeocoderStatus.OK) { 
var latlng = theMap.setCenter(results[0].geometry.location);
var secheltLoc = new google.maps.LatLng(results[0].geometry.location.lat(), results[0].geometry.location.lng());
var marker = new google.maps.Marker({
                    map: theMap,
                    icon: image,
                    draggable: false,
                    animation: google.maps.Animation.DROP,
                    position: secheltLoc,
                    visible: true
});
}
});
             image = {
              url: "http://icons.iconarchive.com/icons/icons-land/vista-map-markers/32/Map-Marker-Marker-Outside-Chartreuse-icon.png", 
              anchor: new google.maps.Point(26, 51),
              scaledSize: new google.maps.Size(51, 51)   
             };
                var myMapOptions = {
                    mapTypeId: google.maps.MapTypeId.ROADMAP,
                    zoom: 15,
                    scrollwheel: false,
                    mapTypeControl: false,
                    zoomControl: true,
styles: [{
                                            "featureType": "landscape",
                                            "stylers": [{
                                                "saturation": -100
                                            }, {
                                                "lightness": 65
                                            }, {
                                                "visibility": "on"
                                            }]
                                        }, {
                                            "featureType": "poi",
                                            "stylers": [{
                                                "saturation": -100
                                            }, {
                                                "lightness": 51
                                            }, {
                                                "visibility": "simplified"
                                            }]
                                        }, {
                                            "featureType": "road.highway",
                                            "stylers": [{
                                                "saturation": -100
                                            }, {
                                                "visibility": "simplified"
                                            }]
                                        }, {
                                            "featureType": "road.arterial",
                                            "stylers": [{
                                                "saturation": -100
                                            }, {
                                                "lightness": 30
                                            }, {
                                                "visibility": "on"
                                            }]
                                        }, {
                                            "featureType": "road.local",
                                            "stylers": [{
                                                "saturation": -100
                                            }, {
                                                "lightness": 40
                                            }, {
                                                "visibility": "on"
                                            }]
                                        }, {
                                            "featureType": "transit",
                                            "stylers": [{
                                                "saturation": -100
                                            }, {
                                                "visibility": "simplified"
                                            }]
                                        }, {
                                            "featureType": "administrative.province",
                                            "stylers": [{
                                                "visibility": "off"
                                            }]
                                        }, {
                                            "featureType": "water",
                                            "elementType": "labels",
                                            "stylers": [{
                                                "visibility": "on"
                                            }, {
                                                "lightness": -25
                                            }, {
                                                "saturation": -100
                                            }]
                                        }, {
                                            "featureType": "water",
                                            "elementType": "geometry",
                                            "stylers": [{
                                                "hue": "#ffff00"
                                            }, {
                                                "lightness": -25
                                            }, {
                                                "saturation": -97
                                            }]
                                        }]};
var theMap = new google.maps.Map(document.getElementById("map"), myMapOptions);
}
//google.maps.event.addDomListener(window, 'load', initialize);
document.addEventListener('DOMContentLoaded', 