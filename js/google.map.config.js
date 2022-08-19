(function($){
  $(document).ready(function(){

    // Google Maps
    //-----------------------------------------------
    if ($("#map-canvas").length>0) {
      var map, myLatlng, myZoom, marker_1,market_2;
      // Set the coordinates of your location
      myLatlng_1 = new google.maps.LatLng(-31.412762, -64.186288);
      myLatlng_2 = new google.maps.LatLng(-31.412279, -64.187615);
      myZoom = 17;
      function initialize() {
        var mapOptions = {
          zoom: myZoom,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          center: myLatlng_1,
          scrollwheel: false
        };

        map = new google.maps.Map(document.getElementById("map-canvas"),mapOptions);
        marker_1 = new google.maps.Marker({
          map:map,
          draggable:true,
          animation: google.maps.Animation.DROP,
          position: myLatlng_1
        });
        marker_2 = new google.maps.Marker({
          map:map,
          draggable:true,
          animation: google.maps.Animation.DROP,
          position: myLatlng_2
        });
        var infowindow_marker_1 = new google.maps.InfoWindow({ content: 'Av. Colon 259 - Local 50 - Galeria Planeta' });
        google.maps.event.addListener(marker_1, 'click', function() {  
                    infowindow_marker_1.open(map, marker_1);
                });
        var infowindow_marker_2 = new google.maps.InfoWindow({ content: 'Optica Colon - Av. Colon 338' });
        google.maps.event.addListener(marker_2, 'click', function() {  
                    infowindow_marker_2.open(map, marker_2);
                });
         
        google.maps.event.addDomListener(window, "resize", function() {
          map.setCenter(myLatlng_1);

        });
      }
      google.maps.event.addDomListener(window, "load", initialize);
    }
  }); // End document ready

})(this.jQuery);    