function Thermostat() {
  this._temperature = 20;

  this.tempReader = function() {
    return this._temperature;
  };

};

Thermostat.prototype.up = function(num) {
  this._temperature += num;
};

Thermostat.prototype.down = function (num) {
  this._temperature -= num;
};
