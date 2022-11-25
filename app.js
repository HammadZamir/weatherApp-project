const APIkey = `d680164ae41d5b30efed96513e17553d`;

const form = document.querySelector("form");
const search = document.querySelector("#search");
const result = document.querySelector(".cloud");
const button = document.querySelector('button');
const h2 = document.querySelector('.temperature')


form.addEventListener("submit", (event) => {
  let city = search.value;
  event.preventDefault();
  fetchWeather(city);
  button.classList.add('display')
});

fetchWeather =  function (city) {
  result.innerHTML = "<h4>Loading..</h4>";

  const URL = ` https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}&units=metric`;
  // const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}`

  // do like this to fetch data
  // let response = await fetch(URL);
  // let data = await response.json();
  // return showResult(data);

  //OR THIS
  fetch(URL)
  .then((response)=>{
    return response.json();
  })
  .then((data) => {
    return showResult(data);
  } )

};

const showResult = function (data) {
  console.log(data)
  if (data.cod === "404") {
    result.innerHTML = "<h4>City not Found</h4>";
  } 
  else{
    result.innerHTML = ` 
    <div>
    <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
    </div>
    <div>
        <h2>${Math.floor(data.main.temp)} C</h2>
        <h4>${data.weather[0].main}</h4>
    </div> `;
  }

  // button.addEventListener('click' , (e)=>{
  //   e.preventDefault();
  //   const toFaren = data.main.temp;
  //   const Result = Math.floor((toFaren * 9/5) + 32);
  //   result.innerHTML = ` 
  //   <div>
  //   <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
  //   </div>
  //   <div>
  //       <h2>${Result} F</h2>
  //       <h4>${data.weather[0].main}</h4>
  //   </div> `;
  // })

};

