function Thermostat() {
  this.temperature = 20;
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

Thermostat.prototype.down = function(temperature) {
  if ((this.temperature - temperature) < 10) {
    throw "Temperature would be too low!";
  }
  return this.temperature --;
};

Thermostat.prototype.isPowerSaverOn = function() {
  return true;
};
