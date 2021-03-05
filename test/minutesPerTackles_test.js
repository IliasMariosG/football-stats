const { stats } = require('./stats')

const assert = require('assert');
const Calculate = require('../metrics/minutesPerTackles')

describe ('Calculate', () => {
 
    const { statsMinutesPlayed, statsTackles } = stats();
  
  describe('#getMinutesPlayed', () => {
    it('returns the minutes the player has played', () => {
      
      actual = Calculate.getMinutesPlayed(statsMinutesPlayed)
      
      expected =  [600, 600, 400, 450]
      
      assert.deepEqual(actual, expected)
    });
  });
  describe('#getTackles', () => {
    it('returns the tackles each player has made', () => {
      actual = Calculate.getTackles(statsTackles)

      expected = [30, 40, 18, 57]

      assert.deepEqual(actual, expected)
    });
  });
  beforeEach('set up', function () {
    getMinutesPlayed = Calculate.getMinutesPlayed(statsMinutesPlayed);
    getTackles = Calculate.getTackles(statsTackles);
  });
    describe('#getMinutesPerTackle', () => {
      it('returns the minutes each player has played divided by the tackles they have made', () => {
        actual = Calculate.getMinutesPerTackle(getMinutesPlayed, getTackles)

        expected = [20, 15, 22.22222222222222, 7.894736842105263 ]

        assert.deepEqual(actual, expected)
      });
    });
    describe('#formatMinutesPerTackle', () => {
      it('returns the minutes per tackle with two decimals with the name of the player', () => {
        const getMinutesPerTackle = Calculate.getMinutesPerTackle(getMinutesPlayed, getTackles)
        
        actual = Calculate.formatMinutesPerTackles(getMinutesPerTackle)

        expected = [
          {"name": "Thiago Alcântara", "minsPerTackle": 20},
          {"name": "İ. Gündoğan", "minsPerTackle": 15},
          {"name": "Aaron Wan-Bissaka", "minsPerTackle": 22},
          {"name": "Rodri", "minsPerTackle": 7.90}
        ]
    
        assert.deepEqual(actual, expected)
      });
    });
})
