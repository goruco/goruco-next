var map = L.mapbox.map('map').setView([40.740104,-73.99262], 14);
var stamenLayer = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}.png', {
  attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://creativecommons.org/licenses/by-sa/3.0">CC BY SA</a>.'
}).addTo(map);

var geoJson = {
    type: 'FeatureCollection',
    features: [{
        type: 'Feature',
        properties: {
            title: 'After Party',
            description: 'Pier 40 at 353 West Street',
            'marker-size': 'large',
            'marker-color': 'ba262b'
        },
        geometry: {
            type: 'Point',
            coordinates: [-74.011300, 40.730438]
        }
    },
    {
        type: 'Feature',
        properties: {
            title: 'Conference',
            description: 'Altman Building',
            'marker-size': 'large',
            'marker-color': 'ba262b'
        },
        geometry: {
            type: 'Point',
            coordinates: [-73.996154, 40.740539]
        }
    }]
};

map.markerLayer.setGeoJSON(geoJson);
map.markerLayer.eachLayer(function(m) {
  m.openPopup();
});

