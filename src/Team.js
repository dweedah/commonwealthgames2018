/* global View */
class Team {// eslint-disable-line no-unused-vars
  constructor (newName) {
    this.name = newName
    this.winCount = 0
    this.loseCount = 0
    this.drawCount = 0
    this.points = 0
    this.allMyResults = []
  }

  toString () {
    let result = this.name
    return result
  }

  calculatePoints () {
    for (let result of this.allMyResults) {
      if (result == 'win') {
        this.winCount += 1
      }	else if (result == 'lose') {
        this.loseCount += 1
      } else if (result == 'draw') {
        this.drawCount += 1
      }
    }
    let totalpoints = this.winCount * 2 + this.drawCount * 1 + this.loseCount * 0
    this.points += totalpoints
    return this.points
  }

  pointsToString () {
    let result = View.padRight(this.name) + View.padRight(this.allMyResults.length) + View.padRight(this.winCount) + View.padRight(this.loseCount) + View.padRight(this.drawCount) + View.padRight(this.points)
    return result
  }
}
