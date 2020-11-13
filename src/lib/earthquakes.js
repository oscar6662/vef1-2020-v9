/**
 * Sækja gögn frá
 * https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php
 * 
 * sér í lagi, alla jarðskjálfta 4,5+ seinustu 7 daga:
 * https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson
 * 
 * Ath, í verkefni er afrit af gögnum í `./4.5_week.geojson`, gott
 * að nota það á meðan þróun stendur en skipta svo út.
 fetchEarthquakes();
 async function fetchEarthquakes() {
	let res = await fetch(url);
	let json = await res.json();
	return json;
}
 */

const url = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson';
// const URL = './4.5_week.geojson';



mapboxgl.accessToken = 'pk.eyJ1Ijoic29yZmxleCIsImEiOiJjaW9rY3BpaHQwMDBjdmtqYm9kYTNoNWl1In0.Dwv1ZDYU4uDwPuVa62zcKA';
var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/mapbox/streets-v8', //stylesheet location
    center: [0, 0], // starting position
    zoom: 2 // starting zoom
});

map.on('style.load', function() {
   map.addSource("quakes", {
       "type": "geojson",
       "data": url
   });

   // Once you have a datasource defined, you need to add a layer from that data source to the map.
   // We could, for example, add only earthquakes magnitude 4.0+. Here we just tell it
   // to take all of the data and style it as a circle.
   map.addLayer({
	   alert(
     "id": "quakes", // An id for this layer
     "type": "circle", // As a point layer, we need style a symbol for each point.
     "source": "quakes", // The source layer we defined above
     "paint": {
         "circle-radius": 10,
         "circle-color": "#ff0000",
	 "circle-opacity": {
	     "stops": [[3, 0.2], [15, 0.8]]
          }
     }
   });
});