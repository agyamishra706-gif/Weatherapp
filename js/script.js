async function weather() {
    const city = document.querySelector("#city");
    const cityname = document.querySelector("#cityname");
    const temp = document.querySelector("#temp");
    const humidity = document.querySelector("#humidity");
    const wind = document.querySelector("#wind");
    const image = document.querySelector("#img");

    if(city.value.trim() == "") {
        window.alert("Enter city name");
        return;
    }
    try {
        let d = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=febd1dcb414fbd56322d933463821e9e&units=metric`)
        //console.log(await d.json());
        let data = await d.json();
        console.log(data);
        temp.innerHTML = data.main.temp + " ℃";
        cityname.innerHTML = data.name;
        humidity.innerHTML = data.main.humidity + " %";
        wind.innerHTML = data.wind.speed + " km/h";
        let clm = data.weather[0].main ;
        // console.log(clm);
        // console.log(image);
        if (clm == 'Dust'){
            image.src = './img/rain.png';
        }
        if (clm == 'Rain'){
            image.src = './img/rain.png';
        }
        if (clm == 'snow'){
            image.src = './img/snow.png';
        }
        if (clm == 'mist'){
            image.src = './img/mist.png';
        }
        if (clm == 'Dust'){
            image.src = './img/rain.png';
        }
    }
    catch(error)
    {
        window.alert("City not found");
    }
}

//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

//61cc90dbe9bad877fe2f79fbcef08ce7 
