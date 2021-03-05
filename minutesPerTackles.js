const playersStats = require('./playerStats');

function getMinutesPlayed (playersStats) {
  minutesPlayed = []
  for (const property of playersStats) {
    minutesPlayed.push(property.games.minutes_played);
  }
  return minutesPlayed
};

function getTackles (playersStats) {
  tackles = []
  for (const property of playersStats) {
    tackles.push(property.tackles.total);
  }
  return tackles
};

function getMinutesPerTackle (minutesPlayed, tackles) {
  const minsPerTackle = divideElementsOfEachArray();
  return minsPerTackle;

  function divideElementsOfEachArray() {
    return minutesPlayed.map(function (n, i) { return n / tackles[i]; });
  }
}

function formatMinutesPerTackles (minsPerTackle) {
  loopThroughObject();
  removeNumbersFromArray();
  return minsPerTackle

  function loopThroughObject() {
    let i = 0;
    for (const property of playersStats) {
      let number = Number(specifyStringPrecision());
      minsPerTackle.push({ name: property.player_name, minsPerTackle: number });
      i += 1;
    }

    function specifyStringPrecision() {
      return minsPerTackle[i].toPrecision(2);
    }
  }

  function removeNumbersFromArray() {
    minsPerTackle.splice(0, minsPerTackle.length / 2);
  }
}

const consoleLog = console.log;

// 1
// consoleLog(getMinutesPlayed(playersStats));

// 2
// consoleLog(getTackles(playersStats));

// 3
// consoleLog(getMinutesPerTackle(getMinutesPlayed(playersStats), getTackles(playersStats)))

// Calling all functions together
// consoleLog(formatMinutesPerTackles(getMinutesPerTackle(getMinutesPlayed(playersStats), getTackles(playersStats))))

module.exports = { 
  getMinutesPlayed: getMinutesPlayed,
  getTackles: getTackles,
  getMinutesPerTackle: getMinutesPerTackle,
  formatMinutesPerTackles: formatMinutesPerTackles,
}