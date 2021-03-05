var playersStats = require('../playerStats');

function getTacklesSuccessful (playersStats) {
  var tacklesSuccessful = [];
  for (const property of playersStats) {
    tacklesSuccessful.push(property.tackles.total);
  };
  return tacklesSuccessful
}

function getTrueTackleSuccessRate (tacklesSuccessful) {
  var rates = []
  let i = 0;
  for (const property of playersStats) {
    var duelsLost = (property.duels.total - property.duels.won) / property.duels.total;
    var foulsCommitted =  property.fouls.committed;
    var trueTackleSuccessRate = tacklesSuccessful[i] / (tacklesSuccessful[i] + duelsLost + foulsCommitted);

    rates.push({name: property.player_name, trueTackleSuccessRate: trueTackleSuccessRate}); //returns 0.2283464566929134
    i += 1;
  }
  return rates
}

function keepTwoDecimals (getTrueTackleSuccessRate) {
  // var ratesWithTwoDecimals = []
  for (const rate of getTrueTackleSuccessRate) {
    // console.log(rate.trueTackleSuccessRate) // Type: Number
    rate.trueTackleSuccessRate = rate.trueTackleSuccessRate.toPrecision(2); // returns '0.23'. It is of type: String
  }
  return getTrueTackleSuccessRate
}

function convertToNumbers (keepTwoDecimals) {
  for (const rate of keepTwoDecimals) {
    // console.log(number.trueTackleSuccessRate) type: String
    rate.trueTackleSuccessRate = Number(rate.trueTackleSuccessRate);
  }
  return keepTwoDecimals;
}

// It returns the percentage as a string. Not sure how to handle it after implementing .push method with key-value pairs.
// function convertToPercent (convertedToNumbers){
//   percents = [];
//   for (const percentage of convertedToNumbers) {
//     percents.push({name: percentage.name, trueTackleSuccessRate: new Intl.NumberFormat('en-IN', { style: 'percent'}).format(percentage.trueTackleSuccessRate)});
//   }
//   return percents // 
// }

function sortRates(convertToNumbers) {
  return convertToNumbers.sort((a,b) => {
    return a.trueTackleSuccessRate - b.trueTackleSuccessRate;
    } );
}

function all (){
  var x = document.getElementById('one').innerHTML = 'hi'
  return x
}

// Calling functions

// console.log(getTacklesSuccessful(playersStats));

// 1
console.log(getTrueTackleSuccessRate(getTacklesSuccessful(playersStats)));

// 2
// const firstSecond = keepTwoDecimals(getTrueTackleSuccessRate());
// console.log(firstSecond)

// const secondThird = convertToNumbers(keepTwoDecimals(getTrueTackleSuccessRate()));
// console.log(secondThird)

// Not used for now
// const thirdFourth = convertToPercent(convertToNumber(keepTwoDecimals(getTrueTackleSuccessRate())));
// console.log(thirdFourth)

// console.log(sortRates(convertToNumbers(keepTwoDecimals(getTrueTackleSuccessRate()))));

module.exports = {
  getTacklesSuccessful: getTacklesSuccessful,
  getTrueTackleSuccessRate: getTrueTackleSuccessRate,
}