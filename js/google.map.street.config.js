(function($){
	$(document).ready(function(){

		// Google Maps
		//-----------------------------------------------
		if ($("#map-canvas").length>0) {
			var map, myLatlng, myZoom, marker,myPano;
			// Set the coordinates of your location
			myLatlng = new google.maps.LatLng(-31.412762, -64.186288);
			myZoom = 15;
			
			function initialize() {
				var mapOptions = {
					zoom: myZoom,
					center: myLatlng
				};
				map = new google.maps.Map(document.getElementById("map-canvas"),mapOptions);
				/*marker = new google.maps.Marker({
					map:map,
					draggable:true,
					animation: google.maps.Animation.DROP,
					position: myLatlng
				});
				google.maps.event.addDomListener(window, "resize", function() {
					map.setCenter(myLatlng);
				});*/
				//alert("d");
                 var panoramaOptions = {
                      position: myLatlng,
                      pov: {
                      heading: 34,
                      pitch: 10
                      }
                };

				
				 panorama = new google.maps.StreetViewPanorama(
                        document.getElementById('map-street'),
                        panoramaOptions);
                        panorama.setVisible(true);
           
			    var panorama = new google.maps.StreetViewPanorama(document.getElementById('map-street'), panoramaOptions);
                    map.setStreetView(panorama);

			
		     }
		     google.maps.event.addDomListener(window, "load", initialize);
		}
	}); // End document ready

})(this.jQuery);		