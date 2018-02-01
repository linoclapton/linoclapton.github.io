/***************************************/
/*       @author   : Li Yan            */
/*       @version  : 22                */
/*       @created  : 2017-11-15 11:06  */
/*       @modified : 2017-11-15 11:45  */
/***************************************/
var api = "http://jisutqybmf.market.alicloudapi.com/weather/query";//"https://fcc-weather-api.glitch.me/api/current?";
var lat, lon;
var tempUnit = 'C';
var currentTempInCelsius;

$( document ).ready(function(){
  /*if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      var lat = "lat=" + position.coords.latitude;
      var lon = "lon=" + position.coords.longitude;
      getWeather(lat, lon);
    });
  } else {
    console.log("Geolocation is not supported by this browser.");
  }*/
  getWeather(0,0);
})

function getWeather(lat, lon) {
  //var urlString = api + lat + "&" + lon;
  var urlString = api ;
  var map ={"晴":"clear",
  "多云":"cloud",
  "雨":"rain"};
  $.ajax({
    headers :{
        "Authorization":"APPCODE c5f3f0f888ce4dc6969164095cf8188f"
    },
    data:{"city":" 北京"},
    url: urlString, 
    success: function (json) {
      //console.log(json);
      $("#city").text(json.result.city);
      $("#temp").text(json.result.temp+ " " + String.fromCharCode(176));
      $("#tempunit").text(tempUnit);
      $("#desc").text(json.result.weather);
      $("#detail").text(json.result.index[6].detail);
      IconGen(map[json.result.weather]);
    }
  });
}

function IconGen(desc) {
  var desc = desc.toLowerCase()
  switch (desc) {
    case 'drizzle':
      addIcon(desc)
      break;
    case 'clouds':
      addIcon(desc)
      break;
    case 'rain':
      addIcon(desc)
      break;
    case 'snow':
      addIcon(desc)
      break;
    case 'clear':
      addIcon(desc)
      break;
    case 'thunderstom':
      addIcon(desc)
      break;
    default:
      $('div.clouds').removeClass('hide');
  }
}

function addIcon(desc) {
  $('div.' + desc).removeClass('hide');
}

