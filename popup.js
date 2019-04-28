//gets current location of user
function findMe() {
	let status = document.getElementById('status');
	let lat;
	let lon;

	function success(position) {
		lat = position.coords.latitude;
		lon = position.coords.longitude;
		document.getElementById('lonlat').innerHTML = "Location: " + lon + "," + lat;
  		status.innerHTML = '';

  		let url = "https://maps.googleapis.com/maps/api/staticmap?center="+lat+","+lon+
			"&zoom=15&markers=color:red%7C"+lat+","+lon+
			"&size=600x600&scale=1&key=";
		document.getElementById('image').src = url;
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

