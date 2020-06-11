class Thermostat {
  constructor() {
    this.temperature = 20;
    this.MINIMUM_TEMP = 10;
    this.powerSavingMode = true;
    this.PS_ON_MAX = 25;
    this.PS_OFF_MAX = 32;
    this.LOW_USAGE = 18;

  }
  currentTemp() {
    return this.temperature;
  }
  up() {
    if (this.isMaxTemp()) {
      return;
    }
    return this.temperature++;
  }
  down() {
    if (this.isMinimumTemp()) {
      return;
    }
    return this.temperature--;
  }
  isMinimumTemp() {
    return this.temperature === this.MINIMUM_TEMP;
  }
  isPowerSaverOn() {
    return this.powerSavingMode === true;
  }
  turnPowerSaverOff() {
    return this.powerSavingMode = false;
  }
  turnPowerSaverOn() {
    return this.powerSavingMode = true;
  }
  isMaxTemp() {
    if (this.isPowerSaverOn() === false) {
      return this.temperature === this.PS_OFF_MAX;
    }
    return this.temperature === this.PS_ON_MAX;
  }
  reset() {
    return this.temperature = 20;
  }
  energyUsage() {
    if (this.currentTemp() <= this.LOW_USAGE) {
      return "Low usage";
    }
    else if (this.currentTemp() <= this.PS_ON_MAX) {
      return "Medium usage";
    }
    return "High usage";
  }
}
;








