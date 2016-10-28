// UP BUTTON CHANGES NUMBER ON DISPLAY
$( "#up" ).click(function() {
  thermostat.up(1);
  $("#display_text").html(thermostat.tempReader());
});

// DOWN BUTTON CHANGES NUMBER ON DISPLAY
$( "#down" ).click(function() {
  thermostat.down(40);
  // this code allows line 14 to run when integer on line 9 is too large
  if(!Error) {
  try {thermostat.down(1)}
  catch(Error) {
    $("#display_text").html(thermostat.tempReader());
  }
}
$("#display_text").html(thermostat.tempReader());
});

// CODE TO PUT CHECKBOX ON PAGE
$("[name='my-checkbox']").bootstrapSwitch();
