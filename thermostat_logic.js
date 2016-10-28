// UP BUTTON CHANGES NUMBER ON DISPLAY
var thermostat = new Thermostat();

$( "#up" ).click(function() {
  thermostat.up(1);
  $("#display_text").html(thermostat.tempReader());
});

// DOWN BUTTON CHANGES NUMBER ON DISPLAY
$( "#down" ).click(function() {
  thermostat.down(1);
  $("#display_text").html(thermostat.tempReader());
});

$('input[name="my-checkbox"]').on('switchChange.bootstrapSwitch', function(event, state) {
  console.log(this); // DOM element
  console.log(event); // jQuery event
  console.log(state); // true | false
});
CODE TO PUT CHECKBOX ON PAGE
$("[name='my-checkbox']").bootstrapSwitch('state', true, false);
console.log(state)
$('#on-off').click(function() {
  console.log(state);
  thermostat.changePowerMode();
  console.log(state);
  if (thermostat._powerSavingMode == true) {
    thermostat._powerSavingMode = false;
  } else {
    thermostat._powerSavingMode = true;
  }
});
