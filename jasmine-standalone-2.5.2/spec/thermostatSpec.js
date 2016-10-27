describe('thermostat: ',function(){

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('starts at 20 degrees',function(){
    thermostat = new Thermostat()
    expect(thermostat.tempReader()).toEqual(20)
  })

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

    });

})
