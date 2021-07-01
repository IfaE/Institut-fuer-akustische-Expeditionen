mapboxgl.accessToken = 'pk.eyJ1IjoiYW1zaG8iLCJhIjoiY2tsa25qNjRxMDI3NjJvbGx4em91c3IwciJ9.kJ9kiOvgJsnclpM5apI6tQ';
var map = new mapboxgl.Map({
container: 'map', // container id
style: 'mapbox://styles/amsho/ckq5pzuq40ygr17n2f1kraf3a', // style URL
center: [12.360103,51.340199],
pitch: 30,
zoom: 10,
bearing: 0,
});

map.loadImage('icons/Icon-13.png', function(error, image) {
  if (error) throw error;
  map.addImage('thisicon', image);
});

map.on('load', function () {
  map.addSource('places', {
  // This GeoJSON contains features that include an "icon"
  // property. The value of the "icon" property corresponds
  // to an image in the Mapbox Streets style's sprite.
  'type': 'geojson',
  'data': {
  'type': 'FeatureCollection',
  'features': [
      
{
  'type': 'Feature',
  'properties': {
  'description':
  '<div class="popup-heaeder"> <strong>Der Rundling</strong> </div>',
  'icon': 'music-15',
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
        'audio': '<source src="sound/Güterbahnhof (Nordost).mp3"',
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
  
  {
        'type': 'Feature',
        'properties': {
             'audio': '<source src="sound/hafen.mp3',
        'description':
        '<div class="popup-heaeder"><p> <strong>Lindenauer Hafen</strong></div></p> <audio controls> <source src="sound/hafen.mp3" type="audio/mp3" style="width:100% px;height:100%;" /></p>',
        'icon': 'marker'
        },
        'geometry': {
        'type': 'Point',
        'coordinates': [12.296466, 51.336576]
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
    'icon-image': '{icon}',
    'icon-allow-overlap': true
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
   
  new mapboxgl.Popup()
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



const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("nav .container1 ul li, nav .container2 ul li, nav .container3 ul li, nav .container4 ul li");
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });
});

// AUDIO PLAYER
document.addEventListener('DOMContentLoaded', () => {
  const player = new Plyr('audio', {});
  const players = Array.from(document.querySelectorAll('audio')).map(p => new Plyr(p));
});

