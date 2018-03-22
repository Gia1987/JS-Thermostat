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
  $('#tempdisplay').text(thermostat.temperature());
  };
  function powerSavingStatus() {
  $('#power-saving-status').text(thermostat.savingMode());
  };

});
