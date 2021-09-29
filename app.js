const getPhrase = async () => {
	const response = await fetch("https://api.quotable.io/random");
	const myJson = await response.json();
	document.getElementById("phrase").innerHTML =
		myJson.content + "- " + myJson.author + " -.";
};

getPhrase();

function addAZero(i) {
	return i < 10 ? "0" + i : i;
}

function cambiarColor(whatever, loquevale) {
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

	cambiarColor("seconds", seconds);
	cambiarColor("minutes", minutes);
	cambiarColor("hour", hour);

	setTimeout(relojito, 1000);
}
relojito();

const tiempo = async() =>{
    const weatherKey = "fa91a7f7ea3a2782ea7475d53f576a68";

    const request = await fetch("https://api.openweathermap.org/data/2.5/weather?q=paris&units=metric&lang=es&appid=" +
            weatherKey);
    const myJson = await request.json();

    const iconWeather = myJson.weather[0].icon;

    const getIcon =  "http://openweathermap.org/img/wn/" + iconWeather + "@2x.png"

    document.getElementById("iconoDelTiempo").setAttribute("src", getIcon);

    document.getElementById("parisWeather").innerHTML = "Temperatura en París: " + myJson.main.temp + "ºC " + myJson.weather[0].description;
    // document.getElementById("parisWeather").innerHTML= "Ahora en París tenemos " + myJson.getTheWeather.weather.description + " y una temperatura de " + myJson.getTheWeather.main.temp + " ºC."
    console.log(myJson.weather[0].icon);

};

tiempo();













// const response = await fetch(
// 	"https://api.openweathermap.org/data/2.5/weather?q=paris&units=metric&lang=es&appid=" +
// 		weatherKey
// );
// const data = await response.json();
// console.log(data);

// const weatherInParis = async () => {
// 	const weatherKey = "fa91a7f7ea3a2782ea7475d53f576a68";

// 	const response = await fetch(
// 		"https://api.openweathermap.org/data/2.5/weather?q=paris&units=metric&lang=es&appid=" + weatherKey
// 	);
// 	const data = await response.json();

// 	console.log(data);
//     return data;
// };

// const weatherInParis = async() =>{

// const getTheWeather = await fetch
// const weatherJson = await getTheWeather.json();
// document.getElementById("parisWeather").innerHTML= "Ahora en París tenemos " + weatherJson.getTheWeather.weather.description + " y una temperatura de " + weatherJson.getTheWeather.main.temp + " ºC."
// }
// weatherInParis();
// getTheWeather.then(console.log())

// weather APP API key: fa91a7f7ea3a2782ea7475d53f576a68

// URL para el tiempo en París:
// https://api.openweathermap.org/data/2.5/weather?q=paris&units=metric&lang=es&appid=fa91a7f7ea3a2782ea7475d53f576a68
// URL para el tiempo en Madrid:
// https://api.openweathermap.org/data/2.5/weather?q=madrid&units=metric&lang=es&appid=fa91a7f7ea3a2782ea7475d53f576a68
