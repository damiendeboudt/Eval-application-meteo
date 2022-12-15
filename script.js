let myTown = document.getElementById("ville")
let buttonSend = document.getElementById("send")


buttonSend.addEventListener("click", ()=>{
const requestURL = "https://api.openweathermap.org/data/2.5/weather?q=" + myTown.value +"&appid=5386756" +
    "6d2b5b0c4075fd5fc0c9c4614&units=metric&lang=fr";
let xhr = new XMLHttpRequest();
xhr.open("GET", requestURL);
xhr.responseType = "json";


xhr.onload = function () {
    if (xhr.status === 200) {
        console.log("ok")
    } else {
        console.log("error")
    }

    let response = xhr.response;
    console.log(response)

    let wind = response.wind
    if(wind.speed > "20"){
        document.getElementById("vent").innerHTML = "Vitesse du vent: " +
            (wind.speed * 3.6).toFixed("2") + " km/h" + "<i class=\"fa-solid fa-wind\"></i>"
    }
    else {
        document.getElementById("vent").innerHTML = "Vitesse du vent: " +
            (wind.speed * 3.6).toFixed("2") + " km/h"
    }
    let weatherDescription = response.weather[0]

        if(weatherDescription.description == "nuageux") {
        document.getElementById("Ciel").innerHTML = "Ciel: " + weatherDescription.description
        document.getElementById("Ciel").style.backgroundImage = "url('nuageux.jpeg')"
        }
        else {
        document.getElementById("Ciel").innerHTML = "Ciel: " + weatherDescription.description
    }

    let temperature = response.main
    document.getElementById("temperature").innerHTML = "Temperature: "  + temperature.temp + " °C"
    if (temperature.temp < 3) {
        document.getElementById("temperature").innerHTML = "Temperature: "  + temperature.temp + " °C" + "<i " +
            "class=\"fa-solid fa-triangle-exclamation\"></i>"
        document.getElementById("temperature").style.backgroundImage = "url('flocon.png')"
    }

    let humidity = response.main

    if(humidity.humidity == 100){
        document.getElementById("humidity").innerHTML = "Taux d'humidité: " + humidity.humidity + " %"
    }
    else {
        document.getElementById("humidity").innerHTML = "Taux d'humidité: " + humidity.humidity + " %"
    }

}
xhr.send();
})
