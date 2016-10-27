function Thermostat() {
  this._temperature = 20;

  this.tempReader = function() {
    return this._temperature;
  };

};

Thermostat.prototype.up = function(num) {
  if(this.isSavingPower() && this._temperature + num > 25) {
    this._temperature = 25;
    throw new Error("Power saving mode is active: max temperature is 25. Temperature set to 25.")
  };
  if(this._temperature + num > 32) {
    this._temperature = 32;
    throw new Error('Max temperature is 32- temperature set to 32')
  };
  this._temperature += num;
};

Thermostat.prototype.down = function (num) {
  if(this.tempReader() - num < 10) {
    this._temperature = 10;
    throw new Error('Minimum temperature is 10- temperature set to 10.')
  };
  this._temperature -= num;
};



Thermostat.prototype.isSavingPower = function () {

  return true;
};
