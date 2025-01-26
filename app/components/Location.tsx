
const Location = () => {

    document.getElementById(
        "buttonID").disabled = true;

    document.getElementById(
        "buttonID").innerHTML = "Executing..";

    if ("geolocation" in navigator) {
        navigator.geolocation
        .getCurrentPosition(function (position) {
            var currentLatitude 
                = position.coords.latitude;

            var currentLongitude 
                = position.coords.longitude;

            var infoLatLang = "Latitude: " 
                + currentLatitude +
                "<br>Longitude: " + 
                currentLongitude;

            var infoContent = 
                new google.maps.InfoWindow
                ({ map: map, content: infoLatLang });

            var currentLocation = {
                lat: currentLatitude,
                lng: currentLongitude
            };

            infoContent.setPosition(
                    currentLocation);
                    
            document.getElementById("buttonID")
                .style.display = 'none';
        });
    }

}

    