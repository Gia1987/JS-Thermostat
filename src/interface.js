$(document).ready(function(){
  var thermostat = new Thermostat();
  updateTemperature();

  $('#up').click(function() {
    thermostat.up(1);
    updateTemperature();
  })

  $('#down').click(function() {
    thermostat.down(1);
    updateTemperature();
  })
  $('#re-set').click(function(){
    thermostat.reSet();
    updateTemperature();
  })
  $('#powersaving-off').click(function(){
    thermostat.powerSavingOff();
    powerSavingStatus();
    updateTemperature();
  })
  $('#powersaving-on').click(function(){
    thermostat.powerSavingOn();
    powerSavingStatus();
    updateTemperature();
  })


  function updateTemperature() {
  $('#tempdisplay').text(thermostat.temperature() + ' °C');
  $('#tempdisplay').attr('class', thermostat.usage());
  };

  function powerSavingStatus() {
  $('#power-saving-status').text(thermostat.savingMode());
  };

 displayWeather('london')

  $('#select-city').submit(function(event){
    event.preventDefault();
    var city = $('#city').val();
    displayWeather(city);
  })

  function displayWeather(city){
    var url ='http://api.openweathermap.org/data/2.5/weather?q=' + city;
    var token = '&appid=a3d9eb01d4de82b9b8d0849ef604dbed';
    var units = '&units=metric';
    $.get( url + token + units, function(data) {
      $('#cityname').text(data.name + ": ");
      $('#outsidetemperature').text(data.main.temp).append(' &#8451;');
    });
  }

});
