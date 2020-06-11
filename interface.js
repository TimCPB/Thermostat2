$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();
  $('#temperature-up').on('click', function() { // event listener
    thermostat.up(); // update model
    updateTemperature(); // update view
  })
  $('#temperature-down').on('click', function(){
    thermostat.down();
    updateTemperature();
  })
  $('#temperature-reset').on('click', function(){
    thermostat.reset();
    updateTemperature();
  })
  $('#powersaving-on').on('click', function(){
    thermostat.turnPowerSaverOn();
    $('#power-saving-status').text('on')
    updateTemperature();
  })
  $('#powersaving-off').on('click', function(){
    thermostat.turnPowerSaverOff();
    $('#power-saving-status').text('off')
    updateTemperature();
  })

  function updateTemperature() {
    $('#Temperature').text(thermostat.temperature);
    if(thermostat.energyUsage() === 'low-usage') {
      $('#Temperature').css('color', 'green')
    } else if(thermostat.energyUsage() === 'medium-usage') {
      $('#Temperature').css('color', 'black')
    } else {
      $('#Temperature').css('color', 'red')
    }
  }

  // function updateTemperature() {
  //   $('#Temperature').text(thermostat.temperature);
  // }
})

// function updateTemperature() {
//   $('#temperature').text(thermostat.temperature);
//   $('#temperature').attr('class', thermostat.energyUsage());
// }



