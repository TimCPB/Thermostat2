describe("thermostat",function(){

  it ("thermostat should start at 20 degrees", function(){
    var thermostat = new Thermostat();
    expect(thermostat.currentTemp()).toEqual(20);
  });

  it ("should increase temperature with an up function", function(){
    var thermostat = new Thermostat();
    thermostat.up();
    expect(thermostat.currentTemp()).toEqual(21);
  });

  it ("should decrease the temperature with a down function", function(){
    var thermostat = new Thermostat();
    thermostat.down();
    expect(thermostat.currentTemp()).toEqual(19);
  });

  it ("has a minimum temperature of 10 degrees", function(){
    var thermostat = new Thermostat();
    for (var i = 0; i < 11; i++) {
      thermostat.down();
    }
    expect(thermostat.currentTemp()).toEqual(10);
  });

  it ("should have power-saver is on by default", function() {
    var thermostat = new Thermostat();
    expect(thermostat.isPowerSaverOn()).toEqual(true);
  });

  // it ("should throw an error if temperature is incresed to higher than 32", function(){
  //   var thermostat = new Thermostat();
  //   expect(function() {thermostat.up(13)}).toThrow("Temperature would be too high!")
  // });
});
