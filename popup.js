/*window.onload = function() {  
  let startPos;
  let geoSuccess = function(position) {
  	startPos = position;
  	document.getElementById('startLat').innerHTML = startPos.coords.latitude;
  	document.getElementById('startLon').innerHTML = startPos.coords.longitude;
  };
  navigator.geolocation.getCurrentPosition(geoSuccess);

};*/

function findMe() {
	let status = document.getElementById('status');

	function success(position) {
		let lat = position.coords.latitiude;
		let lon = position.coords.longitude;
		document.getElementById('startLat').innerHTML = lat;
  		document.getElementById('startLon').innerHTML = lon;
  		status.innerHTML = '';
	}

	function error() {
		status.innerHTML = 'Unable to retrieve location';
	}
	navigator.geolocation.getCurrentPosition(success, error);
}

let button = document.getElementById('find-me')
if (button) {
	button.addEventListener('click', findMe);
}

