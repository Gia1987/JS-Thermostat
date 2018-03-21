function Thermostat(){
  this._temperature = 20
}


Thermostat.prototype.up = function(number){
  this._temperature = (this._temperature + number);
}

Thermostat.prototype.down = function(number){
  this._temperature = (this._temperature - number)
}
