function stats() {
  const statsMinutesPlayed = [
    {
      "games": { "minutes_played": 600 }
    },
    {
      "games": { "minutes_played": 600 }
    },
    {
      "games": { "minutes_played": 400 }
    },
    {
      "games": { "minutes_played": 450 }
    }
  ];
  const statsTackles = [
    {
      "tackles": { "total": 30 }
    },
    {
      "tackles": { "total": 40 }
    },
    {
      "tackles": { "total": 18 }
    },
    {
      "tackles": { "total": 57 }
    }
  ];
  const statsDuelsTotal = [
    {
      "duels": { "total": 10 }
    },
    {
      "duels": { "total": 2 }
    },
    {
      "duels": { "total": 20 }
    },
    {
      "duels": { "total": 10 }
    },
  ];
  const statsDuelsWon = [
    {
      "duels": { "won": 5 }
    },
    {
      "duels": { "won": 1 }
    },
    {
      "duels": {"won": 4 }
    },
    {
    },
  ];
  const foulsCommitted = [
    {
      "fouls": { "committed" : 5 }
    },
    {
      "fouls": { "committed" : 4 }
    },
    {
      "fouls": { "committed" : 5 }
    },
    {
      "fouls": { "committed" : 5 }
    },
  ]
  return { statsMinutesPlayed, statsTackles, statsDuelsTotal, statsDuelsWon, foulsCommitted };
}
exports.stats = stats;
