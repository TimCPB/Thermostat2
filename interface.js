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
  $.get('http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=c2d102055ae8d191cb13bfd37d12059d&units=metric', function(data) {
  $('#current-temperature').text(data.main.temp);
})

  $('#current-city').change(function() {
    var city = $('#current-city').val();
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=c2d102055ae8d191cb13bfd37d12059d&units=metric', function(data) {
      $('#current-temperature').text(data.main.temp);
  })
  })

  function updateTemperature() {
    $('#Temperature').text(thermostat.temperature);
    if(thermostat.energyUsage() === 'Low usage') {
      $('#Temperature').css('color', 'green')
    } else if(thermostat.energyUsage() === 'Medium usage') {
      $('#Temperature').css('color', 'orange')
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

