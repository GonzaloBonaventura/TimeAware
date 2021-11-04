var active = false;
var shutdown = true;
var options = { hour12: false };
async function timeaware() {
  shutdown = false;
	console.log("start confirmation");
	var time = getTime();
	var min=time.getMinutes();
	var sec=time.getSeconds();
	console.log(min)
	var out;
	var wait = 0;
	if (min != 0 && min != 15 && min != 30 && min != 45) {
		if(min<15){
			console.log("if15");
			wait = (15 - min)*60000 - sec * 1000;
		}else{
			if(min<30){
					console.log("if30");
					wait = (30 - min)*60000 - sec * 1000;
			}else{
				if(min<45){
					console.log("if45");
					wait = (45 - min)*60000 - sec * 1000;
				}else{
					if(min<60){
						console.log("if60");
						wait = (60 - min)*60000 - sec * 1000;
					}
				}
			}
		}
	}
	console.log(min + " . wait= " + wait);
	var waitmin = Math.round(wait/60000);
	console.log("minwait= " + waitmin + ". segwait:" + (wait/1000)%60);

	if (active == true) {
		//await sleep(wait);
		await  sleepwhile(wait/1000);
		ttsi(hournmin());
	}else{
		document.getElementById('light').className = "red";
		console.log("stop confirmation");
		shutdown = true;
		return;
	}
	document.getElementById('light').className = "green";

	while(active){
		//await sleep(900000);
		await  sleepwhile(900);
		if (active == true) {
			out = ttsi(hournmin());
			console.log(out);
		}
	}
	document.getElementById('light').className = "red";
	console.log("stop confirmation");
	shutdown = true;
}
async function hournmin(){
	var time = getTime();
	var hora = time.getHours();
	var minu = time.getMinutes();
	if (minu < 10) {
		minu = "0" + minu;
	}
	console.log(hora + ':' + minu);
	return hora + ':' + minu
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
	if (shutdown == true) {
		if(document.getElementById('light').className == "" || document.getElementById('light').className == "red"){
				document.getElementById('light').className = "lgreen";
		}
		active = true;
		timeaware();
	}
}
function timestop() {
	if (shutdown == false) {
		active = false;
		if(document.getElementById('light').className != ""){
			document.getElementById('light').className = "yellow";
		}
	}

}
async function parseDate(input) {
  var parts = input.match(/(\d+)/g);
  // new Date(year, month [, date [, hours[, minutes[, seconds[, ms]]]]])
  return new Date(parts[0], parts[1]-1, parts[2]); // months are 0-based
}
async function sleepwhile(s){
	for (var i = 0; i < s; i++) {
		await sleep(1000);
		if (active == false) {
			console.log("stopped");
			return;
		}
	}
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
		var lang = "&c=MP3&hl=" + document.getElementById('voice').value;

		var link = base + key + text + lang;
		if (active == true) {
			play(link);
			await sleep(10000);
			play(link);
		}
	});
}
function tryvoice(){
		var base = "http://api.voicerss.org/?key=";
		var key = "5ba7932e18814afc90c6f93048e002e5";
		console.log('test: 12:45, 8:00, 0:00, 16:30');
		var text = "&src=" + encodeURIComponent("12:45, 8:00, 0:00, 16:30");
		var lang = "&c=MP3&hl=" + document.getElementById('voice').value;

		var link = base + key + text + lang;
		play(link);
}
