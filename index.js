const apikey = "442b8e833c054f93b712536d8c1ffe4f";
        const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
        const searchBox = document.querySelector(".search input");
        const searchButton = document.querySelector(".search button");
        const weatherIcon = document.querySelector(".climate .weather .weather-icon");

        async function checkWeather(city) {

            const response = await fetch(apiurl + city + `&appid=${apikey}`);
            
            if(response.status==404){
                alert("Invalid City name");
            }
            
            else {
            var data = await response.json();
        
            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
            document.querySelector(".humid").innerHTML = data.main.humidity + "%";
            document.querySelector(".wind").innerHTML = data.wind.speed + " Km/hr";
            document.querySelector(".visibility").innerHTML = Math.round(data.visibility);

            if (data.weather[0].main == "Clouds") {
                weatherIcon.src = "images/clouds.png";
            } else if (data.weather[0].main == "Clear") {
                weatherIcon.src = "images/clear.png";
            } else if (data.weather[0].main == "Rain") {
                weatherIcon.src = "images/rain.png";
            } else if (data.weather[0].main == "Drizzle") {
                weatherIcon.src = "images/drizzle.png";
            } else if (data.weather[0].main == "Mist") {
                weatherIcon.src = "images/mist.png";
            }

            document.querySelector(".climate").style.display = "flex";

        }
    }

        searchButton.addEventListener("click", () => {
            checkWeather(searchBox.value);
        });
    