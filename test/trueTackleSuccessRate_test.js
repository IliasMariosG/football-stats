const { stats } = require('./stats');
const assert = require('assert');
const Calculate = require('../trueTackleSuccessRate')

describe ('Calculate', () => {
  
  const { statsTackles } = stats();

  describe('#getTacklesSuccessful', () => {
    it('returns the tackles made', () => {
      actual = Calculate.getTacklesSuccessful(statsTackles);

      expected = [30, 40, 18, 57];

      assert.deepEqual(actual, expected);
    })
  });
})