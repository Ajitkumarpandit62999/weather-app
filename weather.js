
const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?state=india&city=`;

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '3aceabc159mshc8f508e2475ce78p1cc0aejsnb25268b37277',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};


let searchBox = document.querySelector(".search input");
let searchBtn = document.querySelector(".search button");
let weatherIcon = document.querySelector(".weather-icon");




searchBtn.addEventListener("click" , function(e){

    checkWeather(searchBox.value);
    searchBox.value = "";
    

});


let searchweather = (e) =>{
    if(searchBox.value == ""){
        return;
    }

    if (e.key == "Enter"){
        checkWeather(searchBox.value);
         searchBox.value = "";
    }
}

searchBox.addEventListener("keyup" , searchweather);



let checkWeather = async (city)=>{

try {
	const response = await fetch(url+city, options);
	var result = await response.json();
	console.log(result);
    console.log(result.temp);
} catch (error) {
	console.error(error);
}

    let sehar = document.querySelector(".city").innerHTML = city;
    let temp = document.querySelector(".temp").innerHTML = `${result.temp}°C`;
    let humidity = document.querySelector(".humidity").innerHTML = `${result.humidity}% `;
    let wind = document.querySelector(".wind").innerHTML = `${result.wind_speed}Km/h`;

    if(result.temp<25 && result.temp>15){
        weatherIcon.src="images/clouds.png";
    }
    else if(result.humidity>=90){
        weatherIcon.src ="images/rain.png";
    }
    else if(result.temp<5){
        weatherIcon.src = "images/drizzle.png";
    }
    else if(result.humidity>=70 && result.humidity<90){
        weatherIcon.src ="images/mist.png";
    }

}



