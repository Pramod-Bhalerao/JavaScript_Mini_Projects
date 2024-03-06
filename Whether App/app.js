const apiKey = "d8f9d6df8a6765ee182b32567db9655e";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const whetherIcon = document.querySelector(".whether-icon");

async function checkWhether(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";

    if (data.weather[0].main == "clouds") {
        whetherIcon.src = "./Assets/clouds.png";
    }
    else if (data.weather[0].main == "Rain") {
        whetherIcon.src = "./Assets/rain.png";
    }
    else if (data.weather[0].main == "Mist") {
        whetherIcon.src = "./Assets/mist.png";
    }
    else if (data.weather[0].main == "Drizzle") {
        whetherIcon.src = "./Assets/drizzle.png";
    }
    else if (data.weather[0].main == "Snow") {
        whetherIcon.src = "./Assets/snow.png";
    }
    else if (data.weather[0].main == "Clear") {
        whetherIcon.src = "./Assets/clear.png";
    }
}

searchBtn.addEventListener("click", () => {
    checkWhether(searchBox.value);
})




