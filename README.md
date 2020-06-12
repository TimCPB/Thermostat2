# Thermostat



## Specification:

```
Thermostat starts at 20 degrees
You can increase the temperature with an up function
You can decrease the temperature with a down function
The minimum temperature is 10 degrees
The maximum temperature is 32 degrees
Power saving mode is on by default
If power saving mode is on, the maximum temperature is 25 degrees
You can reset the temperature at 20 with a reset function
You can reset the temperature to 20 with a reset function
You can ask about the thermostat's current energy usage: < 18 is low-usage, < 25 is medium-usage, anything else is high-usage.
(In the challenges where we add an interface, low-usage will be indicated with green, medium-usage indicated with black, high-usage indicated with red.) -->
```
### JQuery-based Interface
```
User should be able to alter settings and see displays such as current tempertature and power saving mode change in real time
```
### API integration
```
Use JQuery AJAX requests to integrate an API from Open Weather and display current temperatures your current location and for cities around the world, depending on user input
```

Working API key:

$.get('http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=c2d102055ae8d191cb13bfd37d12059d&units=metric', function(data) {
  console.log(data.main.temp);
})
