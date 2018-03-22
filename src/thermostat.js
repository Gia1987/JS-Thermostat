function Thermostat(){
  this._temperature = 20
  this._minimumTemperature = 10
}



Thermostat.prototype.up = function(number){
  this._temperature = (this._temperature + number);
}

Thermostat.prototype.down = function(number){
  if (this._temperature - number < this._minimumTemperature ){
    throw Error('Cannot go below the minimum temperature');
  }
  this._temperature = (this._temperature - number)
}
