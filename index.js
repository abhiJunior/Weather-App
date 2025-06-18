const weatherdata = {
  location: {
    name: "Milan",
    region: "Lombardia",
    country: "Italy",
    lat: 45.47,
    lon: 9.2,
    tz_id: "Europe/Rome",
    localtime_epoch: 1689000742,
    localtime: "2023-07-10 16:52",
  },
  current: {
    last_updated_epoch: 1689000300,
    last_updated: "2023-07-10 16:45",
    temp_c: 34.0,
    temp_f: 93.2,
    is_day: 1,
    condition: {
      text: "Sunny",
      icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
      code: 1000,
    },
    wind_mph: 4.3,
    wind_kph: 6.8,
    wind_degree: 170,
    wind_dir: "S",
    pressure_mb: 1018.0,
    pressure_in: 30.06,
    precip_mm: 0.0,
    precip_in: 0.0,
    humidity: 41,
    cloud: 0,
    feelslike_c: 37.6,
    feelslike_f: 99.6,
    vis_km: 10.0,
    vis_miles: 6.0,
    uv: 9.0,
    gust_mph: 5.6,
    gust_kph: 9.0,
  },
};

// const conversionButton = document.querySelector(".toggle button")
// const tempUnitRef = document.querySelector(".temp .temp-value")
const temRef = document.querySelector(".temp .temp-value");
const locationRef = document.querySelector(".time_location p");
const timeLocationRef = document.querySelector(".time_location span");
const imgRef = document.querySelector(".weather_condition p img");
// const conditionRef = document.querySelector(".weather_condition span");




function renderWeatherData(weatherdata) {
  temRef.innerHTML = weatherdata.current.temp_c ;
  locationRef.innerText = weatherdata.location.name;
  timeLocationRef.innerText = locationDetail(
    weatherdata.location.localtime,
    weatherdata.current.is_day
  );
  // conditionRef.innerText = weatherdata.current.condition.text;
  imgRef.src = weatherdata.current.condition.icon;
}

function locationDetail(time, day) {
  const timeArr = time.split(" ");
  if (day === 1){
      const result = timeArr[1] + " " + "Tuesday" + " " + timeArr[0];
      return result
  }
  else if (day === 0){
      const result = timeArr[1] + " " + "Monday" + " " + timeArr[0];
      return result
  }
  else if (day === 2){
      const result = timeArr[1] + " " + "Wenesday" + " " + timeArr[0];
      return result
   }
   else if (day === 3){
      const result = timeArr[1] + " " + "Thursday" + " " + timeArr[0];
      return result
   }
   else if (day === 4){
      const result = timeArr[1] + " " + "Friday" + " " + timeArr[0];
      return result
   }
   else if (day === 5){
      const result = timeArr[1] + " " + "Saturday" + " " + timeArr[0];
      return result
   }
   else if (day === 2){
      const result = timeArr[1] + " " + "Sunday" + " " + timeArr[0];
      return result
   }
  
}

const formRef = document.querySelector("nav form");

formRef.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputRef = document.querySelector("input.searchField");
  const inputValue = inputRef.value;
  console.log(inputValue);
  fetchWeatherData(inputValue);
  inputRef.value = ""
});

function fetchWeatherData(location) {
    fetch(
      `https://api.weatherapi.com/v1/current.json?key=35af7ff606db422880d141328231305&q=${location}&aqi=no`
    )
      .then((res) => res.json())
      .then((data) => renderWeatherData(data))
      .catch((err) => alert("Location is not found",err))
}



// conversionButton.addEventListener("click",function(){
//   console.log("clicked")
//   renderWeatherDataButton()
// })

const data = fetchWeatherData("New Delhi");
renderWeatherData(data)
