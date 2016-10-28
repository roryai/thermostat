// UP BUTTON CHANGES NUMBER ON DISPLAY
$( "#up" ).click(function() {
  thermostat.up(1);
  $("#display_text").html(thermostat.tempReader());
});

// DOWN BUTTON CHANGES NUMBER ON DISPLAY


// CODE TO PUT CHECKBOX ON PAGE
$("[name='my-checkbox']").bootstrapSwitch();
