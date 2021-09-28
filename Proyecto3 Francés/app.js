
const getPhrase = async () => {
    const response = await fetch('https://api.quotable.io/random');
    const myJson = await response.json(); 
  document.getElementById("phrase").innerHTML = myJson.content + "- " + myJson.author + " -."

  }
  
  getPhrase();

function addAZero(i) {
	return i < 10 ? "0" + i : i;
}

function cambiarColor(whatever,loquevale) {
	if (loquevale % 2 === 0) {
		document.getElementById(whatever).classList.add("color-azul");
	} else {
		document.getElementById(whatever).classList.remove("color-azul");
	}
}

function relojito() {
	let date = new Date();
	let seconds = date.getSeconds();
	let minutes = date.getMinutes();
	let hour = date.getHours();

	document.getElementById("hour").innerHTML = addAZero(hour) + ":";
	document.getElementById("minutes").innerHTML = addAZero(minutes) + ":";
	document.getElementById("seconds").innerHTML = addAZero(seconds);

	cambiarColor("seconds",seconds);
	cambiarColor("minutes",minutes);
	cambiarColor("hour",hour);

	setTimeout(relojito, 1000);
}
relojito();

// weather APP API key: fa91a7f7ea3a2782ea7475d53f576a68

// URL para el tiempo en París:
// https://api.openweathermap.org/data/2.5/weather?q=paris&units=metric&lang=es&appid=fa91a7f7ea3a2782ea7475d53f576a68
// URL para el tiempo en Madrid:
// https://api.openweathermap.org/data/2.5/weather?q=madrid&units=metric&lang=es&appid=fa91a7f7ea3a2782ea7475d53f576a68