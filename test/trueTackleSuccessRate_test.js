const { stats } = require('./stats');
const assert = require('assert');
const Calculate = require('../metrics/trueTackleSuccessRate')

describe ('Calculate', () => {
  
  const { statsMinutesPlayed, statsTackles, statsDuelsTotal, statsDuelsWon, foulsCommitted } = stats();

  describe('#getTacklesSuccessful', () => {
    it('returns the tackles made', () => {
      actual = Calculate.getTacklesSuccessful(statsTackles);

      expected = [30, 40, 18, 57];

      assert.deepEqual(actual, expected);
    })
  });
  
  describe('#getTrueTackleSuccessRate', () => {
    it('returns a list of the names of players and the respective tackle success rate', () => {

      actual = Calculate.getTrueTackleSuccessRate(statsTackles);

      expected = [{"name": "Thiago Alcântara", "trueTackleSuccessRate": 1.5 },
        {"name": "İ. Gündoğan", "trueTackleSuccessRate": 0.8888888888888888 },
        {"name": "Aaron Wan-Bissaka", "trueTackleSuccessRate": 0.461538461538462},
        {"name": "Rodri", "trueTackleSuccessRate": 0.81428}
      ];

      assert.deepEqual(actual, expected);
    })
  });
})