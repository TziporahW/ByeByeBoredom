$(document).ready(function($) {
  $( "#accordion" ).accordion({
  collapsible: true, active: false, heightStyle: "content"
  });
});


function getWeather(){
  let lat = 40.7812;
  let long = 73.9665;
  let API_KEY = '12c76d5ada33641ef893827b36ccbf38';
  let baseURL = `http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=${API_KEY}`;

  $.get(baseURL,function(res){
      let data = res.current;
      console.log(data)
      var temp = Math.floor((data.temp - 273.15) * 1.8 + 32);
      let condition = data.weather[0].description;

      $('#temp-main').html(`${temp}°`);
      $('#condition').html(condition);
  })
  
}