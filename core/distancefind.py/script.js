let map;
let wellingtonLatLong = {lat: -41.2528753, lng: 174.6141737};

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: wellingtonLatLong,
    zoom: 8,
  });
}

initMap();