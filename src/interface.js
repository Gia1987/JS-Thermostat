$(document).ready(function(){
  var thermostat = new Thermostat();
  $('#tempdisplay').text(thermostat.temperature()+' °C');

  $('#up').on('click', function(){
    thermostat.up(1);
  $('#tempdisplay').text(thermostat.temperature()+' °C');
  })

  $('#down').on('click', function(){
    thermostat.down(1);
    $('#tempdisplay').text(thermostat.temperature()+ ' °C');
  })
})
