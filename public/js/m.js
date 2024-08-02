
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the map
    const map = L.map('map').setView([32.664108, -9.006899], 10);

    // Add the tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Create a custom icon
    const customIcon = L.icon({
        iconUrl: '../../images/map_marker.png', // Remplacez par le chemin de votre logo
        iconSize: [20, 20], // Taille de l'icône
        iconAnchor: [16, 32], // Anchor icon to marker position
    });

    // Create a marker cluster group
    const markers = L.markerClusterGroup();

    // Your data points
    const data = [
        {"ID": 1, "Coordonnées GPS : X, Y": [32.664108, -9.006899], "pH": 6.8, "Matière organique (MO%)": 4.6, "Phosphore (P2O5) en ppm": 41.1, "Potassium (K2O) en ppm": 276.3},
        {"ID": 2, "Coordonnées GPS : X, Y": [32.664623, -9.036011], "pH": 6.7, "Matière organique (MO%)": 4.3, "Phosphore (P2O5) en ppm": 34.7, "Potassium (K2O) en ppm": 280.6},
        {
            "ID": 3,
            "Province": "Safi",
            "Coordonnées GPS : X, Y": [32.664839, -9.068059],
            "pH": 7.5,
            "Matière organique (MO%)": 1.6,
            "Phosphore (P2O5) en ppm": 25.2,
            "Potassium (K2O) en ppm": 346.9
           },
           {
            "ID": 4,
            "Province": "Safi",
            "Coordonnées GPS : X, Y": [32.663747, -9.092700],
            "pH": 8.9,
            "Matière organique (MO%)": 3.6,
            "Phosphore (P2O5) en ppm": 50.9,
            "Potassium (K2O) en ppm": 343.4
           },
           {
            "ID": 5,
            "Province": "Safi",
            "Coordonnées GPS : X, Y": [32.640814, -9.114624],
            "pH": 7.7,
            "Matière organique (MO%)": 4.9,
            "Phosphore (P2O5) en ppm": 16.2,
            "Potassium (K2O) en ppm": 316.4
           },
           {
            "ID": 6,
            "Province": "Safi",
            "Coordonnées GPS : X, Y": [32.605119, -9.070100],
            "pH": 6.3,
            "Matière organique (MO%)": 4.2,
            "Phosphore (P2O5) en ppm": 28.4,
            "Potassium (K2O) en ppm": 246.2
           },
           {
            "ID": 7,
            "Province": "Safi",
            "Coordonnées GPS : X, Y": [32.560375, -9.035415],
            "pH": 6.2,
            "Matière organique (MO%)": 1.9,
            "Phosphore (P2O5) en ppm": 34.9,
            "Potassium (K2O) en ppm": 237.7
           },
           {
            "ID": 8,
            "Province": "Safi",
            "Coordonnées GPS : X, Y": [32.560375, -9.035415],
            "pH": 7.5,
            "Matière organique (MO%)": 3.6,
            "Phosphore (P2O5) en ppm": 30.1,
            "Potassium (K2O) en ppm": 323.5
           },
           {
            "ID": 9,
            "Province": "Safi",
            "Coordonnées GPS : X, Y": [32.513061, -8.964457],
            "pH": 6.8,
            "Matière organique (MO%)": 1.7,
            "Phosphore (P2O5) en ppm": 22.1,
            "Potassium (K2O) en ppm": 336.6
           },
           {
            "ID": 10,
            "Province": "Safi",
            "Coordonnées GPS : X, Y": [32.459672, -8.885814],
            "pH": 8.7,
            "Matière organique (MO%)": 3.9,
            "Phosphore (P2O5) en ppm": 46.2,
            "Potassium (K2O) en ppm": 319.9
           },
           {
            "ID": 11,
            "Province": "Safi",
            "Coordonnées GPS : X, Y": [32.420656, -8.813444],
            "pH": 7.8,
            "Matière organique (MO%)": 4.2,
            "Phosphore (P2O5) en ppm": 36.8,
            "Potassium (K2O) en ppm": 333.5
           },
           {
            "ID": 12,
            "Province": "Safi",
            "Coordonnées GPS : X, Y": [32.401696, -8.746130],
            "pH": 7.1,
            "Matière organique (MO%)": 4.1,
            "Phosphore (P2O5) en ppm": 19,
            "Potassium (K2O) en ppm": 291.6
           },
           {
            "ID": 13,
            "Province": "Safi",
            "Coordonnées GPS : X, Y": [32.358516, -8.686569],
            "pH": 7,
            "Matière organique (MO%)": 2.3,
            "Phosphore (P2O5) en ppm": 56.9,
            "Potassium (K2O) en ppm": 215.2
           },
           {
            "ID": 14,
            "Province": "Safi",
            "Coordonnées GPS : X, Y": [32.325510, -8.628757],
            "pH": 6.8,
            "Matière organique (MO%)": 3.7,
            "Phosphore (P2O5) en ppm": 31.9,
            "Potassium (K2O) en ppm": 336
           },
           {
            "ID": 15,
            "Province": "Safi",
            "Coordonnées GPS : X, Y": [32.476331, -8.746213],
            "pH": 8.2,
            "Matière organique (MO%)": 1.8,
            "Phosphore (P2O5) en ppm": 26.1,
            "Potassium (K2O) en ppm": 284.2
           },
           {
            "ID": 16,
            "Province": "Safi",
            "Coordonnées GPS : X, Y": [32.446014, -8.694312],
            "pH": 6.4,
            "Matière organique (MO%)": 4.6,
            "Phosphore (P2O5) en ppm": 52.6,
            "Potassium (K2O) en ppm": 274.2
           },
           {
            "ID": 17,
            "Province": "Safi",
            "Coordonnées GPS : X, Y": [32.412752, -8.645407],
            "pH": 6.9,
            "Matière organique (MO%)": 3.1,
            "Phosphore (P2O5) en ppm": 20.6,
            "Potassium (K2O) en ppm": 194.5
           },
           {
            "ID": 18,
            "Province": "Safi",
            "Coordonnées GPS : X, Y": [32.495717, -8.669867],
            "pH": 6.8,
            "Matière organique (MO%)": 4.7,
            "Phosphore (P2O5) en ppm": 17.7,
            "Potassium (K2O) en ppm": 280.1
           },
           {
            "ID": 19,
            "Province": "Safi",
            "Coordonnées GPS : X, Y": [32.561435, -9.187555],
            "pH": 8.5,
            "Matière organique (MO%)": 1.1,
            "Phosphore (P2O5) en ppm": 37.6,
            "Potassium (K2O) en ppm": 216
           },
           {
            "ID": 20,
            "Province": "Safi",
            "Coordonnées GPS : X, Y": [32.562771, -9.195556],
            "pH": 7.4,
            "Matière organique (MO%)": 3.9,
            "Phosphore (P2O5) en ppm": 15,
            "Potassium (K2O) en ppm": 324.9
           },
           {
            "ID": 21,
            "Province": "Safi",
            "Coordonnées GPS : X, Y": [32.543909, -9.151411],
            "pH": 7.6,
            "Matière organique (MO%)": 2.7,
            "Phosphore (P2O5) en ppm": 41.5,
            "Potassium (K2O) en ppm": 227.5
           },
           {
            "ID": 22,
            "Province": "Safi",
            "Coordonnées GPS : X, Y": [32.525330, -9.132522],
            "pH": 7.9,
            "Matière organique (MO%)": 2.9,
            "Phosphore (P2O5) en ppm": 37.3,
            "Potassium (K2O) en ppm": 233.5
           },
           {
            "ID": 23,
            "Province": "Safi",
            "Coordonnées GPS : X, Y": [32.503560, -9.084668],
            "pH": 7.6,
            "Matière organique (MO%)": 1,
            "Phosphore (P2O5) en ppm": 32.7,
            "Potassium (K2O) en ppm": 342.8
           },
           {
            "ID": 24,
            "Province": "Safi",
            "Coordonnées GPS : X, Y": [32.443003, -9.014146],
            "pH": 7.5,
            "Matière organique (MO%)": 3,
            "Phosphore (P2O5) en ppm": 18.5,
            "Potassium (K2O) en ppm": 225.6
           },
           {
            "ID": 25,
            "Province": "Safi",
            "Coordonnées GPS : X, Y": [32.397292, -8.953699],
            "pH": 7.4,
            "Matière organique (MO%)": 2,
            "Phosphore (P2O5) en ppm": 27.6,
            "Potassium (K2O) en ppm": 320.3
           },
           {
            "ID": 26,
            "Province": "Safi",
            "Coordonnées GPS : X, Y": [32.362196, -8.898289],
            "pH": 7.9,
            "Matière organique (MO%)": 1.4,
            "Phosphore (P2O5) en ppm": 47.8,
            "Potassium (K2O) en ppm": 251.3
           },
           {
            "ID": 27,
            "Province": "Safi",
            "Coordonnées GPS : X, Y": [32.332407, -8.849176],
            "pH": 6.8,
            "Matière organique (MO%)": 2,
            "Phosphore (P2O5) en ppm": 57.5,
            "Potassium (K2O) en ppm": 318.4
           },
           {
            "ID": 28,
            "Province": "Safi",
            "Coordonnées GPS : X, Y": [32.301544, -8.773617],
            "pH": 7.6,
            "Matière organique (MO%)": 1.7,
            "Phosphore (P2O5) en ppm": 49.2,
            "Potassium (K2O) en ppm": 287.5
           },
           {
            "ID": 29,
            "Province": "Safi",
            "Coordonnées GPS : X, Y": [32.272800, -8.710652],
            "pH": 7.3,
            "Matière organique (MO%)": 3.7,
            "Phosphore (P2O5) en ppm": 50.8,
            "Potassium (K2O) en ppm": 182
           },
           {
            "ID": 30,
            "Province": "Safi",
            "Coordonnées GPS : X, Y": [32.210214, -8.837672],
            "pH": 8.5,
            "Matière organique (MO%)": 4.2,
            "Phosphore (P2O5) en ppm": 19.9,
            "Potassium (K2O) en ppm": 249.8
           },
           {
            "ID": 31,
            "Province": "Safi",
            "Coordonnées GPS : X, Y": [32.251187, -8.904650],
            "pH": 7.8,
            "Matière organique (MO%)": 4.5,
            "Phosphore (P2O5) en ppm": 34.5,
            "Potassium (K2O) en ppm": 272.3
           },
           {
            "ID": 32,
            "Province": "Safi",
            "Coordonnées GPS : X, Y": [32.283350, -8.987457],
            "pH": 8.6,
            "Matière organique (MO%)": 3.2,
            "Phosphore (P2O5) en ppm": 59.7,
            "Potassium (K2O) en ppm": 208.2
           },
           {
            "ID": 33,
            "Province": "Safi",
            "Coordonnées GPS : X, Y": [32.298542, -9.026394],
            "pH": 6.2,
            "Matière organique (MO%)": 3.5,
            "Phosphore (P2O5) en ppm": 18.6,
            "Potassium (K2O) en ppm": 282.1
           },
           {
            "ID": 34,
            "Province": "Safi",
            "Coordonnées GPS : X, Y": [32.317528, -9.059341],
            "pH": 7.7,
            "Matière organique (MO%)": 3.6,
            "Phosphore (P2O5) en ppm": 21.3,
            "Potassium (K2O) en ppm": 199.3
           },
           {
            "ID": 35,
            "Province": "Safi",
            "Coordonnées GPS : X, Y": [32.345367, -9.110259],
            "pH": 7.9,
            "Matière organique (MO%)": 3.4,
            "Phosphore (P2O5) en ppm": 57.3,
            "Potassium (K2O) en ppm": 182.9
           },
           {
            "ID": 36,
            "Province": "Safi",
            "Coordonnées GPS : X, Y": [32.363078, -9.158181],
            "pH": 6.9,
            "Matière organique (MO%)": 3.1,
            "Phosphore (P2O5) en ppm": 20.4,
            "Potassium (K2O) en ppm": 280.8
           },
           {
            "ID": 37,
            "Province": "Safi",
            "Coordonnées GPS : X, Y": [32.384882, -9.223322],
            "pH": 8.7,
            "Matière organique (MO%)": 1.3,
            "Phosphore (P2O5) en ppm": 59.1,
            "Potassium (K2O) en ppm": 290.6
           },
           {
            "ID": 38,
            "Province": "Safi",
            "Coordonnées GPS : X, Y": [32.279350, -9.186599],
            "pH": 8.9,
            "Matière organique (MO%)": 4.2,
            "Phosphore (P2O5) en ppm": 24.2,
            "Potassium (K2O) en ppm": 191
           },
           {
            "ID": 39,
            "Province": "Safi",
            "Coordonnées GPS : X, Y": [32.266100, -9.134280],
            "pH": 7.6,
            "Matière organique (MO%)": 3.7,
            "Phosphore (P2O5) en ppm": 20.1,
            "Potassium (K2O) en ppm": 341.9
           },
           {
            "ID": 40,
            "Province": "Safi",
            "Coordonnées GPS : X, Y": [32.248679, -9.066989],
            "pH": 8.1,
            "Matière organique (MO%)": 3,
            "Phosphore (P2O5) en ppm": 35.4,
            "Potassium (K2O) en ppm": 338.6
           },
           {
            "ID": 41,
            "Province": "Safi",
            "Coordonnées GPS : X, Y": [32.238226, -9.012057],
            "pH": 7.4,
            "Matière organique (MO%)": 3.6,
            "Phosphore (P2O5) en ppm": 36.1,
            "Potassium (K2O) en ppm": 264.1
           },
           {
            "ID": 42,
            "Province": "Safi",
            "Coordonnées GPS : X, Y": [32.217315, -8.966739],
            "pH": 7.3,
            "Matière organique (MO%)": 1.4,
            "Phosphore (P2O5) en ppm": 31.7,
            "Potassium (K2O) en ppm": 320.4
           },
           {
            "ID": 43,
            "Province": "Safi",
            "Coordonnées GPS : X, Y": [32.181291, -8.931033],
            "pH": 7.2,
            "Matière organique (MO%)": 2.6,
            "Phosphore (P2O5) en ppm": 31.2,
            "Potassium (K2O) en ppm": 221.6
           },
           {
            "ID": 44,
            "Province": "Safi",
            "Coordonnées GPS : X, Y": [32.143744, -8.862231],
            "pH": 8.6,
            "Matière organique (MO%)": 2.7,
            "Phosphore (P2O5) en ppm": 31.5,
            "Potassium (K2O) en ppm": 200.7
           },
           {
            "ID": 45,
            "Province": "Safi",
            "Coordonnées GPS : X, Y": [32.120874, -8.886932],
            "pH": 6.5,
            "Matière organique (MO%)": 1.8,
            "Phosphore (P2O5) en ppm": 30.3,
            "Potassium (K2O) en ppm": 190.5
           },
           {
            "ID": 46,
            "Province": "Safi",
            "Coordonnées GPS : X, Y": [32.123641, -8.926127],
            "pH": 7.6,
            "Matière organique (MO%)": 1.6,
            "Phosphore (P2O5) en ppm": 17.6,
            "Potassium (K2O) en ppm": 309.1
           },
           {
            "ID": 47,
            "Province": "Safi",
            "Coordonnées GPS : X, Y": [32.130556, -8.983286],
            "pH": 8.8,
            "Matière organique (MO%)": 2.3,
            "Phosphore (P2O5) en ppm": 49,
            "Potassium (K2O) en ppm": 307.5
           },
           {
            "ID": 48,
            "Province": "Safi",
            "Coordonnées GPS : X, Y": [32.138853, -9.030647],
            "pH": 7.1,
            "Matière organique (MO%)": 4.5,
            "Phosphore (P2O5) en ppm": 55.3,
            "Potassium (K2O) en ppm": 306.7
           },
           {
            "ID": 49,
            "Province": "Safi",
            "Coordonnées GPS : X, Y": [32.119851, -9.113073],
            "pH": 6,
            "Matière organique (MO%)": 3.3,
            "Phosphore (P2O5) en ppm": 60.5,
            "Potassium (K2O) en ppm": 332.8
           },
           {
            "ID": 50,
            "Province": "Safi",
            "Coordonnées GPS : X, Y": [32.126421, -9.143694],
            "pH": 8.5,
            "Matière organique (MO%)": 3.7,
            "Phosphore (P2O5) en ppm": 26.7,
            "Potassium (K2O) en ppm": 203.9
           },
           {
            "ID": 51,
            "Province": "Safi",
            "Coordonnées GPS : X, Y": [32.135756, -9.193504],
            "pH": 8,
            "Matière organique (MO%)": 2.4,
            "Phosphore (P2O5) en ppm": 38.1,
            "Potassium (K2O) en ppm": 316.3
           },
           {
            "ID": 52,
            "Province": "Safi",
            "Coordonnées GPS : X, Y": [32.140942, -9.220859],
            "pH": 8.3,
            "Matière organique (MO%)": 1.3,
            "Phosphore (P2O5) en ppm": 33.3,
            "Potassium (K2O) en ppm": 221.3
           },
           {
            "ID": 53,
            "Province": "Safi",
            "Coordonnées GPS : X, Y": [32.145090, -9.255971],
            "pH": 6.8,
            "Matière organique (MO%)": 4.3,
            "Phosphore (P2O5) en ppm": 33,
            "Potassium (K2O) en ppm": 328.3
           },
           {
            "ID": 54,
            "Province": "Safi",
            "Coordonnées GPS : X, Y": [32.124346, -9.285238],
            "pH": 6,
            "Matière organique (MO%)": 3.1,
            "Phosphore (P2O5) en ppm": 22.1,
            "Potassium (K2O) en ppm": 340.7
           },
           {
            "ID": 55,
            "Province": "Safi",
            "Coordonnées GPS : X, Y": [32.100831, -9.239510],
            "pH": 8,
            "Matière organique (MO%)": 2.3,
            "Phosphore (P2O5) en ppm": 15.7,
            "Potassium (K2O) en ppm": 309.3
           },
           {
            "ID": 56,
            "Province": "Safi",
            "Coordonnées GPS : X, Y": [32.089763, -9.177451],
            "pH": 8.7,
            "Matière organique (MO%)": 3.8,
            "Phosphore (P2O5) en ppm": 34.9,
            "Potassium (K2O) en ppm": 325.6
           },
           {
            "ID": 57,
            "Province": "Safi",
            "Coordonnées GPS : X, Y": [32.069006, -9.102327],
            "pH": 6.2,
            "Matière organique (MO%)": 3.5,
            "Phosphore (P2O5) en ppm": 28.5,
            "Potassium (K2O) en ppm": 261.2
           },
           {
            "ID": 58,
            "Province": "Safi",
            "Coordonnées GPS : X, Y": [32.053782, -9.063132],
            "pH": 6.6,
            "Matière organique (MO%)": 4.3,
            "Phosphore (P2O5) en ppm": 55.7,
            "Potassium (K2O) en ppm": 269.7
           },
           {
            "ID": 59,
            "Province": "Safi",
            "Coordonnées GPS : X, Y": [32.037170, -9.017405],
            "pH": 8.3,
            "Matière organique (MO%)": 1.3,
            "Phosphore (P2O5) en ppm": 57.8,
            "Potassium (K2O) en ppm": 256.4
           },
           {
            "ID": 60,
            "Province": "Safi",
            "Coordonnées GPS : X, Y": [32.026094, -8.960245],
            "pH": 7.9,
            "Matière organique (MO%)": 4,
            "Phosphore (P2O5) en ppm": 52,
            "Potassium (K2O) en ppm": 336.1
           },
           {
            "ID": 61,
            "Province": "Safi",
            "Coordonnées GPS : X, Y": [32.009478, -8.893287],
            "pH": 8.4,
            "Matière organique (MO%)": 2.5,
            "Phosphore (P2O5) en ppm": 40.9,
            "Potassium (K2O) en ppm": 234.4
           },
           {
            "ID": 62,
            "Province": "Safi",
            "Coordonnées GPS : X, Y": [31.973465, -8.891654],
            "pH": 8.5,
            "Matière organique (MO%)": 2.8,
            "Phosphore (P2O5) en ppm": 59.7,
            "Potassium (K2O) en ppm": 222.7
           },
           {
            "ID": 63,
            "Province": "Safi",
            "Coordonnées GPS : X, Y": [31.976236, -8.935748],
            "pH": 8.7,
            "Matière organique (MO%)": 2.2,
            "Phosphore (P2O5) en ppm": 49.8,
            "Potassium (K2O) en ppm": 350.5
           },
           {
            "ID": 64,
            "Province": "Safi",
            "Coordonnées GPS : X, Y": [31.980392, -8.989642],
            "pH": 7,
            "Matière organique (MO%)": 4.1,
            "Phosphore (P2O5) en ppm": 34.3,
            "Potassium (K2O) en ppm": 201.1
           },
           {
            "ID": 65,
            "Province": "Safi",
            "Coordonnées GPS : X, Y": [31.990088, -9.054967],
            "pH": 7.7,
            "Matière organique (MO%)": 4.2,
            "Phosphore (P2O5) en ppm": 20.2,
            "Potassium (K2O) en ppm": 258.5
           },
           {
            "ID": 66,
            "Province": "Safi",
            "Coordonnées GPS : X, Y": [31.998399, -9.103960],
            "pH": 6.3,
            "Matière organique (MO%)": 4.6,
            "Phosphore (P2O5) en ppm": 30.4,
            "Potassium (K2O) en ppm": 248.9
           },
           {
            "ID": 67,
            "Province": "Safi",
            "Coordonnées GPS : X, Y": [32.009478, -9.154587],
            "pH": 6,
            "Matière organique (MO%)": 4.6,
            "Phosphore (P2O5) en ppm": 37.2,
            "Potassium (K2O) en ppm": 216.1
           },
           {
            "ID": 68,
            "Province": "Safi",
            "Coordonnées GPS : X, Y": [32.006708, -9.193782],
            "pH": 6.5,
            "Matière organique (MO%)": 4.3,
            "Phosphore (P2O5) en ppm": 47.6,
            "Potassium (K2O) en ppm": 325.7
           },
           {
            "ID": 69,
            "Province": "Safi",
            "Coordonnées GPS : X, Y": [32.006708, -9.239510],
            "pH": 7.2,
            "Matière organique (MO%)": 4.5,
            "Phosphore (P2O5) en ppm": 33.7,
            "Potassium (K2O) en ppm": 181.5
           },
           {
            "ID": 70,
            "Province": "Safi",
            "Coordonnées GPS : X, Y": [32.009478, -9.290137],
            "pH": 7.9,
            "Matière organique (MO%)": 2.7,
            "Phosphore (P2O5) en ppm": 19.4,
            "Potassium (K2O) en ppm": 302.5
           },
           {
            "ID": 71,
            "Province": "Safi",
            "Coordonnées GPS : X, Y": [31.914867, -8.951008],
            "pH": 8.2,
            "Matière organique (MO%)": 1.6,
            "Phosphore (P2O5) en ppm": 24.6,
            "Potassium (K2O) en ppm": 221.4
           },
           {
            "ID": 72,
            "Province": "Safi",
            "Coordonnées GPS : X, Y": [31.925582, -9.017040],
            "pH": 7.3,
            "Matière organique (MO%)": 3.8,
            "Phosphore (P2O5) en ppm": 48.4,
            "Potassium (K2O) en ppm": 342.4
           },
           {
            "ID": 73,
            "Province": "Safi",
            "Coordonnées GPS : X, Y": [31.928878, -9.085986],
            "pH": 7,
            "Matière organique (MO%)": 4.4,
            "Phosphore (P2O5) en ppm": 20.9,
            "Potassium (K2O) en ppm": 188.5
           },
           {
            "ID": 74,
            "Province": "Safi",
            "Coordonnées GPS : X, Y": [31.941240, -9.143278],
            "pH": 6.9,
            "Matière organique (MO%)": 1.8,
            "Phosphore (P2O5) en ppm": 41.4,
            "Potassium (K2O) en ppm": 243.4
           },
           {
            "ID": 75,
            "Province": "Safi",
            "Coordonnées GPS : X, Y": [31.947832, -9.190860],
            "pH": 7,
            "Matière organique (MO%)": 1.7,
            "Phosphore (P2O5) en ppm": 26,
            "Potassium (K2O) en ppm": 288.8
           },
           {
            "ID": 76,
            "Province": "Safi",
            "Coordonnées GPS : X, Y": [31.944536, -9.236500],
            "pH": 8.3,
            "Matière organique (MO%)": 1.6,
            "Phosphore (P2O5) en ppm": 44.1,
            "Potassium (K2O) en ppm": 221.3
           },
           {
            "ID": 77,
            "Province": "Safi",
            "Coordonnées GPS : X, Y": [31.950304, -9.292822],
            "pH": 8.3,
            "Matière organique (MO%)": 2.1,
            "Phosphore (P2O5) en ppm": 18.9,
            "Potassium (K2O) en ppm": 211.1
           },
           {
            "ID": 78,
            "Province": "Safi",
            "Coordonnées GPS : X, Y": [31.952776, -9.348173],
            "pH": 8.5,
            "Matière organique (MO%)": 2.5,
            "Phosphore (P2O5) en ppm": 30.2,
            "Potassium (K2O) en ppm": 182.8
           },
           {
            "ID": 79,
            "Province": "Safi",
            "Coordonnées GPS : X, Y": [31.960191, -9.403523],
            "pH": 8.1,
            "Matière organique (MO%)": 1.9,
            "Phosphore (P2O5) en ppm": 43.9,
            "Potassium (K2O) en ppm": 342.3
           },
           {
            "ID": 80,
            "Province": "Safi",
            "Coordonnées GPS : X, Y": [31.932999, -9.421002],
            "pH": 7.2,
            "Matière organique (MO%)": 1.1,
            "Phosphore (P2O5) en ppm": 53.2,
            "Potassium (K2O) en ppm": 281.2
           },
           {
            "ID": 81,
            "Province": "Safi",
            "Coordonnées GPS : X, Y": [31.917340, -9.373420],
            "pH": 7.5,
            "Matière organique (MO%)": 3.2,
            "Phosphore (P2O5) en ppm": 34.9,
            "Potassium (K2O) en ppm": 217.9
           },
           {
            "ID": 82,
            "Province": "Safi",
            "Coordonnées GPS : X, Y": [31.900853, -9.351086],
            "pH": 6.3,
            "Matière organique (MO%)": 3.2,
            "Phosphore (P2O5) en ppm": 46.9,
            "Potassium (K2O) en ppm": 337
           },
           {
            "ID": 83,
            "Province": "Safi",
            "Coordonnées GPS : X, Y": [31.914043, -9.279227],
            "pH": 6.7,
            "Matière organique (MO%)": 4.6,
            "Phosphore (P2O5) en ppm": 46.8,
            "Potassium (K2O) en ppm": 335
           },
           {
            "ID": 84,
            "Province": "Safi",
            "Coordonnées GPS : X, Y": [31.943712, -9.205426],
            "pH": 8.5,
            "Matière organique (MO%)": 4,
            "Phosphore (P2O5) en ppm": 31,
            "Potassium (K2O) en ppm": 296.9
           },
           {
            "ID": 85,
            "Province": "Safi",
            "Coordonnées GPS : X, Y": [31.940416, -9.171439],
            "pH": 7.9,
            "Matière organique (MO%)": 2.1,
            "Phosphore (P2O5) en ppm": 57.1,
            "Potassium (K2O) en ppm": 297.8
           },
           {
            "ID": 86,
            "Province": "Safi",
            "Coordonnées GPS : X, Y": [31.920637, -9.143278],
            "pH": 6.8,
            "Matière organique (MO%)": 1.7,
            "Phosphore (P2O5) en ppm": 55.5,
            "Potassium (K2O) en ppm": 257.2
           },
           {
            "ID": 87,
            "Province": "Safi",
            "Coordonnées GPS : X, Y": [31.907448, -9.112204],
            "pH": 8.5,
            "Matière organique (MO%)": 4.3,
            "Phosphore (P2O5) en ppm": 31.9,
            "Potassium (K2O) en ppm": 192.6
           },
           {
            "ID": 88,
            "Province": "Safi",
            "Coordonnées GPS : X, Y": [31.912394, -9.063651],
            "pH": 7.4,
            "Matière organique (MO%)": 1.9,
            "Phosphore (P2O5) en ppm": 35.4,
            "Potassium (K2O) en ppm": 304.4
           },
           {
            "ID": 89,
            "Province": "Safi",
            "Coordonnées GPS : X, Y": [31.893921, -8.946374],
            "pH": 6.8,
            "Matière organique (MO%)": 1,
            "Phosphore (P2O5) en ppm": 28.9,
            "Potassium (K2O) en ppm": 308.4
           },
           {
            "ID": 90,
            "Province": "Safi",
            "Coordonnées GPS : X, Y": [31.888674, -9.008859],
            "pH": 8.9,
            "Matière organique (MO%)": 3.2,
            "Phosphore (P2O5) en ppm": 45,
            "Potassium (K2O) en ppm": 221.5
           },
           {
            "ID": 91,
            "Province": "Safi",
            "Coordonnées GPS : X, Y": [31.865315, -9.008938],
            "pH": 6.4,
            "Matière organique (MO%)": 4.4,
            "Phosphore (P2O5) en ppm": 36.6,
            "Potassium (K2O) en ppm": 348
           },
           {
            "ID": 92,
            "Province": "Safi",
            "Coordonnées GPS : X, Y": [31.862766, -8.980252],
            "pH": 8.5,
            "Matière organique (MO%)": 4.4,
            "Phosphore (P2O5) en ppm": 50.9,
            "Potassium (K2O) en ppm": 194
           },
           {
            "ID": 93,
            "Province": "Safi",
            "Coordonnées GPS : X, Y": [31.863332, -8.951234],
            "pH": 6.9,
            "Matière organique (MO%)": 3.7,
            "Phosphore (P2O5) en ppm": 26.4,
            "Potassium (K2O) en ppm": 180.8
           },
           {
            "ID": 94,
            "Province": "Safi",
            "Coordonnées GPS : X, Y": [31.839816, -8.960239],
            "pH": 8.2,
            "Matière organique (MO%)": 2.6,
            "Phosphore (P2O5) en ppm": 21.5,
            "Potassium (K2O) en ppm": 301.4
           },
           {
            "ID": 95,
            "Province": "Safi",
            "Coordonnées GPS : X, Y": [31.840383, -8.993261],
            "pH": 8.7,
            "Matière organique (MO%)": 3.8,
            "Phosphore (P2O5) en ppm": 44.1,
            "Potassium (K2O) en ppm": 310.6
           },
           {
            "ID": 96,
            "Province": "Safi",
            "Coordonnées GPS : X, Y": [31.840100, -9.014608],
            "pH": 7.3,
            "Matière organique (MO%)": 3.5,
            "Phosphore (P2O5) en ppm": 50.7,
            "Potassium (K2O) en ppm": 348.2
           },
           {
            "ID": 97,
            "Province": "Safi",
            "Coordonnées GPS : X, Y": [31.826214, -9.024948],
            "pH": 6.9,
            "Matière organique (MO%)": 3.8,
            "Phosphore (P2O5) en ppm": 42.3,
            "Potassium (K2O) en ppm": 329.5
           },
           {
            "ID": 98,
            "Province": "Safi",
            "Coordonnées GPS : X, Y": [31.819412, -9.000599],
            "pH": 6.4,
            "Matière organique (MO%)": 1.5,
            "Phosphore (P2O5) en ppm": 32.7,
            "Potassium (K2O) en ppm": 346.6
           },
           {
            "ID": 99,
            "Province": "Safi",
            "Coordonnées GPS : X, Y": [31.805240, -8.979585],
            "pH": 7.2,
            "Matière organique (MO%)": 2.5,
            "Phosphore (P2O5) en ppm": 21.1,
            "Potassium (K2O) en ppm": 252.7
           },
           {
            "ID": 100,
            "Province": "Safi",
            "Coordonnées GPS : X, Y": [31.789365, -8.999598],
            "pH": 8.1,
            "Matière organique (MO%)": 1.4,
            "Phosphore (P2O5) en ppm": 17.6,
            "Potassium (K2O) en ppm": 253.1
           }
          
    ];

    // Add markers to the cluster group
    data.forEach(point => {
        const marker = L.marker(point["Coordonnées GPS : X, Y"], {
            icon: customIcon,
            opacity: 0.6 // Set initial opacity
        }).bindPopup(`
            <b>Coordonnées :</b><br>
            Latitude : ${point["Coordonnées GPS : X, Y"][0]}<br>
            Longitude : ${point["Coordonnées GPS : X, Y"][1]}<br>
            pH : ${point["pH"]}<br>
            Matière Organique : ${point["Matière organique (MO%)"]}%<br>
            Phosphore (P2O5) : ${point["Phosphore (P2O5) en ppm"]} ppm<br>
            Potassium (K2O) : ${point["Potassium (K2O) en ppm"]} ppm
        `);

        // Add marker to the cluster group
        markers.addLayer(marker);
    });

    // Add the cluster group to the map
    map.addLayer(markers);

    // Add hover effects
    map.on('layeradd', function(event) {
        if (event.layer instanceof L.MarkerClusterGroup) {
            event.layer.eachLayer(function(marker) {
                marker.on('mouseover', function() {
                    this.setOpacity(1);
                });
                marker.on('mouseout', function() {
                    this.setOpacity(0.6);
                });
            });
        }
    });
});