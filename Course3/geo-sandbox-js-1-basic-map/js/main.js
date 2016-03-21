document.addEventListener('DOMContentLoaded', function(){
	
	//map (leaflet : http://leafletjs.com/examples/quick-start.html)
	
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        map.innerHTML = "Geolocation is not supported by this browser.";
    }
    function showPosition(position) {
        var map = L.map('myMap');
        var current_map_bounds;


        map.setView([position.coords.latitude,position.coords.longitude], 3);

        //map pattern (WTMS). mapbox, ign, osm, ... 
        //var mapPatternUrl = "http://tile.stamen.com/toner/{z}/{x}/{y}.png";
        //var mapPatternUrl = "http://tile.stamen.com/watercolor/{z}/{x}/{y}.jpg";

        var mapPatternUrl = 'http://tile.openstreetmap.org/{z}/{x}/{y}.png';
        var tileLayer = L.tileLayer(mapPatternUrl);
        tileLayer.addTo(map);

        //marker
        var marker = L.marker([position.coords.latitude,position.coords.longitude]);
        marker.bindPopup("The marker.");
        marker.addTo(map);

        //shape circle
        var circle = L.circle([position.coords.latitude,position.coords.longitude], 500000);

        circle.bindPopup("The circle.");
        circle.addTo(map);

        //shape polygon
        var polygon = L.polygon([
            [position.coords.latitude-1, position.coords.longitude-1],
            [position.coords.latitude +1, position.coords.longitude-1],
            [position.coords.latitude +1, position.coords.longitude+1],
            [position.coords.latitude-1, position.coords.longitude+1],
        ]);
        polygon.bindPopup("The polygon.");
        polygon.addTo(map);

        /*
        function onMapClick(e) {
            marker.setLatLng(e.latlng);
        }
        map.on('click', onMapClick);
        */

    }
    

});