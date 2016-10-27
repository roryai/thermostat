describe('thermostat: ',function(){

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

    it('starts at 20 degrees',function(){
      expect(thermostat.tempReader()).toEqual(20)
    })

    it('expects power saving mode to be on', function() {
      expect(thermostat.isSavingPower()).toEqual(true)
    });


  describe('temperature change: ', function(){

    beforeEach(function(){
      thermostat._temperature = 20
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
        thermostat.down(11)
      }).toThrowError(
    'Minimum temperature is 10- temperature set to 10.')
    });

    it('sets temperature to 10 when user attempts to set it lower than 10',function() {
     try { thermostat.down(400) }
     catch(Error) {
        expect(thermostat.tempReader()).toEqual(10)
      }
    })

    it('limits max temp to 25 if power saving is on',function() {
      expect(function() {
        thermostat.up(6)
      }).toThrowError('Power saving mode is active: max temperature is 25. Temperature set to 25.')
    });

    it('limits max temp to 32 if power saving mode is off', function() {
      thermostat.
      expect(function() {
        thermostat.up(13)
      }).toThrowError('Max temperature is 32- temperature set to 32')
    });

  });

})
