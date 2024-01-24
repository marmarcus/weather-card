var entry = document.querySelector("input");
var btn = document.querySelector("button");

btn.addEventListener("click", ()=>{
    getWeather(entry.value);
});

entry.addEventListener('keypress', ()=>{
    getWeather(entry.value);
});

const apiKey = "119baa915fa39798f96861183f68e491";
const apiCall = "https://api.openweathermap.org/data/2.5/weather?units=imperial&q=";

async function getWeather(city){
    const response = await fetch(apiCall + city + `&appid=${apiKey}`);

    var data = await response.json();

    document.querySelector("h1").innerHTML = data.name;
    document.querySelector(".degree").innerHTML = Math.round(data.main.temp);
    document.querySelector(".humidity").innerHTML = data.main.humidity;
    document.querySelector(".wind").innerHTML = data.wind.speed;
    document.querySelector(".icons").src = "images/conditions/" + data.weather[0].icon + ".png";

    var getLetter = data.weather[0].icon;

    if(getLetter.endsWith('n')){
        document.body.style.background = '#222';
        document.querySelector(".card").style.boxShadow = '0 0 5px 5px #465441';
    }
    else{
        document.body.style.background = 'linear-gradient(90deg, rgba(135,205,255,0.58) 0%, rgba(203, 251, 255, 0.619) 50%, rgba(135,205,255,0.58) 100%)';
        document.querySelector(".card").style.boxShadow = '0 0 4px 4px rgb(106, 211, 213)';
    }
}

getWeather();

