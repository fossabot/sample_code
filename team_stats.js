const team = {
  _players: [
    {firstName: "Dan", lastName: "Mateer", age: 31},
    {firstName: "Lyal", lastName: "Avery", age: 34},
    {firstName: "Patrick", lastName: "Barsallo", age: 26}
  ],
  _games: [
    {opponent: "The Garys", teamPoints: 10, opponentPoints: 14},
    {opponent: "Melon Madness", teamPoints: 51, opponentPoints: 1000},
    {opponent: "Smash Mouth 2", teamPoints: 24, opponentPoints: 22}
  ],
  get games() {
    return this._games;
  },
  get players() {
    return this._players;
  },
  addPlayer(firstName, lastName, age, position) {
    let player = {
      firstName,
      lastName,
      age,
      positions
    };
    this.players.push(player);
  },
  addGame(opponent, teamPoints, opponentPoints) {
    let game = {
      opponent,
      teamPoints,
      opponentPoints
    };
    this.games.push(game);
  },
};
