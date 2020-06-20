function initMap() {

  if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else {
      var status = document.getElementById("demo");
      status.innerHTML = "Geolocation is not supported by this browser.";
  }
  //console.log(lat. lng);
}

function showPosition(position) {
  var pos = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
  };


  var geocoder = new google.maps.Geocoder;
 geocodeLatLng(geocoder); // IMPORTANT: add map and infoWindow

 function geocodeLatLng(geocoder, map, infowindow) {
   var latlng = { lat: pos.lat, lng: pos.lng };
      console.log(pos.lat, pos.lng);
     geocoder.geocode({ 'location': latlng }, function (results, status) {
         if (status){
           if (results[0]) {
                  
                  var status = document.getElementById("demo");
                  status.innerHTML = "Your location is: " + results[0].formatted_address;

             } else {
                 window.alert('No results found');
             }
          } else {
            window.alert('Geocoder failed due to: ' + status);
         }
     });
  };
}




// show our errors for debuging
function showError(error) {
  var x = document.getElementById("demo");
  switch (error.code) {
      case error.PERMISSION_DENIED:
          x.innerHTML = "Denied the request for Geolocation. Maybe, ask the user in a more polite way :(?"
          break;
      case error.POSITION_UNAVAILABLE:
          x.innerHTML = "Location information is unavailable.";
          break;
      case error.TIMEOUT:
          x.innerHTML = "The request to get location timed out.";
          break;
      case error.UNKNOWN_ERROR:
          x.innerHTML = "An unknown error occurred :(";
          break;
  }
}