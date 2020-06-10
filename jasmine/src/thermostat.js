function Thermostat() {
  this.temperature = 20;
  this.MINIMUM_TEMP = 10;
  this.powerSavingMode = true;

};

Thermostat.prototype.currentTemp = function() {
  return this.temperature;
};


Thermostat.prototype.up = function() {
  if (this.isPowerSaverOn()) && (this.currentTemp() === 25){
    return;
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
  return this.powerSavingMode === true;
};
