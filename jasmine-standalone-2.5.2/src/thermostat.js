function Thermostat() {
  this.MIN_TEMP = 10;
  this.POWER_SAVING_MAX_TEMP = 25;
  this.MAX_TEMP = 32;
  this.DEFAULT_TEMP = 20;

  this._temperature = this.DEFAULT_TEMP;
  this._powerSavingMode = true;

  this.tempReader = function() {
    return this._temperature;
  };

};

Thermostat.prototype = {

  up: function(num) {
    if(this.isSavingPower() && this._temperature + num > this.POWER_SAVING_MAX_TEMP) {
      this._temperature = this.POWER_SAVING_MAX_TEMP;
      throw new Error("Power saving mode is active: max temperature is 25. Temperature set to 25.")
    };
    if(this._temperature + num > this.MAX_TEMP) {
      this._temperature = this.MAX_TEMP;
      throw new Error('Max temperature is 32- temperature set to 32')
    };
    this._temperature += num;
  },

  down: function (num) {
    if(this.tempReader() - num < this.MIN_TEMP) {
      this._temperature = this.MIN_TEMP;
      throw new Error('Minimum temperature is 10- temperature set to 10.')
    };
    this._temperature -= num;
  },

};




Thermostat.prototype.isSavingPower = function () {
  return this._powerSavingMode;
};

Thermostat.prototype.changePowerMode = function(){
  this.isSavingPower() ? this._powerSavingMode = false : this._powerSavingMode = true
};

Thermostat.prototype.reset = function () {
  this._temperature = this.DEFAULT_TEMP;
};

Thermostat.prototype.energyUsage = function() {
  if (this.tempReader() < 18) return "low";
  if (this.tempReader() > 25) return "high";
  return "medium";
}
