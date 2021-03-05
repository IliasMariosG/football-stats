# Football Stats

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

## Errors

### #getTrueTackleSuccessRate / returns a list of the names of players and the respective tackle success rate:
![Screenshot 2021-03-05 at 3 02 28 PM](https://user-images.githubusercontent.com/57366310/110119045-e8a2a500-7dc3-11eb-91ab-3ed80595e56e.png)

