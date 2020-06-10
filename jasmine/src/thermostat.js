function Thermostat() {
  this.temperature = 20;
  this.MINIMUM_TEMP = 10;
};

Thermostat.prototype.currentTemp = function() {
  return this.temperature;
};

Thermostat.prototype.up = function(temperature) {
  if ((this.temperature + temperature) > 32) {
    throw "Temperature would be too high!"
  }
  return this.temperature ++;
};

Thermostat.prototype.down = function() {
  if (this.isMinimumTemp()) {
    return;
  }
  return this.temperature --;
};

Thermostat.prototype.isMinimumTemp = function() {
  return this.temperature === this.MINIMUM_TEMP;
};

Thermostat.prototype.isPowerSaverOn = function() {
  return true;
};
