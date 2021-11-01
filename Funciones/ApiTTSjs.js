async function tts(){
	var textin = document.getElementById('content').value;
	var base = "http://api.voicerss.org/?key=";
	var key = "5ba7932e18814afc90c6f93048e002e5";
	var text = "&src=" + encodeURIComponent(textin);
	var lang = "&c=MP3&hl=es-" + document.getElementById('voice').value;

	var url = base + key + text + lang;
	play(url);
}

async function play(link){
	console.log(link);
	var audio = new Audio(link);
	console.log(audio);
 	audio.play();
}

