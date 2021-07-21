mapboxgl.accessToken = 'pk.eyJ1IjoiYW1zaG8iLCJhIjoiY2tsa25qNjRxMDI3NjJvbGx4em91c3IwciJ9.kJ9kiOvgJsnclpM5apI6tQ';

 
var map = new mapboxgl.Map({
container: 'map', // container id
style: 'mapbox://styles/amsho/ckq5pzuq40ygr17n2f1kraf3a', // style URL
center: [12.360103,51.340199],
pitch: 50,
zoom: 11,
bearing: 0,
});


const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("nav .container1 ul li");
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

