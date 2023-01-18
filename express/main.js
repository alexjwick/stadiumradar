var map = L.map('map', {
    center: [39.0997, -94.5786],
    zoom: 5
});

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

fetch('./data/stadiums.json')
    .then((response) => response.json())
    .then((data) => addToMap(data.stadiums));

function addToMap(stadiumData) {
    for (var i = 0; i < stadiumData.length; i++) {
        stadium = stadiumData[i];
        name = stadium.name;
        city = stadium.city;
        latitude = stadium.latitude;
        longitude = stadium.longitude;
        if (latitude == 0 && longitude == 0) {
            break;
        }
        console.log(`Adding ${name} at coordinates ${latitude}, ${longitude} in ${city}`);
        var marker = L.marker([latitude, longitude]).addTo(map);
    }
}