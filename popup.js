/*window.onload = function() {  
  let startPos;
  let geoSuccess = function(position) {
  	startPos = position;
  	document.getElementById('startLat').innerHTML = startPos.coords.latitude;
  	document.getElementById('startLon').innerHTML = startPos.coords.longitude;
  };
  navigator.geolocation.getCurrentPosition(geoSuccess);

};*/
//gets current location of user
function findMe() {
	let status = document.getElementById('status');

	function success(position) {
		let lat = position.coords.latitude;
		let lon = position.coords.longitude;
		document.getElementById('startLat').innerHTML = "Latitude: "+lat;
  		document.getElementById('startLon').innerHTML = "Longitude: "+lon;
  		status.innerHTML = '';
	}

	function error() {
		status.innerHTML = 'Unable to retrieve location';
	}
	status.innerHTML = 'Locating...';
	navigator.geolocation.getCurrentPosition(success, error);

	//$.get('https://msc.fema.gov/portal/search#searchresultsanchor', (res) => {
	//	status.innerHTML=res;
	//});
}

function test() {
	let status = document.getElementById('status');

	//$.get('https://msc.fema.gov/portal/search#searchresultsanchor', (res) => {
	//	status.innerHTML=res;
	//});
}

//button to get location of user
let button = document.getElementById('find-me')
if (button) {
	button.addEventListener('click', findMe);
} else
	status = 'Error with button';

let floodButton = document.getElementById('flood-map')
if (floodButton) {
	floodButton.addEventListener('click', test);
} 

