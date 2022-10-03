const lokasi = {
	latitude: -6.286252,
	longitude: 106.81182
};

const celerates = {
	latitude: -6.286444,
	longitude: 106.811757
};

const radians = (deg) => (deg * Math.PI) / 180.0;
let kantor = 6371 * Math.acos(Math.cos(radians(lokasi.latitude)) * Math.cos(radians(celerates.latitude)) * Math.cos(radians(celerates.longitude) - radians(lokasi.longitude)) + Math.sin(radians(lokasi.latitude)) * Math.sin(radians(celerates.latitude)));

console.log(kantor);
console.log(kantor <= 0.03);

// lokasi -6.287963, 106.812293
