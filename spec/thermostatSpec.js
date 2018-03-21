describe('Thermostat', function(){
  var thermostat


beforeEach(function(){
  thermostat = new Thermostat

});

  describe('default temperature', function(){
    it('returns a value of 20 degrees', function(){
      expect(thermostat._temperature).toEqual(20);
    });

  });
  describe('allows to change the temperature', function(){
    it('increase up the temperature', function(){
      thermostat.up(5)
      expect(thermostat._temperature).toEqual(25);
    });
  });

  describe('allows to change the temperature', function(){
    it('descrase down the temperature', function(){
      thermostat.down(5)
      expect(thermostat._temperature).toEqual(15);
    });
  });
});
