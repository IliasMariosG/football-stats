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
  return { statsMinutesPlayed, statsTackles };
}
exports.stats = stats;
