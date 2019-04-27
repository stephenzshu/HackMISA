//gets current location of user
function findMe() {
	let status = document.getElementById('status');

	function success(position) {
		let lat = position.coords.latitude;
		let lon = position.coords.longitude;
		document.getElementById('lonlat').innerHTML = "Location: " + lon + "," + lat;
  		status.innerHTML = '';
	}

	function error() {
		status.innerHTML = 'Unable to retrieve location';
	}
	status.innerHTML = 'Locating...';
	navigator.geolocation.getCurrentPosition(success, error);
}

//ignore
function test() {
	let status = document.getElementById('status');
}

//button to get location of user
let button = document.getElementById('find-me')
if (button) {
	button.addEventListener('click', findMe);
} else
	status = 'Error with button';

//button linked to flood map
let floodButton = document.getElementById('flood-map')
if (floodButton) {
	floodButton.addEventListener('click', test);
} 

