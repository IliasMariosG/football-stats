# Football Stats

### Note: This project will be back better and stronger with OOP, classes etc. I still love football

## Description

Minutes per tackle for four players for season 2020 - 2021 in Premier League.

The minutes per tackle metric (minspt) is calculated as follows:

```text
minspt = minutes played / tackles
```

True tackle success rate for four players for season 2020 - 2021 in Premier League.

The true tackle success rate (ttsr) is calculated as follows:

```text
ttsr = total tackles / (total tackles + duels lost + fouls committed)
```

## Output

```zsh
node minutesPerTackles.js
```

```terminal
[
  { name: 'Thiago Alcântara', minsPerTackle: 31 },
  { name: 'İ. Gündoğan', minsPerTackle: 92 },
  { name: 'Aaron Wan-Bissaka', minsPerTackle: 29 },
  { name: 'Rodri', minsPerTackle: 41 }
]
```

## Tests

```terminal
npm test
```

```terminal
Calculate
    #getMinutesPlayed
      ✓ returns the minutes the player has played
    #getTackles
      ✓ returns the tackles each player has made
    #getMinutesPerTackle
      ✓ returns the minutes each player has played divided by the tackles they have made
    #formatMinutesPerTackle
      ✓ returns the minutes per tackle with two decimals with the name of the player


  4 passing (33ms)
```

## Coverage

```terminal
npm run test-with-coverage
```

```terminal
----------------------|---------|----------|---------|---------|-------------------
File                  | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
----------------------|---------|----------|---------|---------|-------------------
All files             |     100 |      100 |     100 |     100 |                   
 minutesPerTackles.js |     100 |      100 |     100 |     100 |                   
----------------------|---------|----------|---------|---------|-------------------
```
