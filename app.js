// THE MAP
mapboxgl.accessToken = 'pk.eyJ1IjoiYW1zaG8iLCJhIjoiY2tsa25qNjRxMDI3NjJvbGx4em91c3IwciJ9.kJ9kiOvgJsnclpM5apI6tQ';  // replace this with your access token
    var map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/amsho/ckli3tbdr16j917ln2ymn06oj', // replace this with your style URL
      center: [12.360103,51.340199],
        pitch: 0,
      zoom: 10
    });
  
map.loadImage('icons/Icon-13.png', function(error, image) {
    if (error) throw error;
    map.addImage('thisicon', image);
});

map.on('load', function () {
      
      
map.addSource('places', {
'type': 'geojson',
'data': {
'type': 'FeatureCollection',
    
    
'features': [
    
{
'type': 'Feature',
'properties': {
'description':
'<strong>Westbahnhof >>>TONINTON<<</strong></div><p><audio id="player" controls> <source src="sound/TonInTon.mp3"> </audio></div></p> ',
'icon': 'marker',
},

'geometry': {
'type': 'Point',
'coordinates': [12.322978, 51.325552]
}
}, 
{
'type': 'Feature',
'properties': {
'description':
'<div class="popup-heaeder"> <strong>Der Rundling</strong> </div>',
'icon': 'music',
},
     
 
'geometry': {
'type': 'Point',
'coordinates': [12.392377, 51.296164]
}
}, 
{
'type': 'Feature',
'properties': {
      'audio': '<source src="Kelterei Bunge.mp3"',
'description':
'<div class="popup-heaeder"> <strong>Kelterei Bunge</strong></div><p><audio controls> <source src="Kelterei Bunge.mp3" type="audio/mp3" style="width:300 px;height:150px;" /></p>',
'icon': 'music',
},
    
'geometry': {
'type': 'Point',
'coordinates': [12.453678, 51.308585]
}
},    
{
'type': 'Feature',
'properties': {
'description':
'<div class="popup-heaeder"> <strong>Östliche Rietzschke</strong> </div> <p><audio controls> <source src="sound/Rietzschke (Ost).mp3" type="audio/mp3" style="width:300 px;height:150px;" /></p>', 
'icon': 'music',
},
    
'geometry': {
'type': 'Point',
'coordinates': [12.453152,
      51.331208]
}
},
{
'type': 'Feature',
'properties': {
'description':
'<div class="popup-heaeder"> <strong>Elisabeth-Schumacher-Straße</strong></div> <p><audio controls> <source src="sound/Güterbahnhof (Nordost).mp3" type="audio/mp3" style="width:400 px;height:150px;" /></p>',
'icon': 'music'
},
'geometry': {
'type': 'Point',
'coordinates': [12.439581,
      51.354749]
}
},
{
'type': 'Point',
'properties': {
'description':
'<div class="popup-heaeder"> <strong>An der Parthe</strong></div><p> <audio controls> <source src="sound/Parthe (Nord).mp3" type="audio/mp3" style="width:100% px;height:100%;" /></p>',
'icon': 'marker'
},
'geometry': {
'type': 'Point',
'coordinates': [12.423516, 51.379928]
}
},
{
'type': 'Feature',
'properties': {
    'audio': '<source src="sound/Wahren (Nordwest).mp3"',
'description':
'<div class="popup-heaeder"><p> <strong>Bahnbetriebsgelände Wahren</strong></div><audio controls> <source src="sound/Wahren (Nordwest).mp3" type="audio/mp3" style="width:100% px;height:100%;" /></p>',
'icon': 'marker'
},
'geometry': {
'type': 'Point',
'coordinates': [12.304385,
      51.388867]
}
},
{
      'type': 'Feature',
      'properties': {
          'audio': '<source src="sound/palmenwehr_02.mp3',
      'description':
      '<div class="popup-heaeder"><p> <strong>Palmengartenwehr</strong></div></p> <audio controls> <source src="sound/palmenwehr_02.mp3" type="audio/mp3" style="width:100% px;height:100%;" /></p>',
      'icon': 'marker'
      },
      'geometry': {
      'type': 'Point',
      'coordinates': [12.349679, 51.334996]
      }
      },
]
}
});

// Add a layer showing the places.
map.addLayer({
'id': 'places',
'type': 'symbol',
'source': 'places',
'layout': {
'icon-image': 'thisicon',
'icon-allow-overlap': true,
'icon-size': 0.05
}
});
 
// When a click event occurs on a feature in the places layer, open a popup at the
// location of the feature, with description HTML from its properties.
map.on('click', 'places', function (e) {
var coordinates = e.features[0].geometry.coordinates.slice();
var description = e.features[0].properties.description;
 
// Ensure that if the map is zoomed out such that multiple
// copies of the feature are visible, the popup appears
// over the copy being pointed to.
while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
}
 
var popup = new mapboxgl.Popup()
.setLngLat(coordinates)
.setHTML(description)
.addTo(map);
});
 
    
    
// Change the cursor to a pointer when the mouse is over the places layer.
map.on('mouseenter', 'places', function () {
map.getCanvas().style.cursor = 'pointer';
});
 
// Change it back to a pointer when it leaves.
map.on('mouseleave', 'places', function () {
map.getCanvas().style.cursor = '';
});
});

var chapters = {
  'start': {
bearing: 0,
center: [12.360103,51.340199],
zoom: 10,
pitch: 0
},   

'westbahnhof': {
bearing: 0,
center: [12.322978, 51.325552],
zoom: 14,
pitch: 0
},   

'rundling': {
bearing: 0,
center: [12.393577, 51.296324],
zoom: 16,
pitch: 0
},   
            'bunge': {
bearing: 0,
center: [12.453678, 51.308585],
zoom: 13,
pitch: 0
},          
'rietzschke': {
bearing: 27,
center: [12.453152,
      51.331208],
zoom: 14,
pitch: 20
},
'elisabeth': {
center: [12.439581,
      51.354749],
bearing: 50,
zoom: 13.6,
pitch: 0
},
'parthe': {
bearing: 25,
center: [12.423516, 51.379928],
zoom: 14,
speed: 0.6,
pitch: 40
},
'wahren': {
bearing: -20,
center: [12.304385,
      51.388867],
zoom: 13,
pitch: 20
},
'wehr': {
      bearing: -20,
      center: [12.349679, 51.334996],
      zoom: 13,
      pitch: 20
      },


                        'about': {
bearing: 0,
center: [12.360103,51.340199],
zoom: 10,
                            pitch: 50
},
'kontakt': {
      bearing: 0,
      center: [12.360103,51.340199],
      zoom: 7,
                                  pitch: 50
      },

};

// On every scroll event, check which element is on screen
window.onscroll = function () {
var chapterNames = Object.keys(chapters);
for (var i = 0; i < chapterNames.length; i++) {
var chapterName = chapterNames[i];
if (isElementOnScreen(chapterName)) {
setActiveChapter(chapterName);
break;
}
}
};
 
var activeChapterName = 'start';
function setActiveChapter(chapterName) {
if (chapterName === activeChapterName) return;
 
map.flyTo(chapters[chapterName]);
 
document.getElementById(chapterName).setAttribute('class', 'active');
document.getElementById(activeChapterName).setAttribute('class', '');
 
activeChapterName = chapterName;
}
 
function isElementOnScreen(id) {
var element = document.getElementById(id);
var bounds = element.getBoundingClientRect();
return bounds.top < window.innerHeight && bounds.bottom > 0;
}

// AUDIO PLAYER
document.addEventListener('DOMContentLoaded', () => {
          const player = new Plyr('audio', {});
      });

