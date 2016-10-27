describe('thermostat: ',function(){

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

    it('starts at 20 degrees',function(){
      expect(thermostat.DEFAULT_TEMP).toEqual(20)
    })

    it('expects power saving mode to be on', function() {
      expect(thermostat.isSavingPower()).toEqual(true)
    });

    it('is low-usage if temperature is under 18', function(){
      thermostat._temperature = 18;
      for (var i = 18; i > thermostat.MIN_TEMP; i--) {
        thermostat.down(1)
        expect(thermostat.energyUsage()).toEqual("low")
      }
    })

    it('is medium-usage if temperature is between 18 and 25 inclusive', function(){
      thermostat._temperature = 17;
      for (var i = 17; i < thermostat.POWER_SAVING_MAX_TEMP; i++) {
        thermostat.up(1)
        expect(thermostat.energyUsage()).toEqual("medium")
      }
    })

    it('is high-usage if temperature is above 25', function(){
      thermostat._temperature = 25;
      thermostat.changePowerMode();
      for (var i = 25; i < thermostat.MAX_TEMP; i++) {
        thermostat.up(1)
        expect(thermostat.energyUsage()).toEqual("high")
      }
    })


  describe('temperature change: ', function(){

    beforeEach(function(){
      thermostat._temperature = thermostat.DEFAULT_TEMP
    })

    it('can increase temperature',function(){
      thermostat.up(5)
      expect(thermostat.tempReader()).toEqual(25)
    })

    it('can decrease temperature',function(){
      thermostat.down(2)
      expect(thermostat.tempReader()).toEqual(18)
    })

    it('prevents temperature going below 10',function(){
      expect(function(){
        thermostat.down(thermostat.MIN_TEMP + 1)
      }).toThrowError(
    'Minimum temperature is 10- temperature set to 10.')
    });

    it('sets temperature to 10 when user attempts to set it lower than 10',function() {
      try { thermostat.down(400) }
      catch(Error) {
        expect(thermostat.tempReader()).toEqual(thermostat.MIN_TEMP)
      }
    })

    it('limits max temp to 25 if power saving is on',function() {
      expect(function() {
        thermostat.up(6)
      }).toThrowError('Power saving mode is active: max temperature is 25. Temperature set to 25.')
    });

    it('sets temperature to 25 when user attempts to set it higher than 25 in power saving mode',function() {
      try { thermostat.up(400) }
      catch(Error) {
        expect(thermostat.tempReader()).toEqual(thermostat.POWER_SAVING_MAX_TEMP)
      }
    })

    it('limits max temp to 32 if power saving mode is off', function() {
      thermostat.changePowerMode();
      expect(function() {
        thermostat.up(13)
      }).toThrowError('Max temperature is 32- temperature set to 32')
    });

    it('sets temperature to 32 when user attempts to set it higher than 32',function() {
      thermostat.changePowerMode();
      try { thermostat.up(400) }
      catch(Error) {
        expect(thermostat.tempReader()).toEqual(thermostat.MAX_TEMP)
      }
    })

    it('can reset the temperature to 20', function(){
      thermostat.up(5)
      thermostat.reset()
      expect(thermostat.tempReader()).toEqual(20)
    });

  });

})
