$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();
  $('#temperature-up').on('click', function() { // event listener
    thermostat.up(); // update model
    updateTemperature(); // update view
  })
  function updateTemperature() {
    $('#Temperature').text(thermostat.temperature);
  }
})



