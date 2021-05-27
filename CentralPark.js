// eslint-disable-next-line no-undef
$(document).ready(function($) {
  $( "#accordion" ).accordion({
    collapsible: true, active: false, heightStyle: "content"
  });
});


function getWeather() {
  let lat = 40.785091;
  let long = -73.968285;
  let API_KEY = '6918eb19ee23e0d4064666ed5e376765';
  let baseURL = `http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=${API_KEY}`;
  $.get(baseURL,function(res) {
    let data = res.current;
    var temp = Math.floor((data.temp - 273.15) * 1.8 + 32);
    let condition = data.weather[0].description;

    $('#temp-main').html(`${temp}°`);
    $('#condition').html(condition);
  });
  
}