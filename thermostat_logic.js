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

$('#power_save').click(function() {
  thermostat.changePowerMode();
  if (thermostat._powerSavingMode) {
    $('h5').text('ON')
  } else {
    $('h5').text('OFF')
  }
});
