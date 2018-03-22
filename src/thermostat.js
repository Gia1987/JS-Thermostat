'use strict';

function Thermostat(){
  this._temperature = 20
  this._minimumTemperature = 10
  this._powerSaving = 'on'
}

Thermostat.prototype.usage = function(){
  if (this._temperature < 18) {return 'low-usage'}
  if (this._temperature < 25) {return 'medium-usage'}
  return 'high-usage'
}

Thermostat.prototype.reSet = function(){
  this._temperature = 20;
}

Thermostat.prototype.maxTemp = function () {
  if (this._powerSaving === 'on' ) { return 25 }
  if (this._powerSaving === 'off') { return 32 }
}

Thermostat.prototype.powerSavingOn = function() {
  this._powerSaving = 'on';
}

Thermostat.prototype.powerSavingOff = function() {
  this._powerSaving = 'off';
}

Thermostat.prototype.up = function(number){
  if (this._temperature + number > this.maxTemp() ){
    throw Error('Cannot go above '+ this.maxTemp() + ' degrees when power saving is ' + this._powerSaving);
  }
  this._temperature = (this._temperature + number);
}

Thermostat.prototype.down = function(number){
  if (this._temperature - number < this._minimumTemperature ){
    throw Error('Cannot go below the minimum temperature');
  }
  this._temperature = (this._temperature - number)
}
