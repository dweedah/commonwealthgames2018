/* global View */
class Match { // eslint-disable-line no-unused-vars
  constructor (newWhen, thePool, theTeamA, theTeamB) {
    this.when = newWhen
    this.pool = thePool
    this.teamA = theTeamA
    this.teamB = theTeamB
    this.scoreA = 0
    this.scoreB = 0
    this.winTeam = ''
    this.loseTeam = ''
  }

  hasTeamt (targetName) {
    this.target = targetName
    let result = (this.teamA == this.target || this.teamB == this.target)
    return result
  }

  hasPoolt (targetName) {
    this.target = targetName
    let result = (this.pool == this.target)
    return result
  }

  toString () {
    let result = this.when + ' ' + this.pool + ' ' + this.teamA + ' ' + this.teamB
    return result
  }

  scoreToString () {
    let scoreString = (this.winTeam + View.SPACE() + this.scoreA + ':' + this.scoreB + View.SPACE() + this.loseTeam) + View.NEWLINE()
    return scoreString
  }

  determineTeamOrder (winningTeam, LosingTeam) {
	  this.winTeam += winningTeam
	  this.loseTeam += LosingTeam
  }

  addScore (scoreA, scoreB) {
    this.scoreA += scoreA
    this.scoreB += scoreB
    this.scoreToString()
  }
}
