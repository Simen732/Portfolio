let cityForm = document.querySelector("form");
let details = document.querySelector("#details");
let card = document.querySelector("#card");
let time = document.querySelector("#time");
let icon = document.querySelector("#icon img");

let updateUI = (data) => {


    let {cityDets, weather} = data;
    console.log(data);

    details.innerHTML = `
    <div id="details">
    <div id="idk">
    <h5 id="cityName">${cityDets.EnglishName}</h5>
    <div id="condition">${weather.WeatherText}</div>
    <div>
    <div id="temp">
        <span>${weather.Temperature.Metric.Value}</span>
        <span>&deg;C</span>
        <br>
        <span>GMT: ${cityDets.TimeZone.GmtOffset} </span>
    </div>
    </div>
    `;

    let iconSrc = `./Img/icons/${weather.WeatherIcon}.svg`;
    icon.setAttribute("src", iconSrc);

    let timeSrc = null;
    if (weather.IsDayTime) {
        timeSrc = "./Img/day.svg";
        document.getElementById("conteirer").style.color = "black";
        document.getElementById("conteirer").style.backgroundColor = "rgb(194, 194, 194)"; 

    } else {
        timeSrc = "./Img/night.svg";    
        document.getElementById("conteirer").style.color = "white";
        document.getElementById("conteirer").style.backgroundColor = "rgb(40, 40, 40)"; 


        console.log("darkmode")
    }

    time.setAttribute("src", timeSrc);
    
    if (card.classList.contains("displayNone")) {
        card.classList.remove("displayNone");
    }

}
let uppdateCity = async (city) => {
    let cityDets = await getCity(city);
    let weather = await getWeather(cityDets.Key);

    return {

        cityDets,
        weather
    };
}

cityForm.addEventListener("submit", e => {
    e.preventDefault();

    let city = cityForm.city.value.trim();
    cityForm.reset();

    uppdateCity(city)
        .then(data => updateUI(data))
        .catch(err => console.log(err));
})