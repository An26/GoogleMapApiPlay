
$(document).ready(function() {
    console.log("im ready!");

     var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), 
          {
            center: {lat: 30.307182, lng: -97.755996},
            zoom: 5
          });
      }



})


function initMap() {
    var uluru = {lat: 30.307182, lng: -97.755996};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: uluru
    });

    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}

