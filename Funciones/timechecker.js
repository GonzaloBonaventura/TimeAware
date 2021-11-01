var active = false;
var options = { hour12: false };
async function timeaware() {
	console.log("start confirmation");
	var time = getTime();
	var min=time.getMinutes();
	console.log(min)
	var out;
	while(min != 0 && min != 15 && min != 30 && min != 45  && min != 0){
		time = getTime();
		await sleep(60000);
		min=time.getMinutes();
		console.log(min);
	}
	ttsi(hournmin());
	//http://api.voicerss.org/?key=5ba7932e18814afc90c6f93048e002e5&src=ABC&c=MP3&hl=es-es
	while(active){
		await sleep(900000);
		out = ttsi(hournmin());
		console.log(out);
	}
	console.log("stop confirmation");
}
async function hournmin(){
	var time = getTime();
	var hora = time.getHours();
	var minu = time.getMinutes();
	console.log(hora + ':' + minu);
	return 'son las ' + hora + ':' + minu
}
 function getTime(){
	var time = Date.now();
	var date = new Date(time);
	return date;
}
function humantime() {
	var time = Date.now();
	var date = new Date(time);
	console.log((time = date.toLocaleString('en-US', options)));
	document.title = time;
}

async function timestart() {
	active = true;
	timeaware();
}
async function timestop() {
	active = false;
}
async function parseDate(input) {
  var parts = input.match(/(\d+)/g);
  // new Date(year, month [, date [, hours[, minutes[, seconds[, ms]]]]])
  return new Date(parts[0], parts[1]-1, parts[2]); // months are 0-based
}
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
 async function ttsi(content="no"){
	content.then(async function(result) {
    	console.log(result);
    	var base = "http://api.voicerss.org/?key=";
		var key = "5ba7932e18814afc90c6f93048e002e5";
		var text = "&src=" + encodeURIComponent(result);
		var lang = "&c=MP3&hl=es-" + document.getElementById('voice').value;

		var link = base + key + text + lang;
		play(link);
		await sleep(10000);
		play(link);
	});
}
function tryvoice(){
		var base = "http://api.voicerss.org/?key=";
		var key = "5ba7932e18814afc90c6f93048e002e5";
		var text = "&src=Son%20las%2012%3A45";
		var lang = "&c=MP3&hl=es-" + document.getElementById('voice').value;

		var link = base + key + text + lang;
		play(link);
}
