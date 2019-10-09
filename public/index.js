const title = document.getElementById("title")
const button = document.getElementById('button')
const input = document.getElementById('inputLocation')
const summary = document.getElementById('summary')
const temp = document.getElementById('temp')
const loc = document.getElementById('location')
const display = document.getElementById('display')

button.addEventListener('click', async ()=>{

    summary.textContent = "loading ..."
    temp.textContent = ""
    let response = await fetch(`http://localhost:3000/weather?location=${input.value}`)
    let data = await response.json()

    loc.textContent = data.placeData
    summary.textContent = data.weatherData.summary
    temp.textContent = `${Math.floor((data.weatherData.temperature-32)*5/9)}°C`

    if(summary.textContent=="Partly Cloudy"||summary.textContent=="Mostly Cloudy"){
        display.src="./assets/partlycloudy.png"
    }
    else if(summary.textContent=="hot"){
        display.src="./assets/hot.png"
    }
    else if(summary.textContent=="Light Rain"){
        display.src="./assets/rain.png"
    }
    else if(summary.textContent=="Clear"){
        display.src="./assets/sunny.png"
    }

    

})