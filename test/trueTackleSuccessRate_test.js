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

      // const duels_one = (statsFn2[0].duels.total - statsFn2[0].duels.won) / (statsFn2[0].duels.total)
      // const fouls_one = statsFn2[0].fouls.committed
      // const ttsr_one = statsTackles[0].tackles.total / (statsTackles[0].tackles.total + duels_one + fouls_one)
      // const duels_two = (statsFn2[1].duels.total - statsFn2[1].duels.won) / (statsFn2[1].duels.total)
      // const fouls_two = statsFn2[1].fouls.committed
      // const ttsr_two = statsTackles[1].tackles.total / (statsTackles[1].tackles.total + duels_two + fouls_two)
      // const duels_three = (statsFn2[2].duels.total - statsFn2[2].duels.won) / (statsFn2[2].duels.total)
      // const fouls_three = statsFn2[2].fouls.committed
      // const ttsr_three = statsTackles[2].tackles.total / (statsTackles[2].tackles.total + duels_three + fouls_three)
      // const duels_four = (statsFn2[3].duels.total - statsFn2[3].duels.won) / (statsFn2[3].duels.total)
      // const fouls_four = statsFn2[3].fouls.committed
      // const ttsr_four = statsTackles[3].tackles.total / (statsTackles[3].tackles.total + duels_four + fouls_four)

      // actual = Calculate.getTrueTackleSuccessRate([ttsr_one, ttsr_two, ttsr_three, ttsr_four]);
      
      actual = Calculate.getTrueTackleSuccessRate([30, 40, 18, 57]);
      
      expected = [
        {"name": "Thiago Alcântara", "trueTackleSuccessRate": 0.5217391304347826 },
        {"name": "İ. Gündoğan", "trueTackleSuccessRate": 0.8608205953338697 },
        {"name": "Aaron Wan-Bissaka", "trueTackleSuccessRate": 0.468682505399568 },
        {"name": "Rodri", "trueTackleSuccessRate": 0.6756082345601996 }
      ];
      
      // console.log(actual)

      // expected = [
      //   {"name": "Thiago Alcântara", "trueTackleSuccessRate": 0.018619084561675717 },
      //   {"name": "İ. Gündoğan", "trueTackleSuccessRate": 0.11746829105131504 },
      //   {"name": "Aaron Wan-Bissaka", "trueTackleSuccessRate": 0.022452703608005328 },
      //   {"name": "Rodri", "trueTackleSuccessRate": 0.02409098306243612 }
      // ];

      assert.deepEqual(actual, expected);
    })
  });
  describe('#keepTwoDecimals', () => {
    it('returns two decimals', () => {
      
      actual = Calculate.keepTwoDecimals([
        {"name": "Thiago Alcântara", "trueTackleSuccessRate": 0.5217391304347826 },
        {"name": "İ. Gündoğan", "trueTackleSuccessRate": 0.8608205953338697 },
        {"name": "Aaron Wan-Bissaka", "trueTackleSuccessRate": 0.468682505399568 },
        {"name": "Rodri", "trueTackleSuccessRate": 0.6756082345601996 }
      ]);
      
      expected = [
        {"name": "Thiago Alcântara", "trueTackleSuccessRate": '0.52'},
        {"name": "İ. Gündoğan", "trueTackleSuccessRate": '0.86' },
        {"name": "Aaron Wan-Bissaka", "trueTackleSuccessRate": '0.47' },
        {"name": "Rodri", "trueTackleSuccessRate": '0.68' }
      ];

      assert.deepEqual(actual, expected)
    })
  })
})