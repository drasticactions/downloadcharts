// US map
var map = L.map('map-us', {
    center: [20.0, 5.0],
    minZoom: 2,
    zoom: 2
});

L.tileLayer( 'http://{s}.mqcdn.com/tiles/1.0.0/map/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright" title="OpenStreetMap" target="_blank">OpenStreetMap</a> contributors | Tiles Courtesy of <a href="http://www.mapquest.com/" title="MapQuest" target="_blank">MapQuest</a> <img src="http://developer.mapquest.com/content/osm/mq_logo.png" width="16" height="16">',
    subdomains: ['otile1','otile2','otile3','otile4']
}).addTo( map );

var myURL = jQuery( 'script[src$="leaf.js"]' ).attr( 'src' ).replace( 'leaf.js', '' );

var myIcon = L.icon({
    iconUrl: myURL + 'images/pin24.png',
    iconRetinaUrl: myURL + 'images/pin48.png',
    iconSize: [29, 24],
    iconAnchor: [9, 21],
    popupAnchor: [0, -14]
});
var markers = L.markerClusterGroup();

for (var i = 0; i < output_us.length; ++i) {
    markers.addLayer(L.marker([output_us[i].latitude, output_us[i].longitude], { icon: myIcon, title: output_us[i].ip })
        );
}
map.addLayer(markers);

// China map
var map_china = L.map('map-china', {
    center: [20.0, 5.0],
    minZoom: 2,
    zoom: 2
});

L.tileLayer('http://{s}.mqcdn.com/tiles/1.0.0/map/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright" title="OpenStreetMap" target="_blank">OpenStreetMap</a> contributors | Tiles Courtesy of <a href="http://www.mapquest.com/" title="MapQuest" target="_blank">MapQuest</a> <img src="http://developer.mapquest.com/content/osm/mq_logo.png" width="16" height="16">',
    subdomains: ['otile1', 'otile2', 'otile3', 'otile4']
}).addTo(map_china);

var myURL = jQuery('script[src$="leaf.js"]').attr('src').replace('leaf.js', '');

var myIcon = L.icon({
    iconUrl: myURL + 'images/pin24.png',
    iconRetinaUrl: myURL + 'images/pin48.png',
    iconSize: [29, 24],
    iconAnchor: [9, 21],
    popupAnchor: [0, -14]
});
var markers = L.markerClusterGroup();

for (var i = 0; i < output_cn.length; ++i) {
    markers.addLayer(L.marker([output_cn[i].latitude, output_cn[i].longitude], { icon: myIcon, title: output_cn[i].ip })
        );
}
map_china.addLayer(markers);