/* global Team View */
class Pool {// eslint-disable-line no-unused-vars
  constructor (newName) {
    this.name = newName
    this.thisPoolsTeams = []
  }

  addTeam (newTeam) {
    let thisNewTeam = new Team(newTeam)
    if (this.thisPoolsTeams.includes(thisNewTeam) === false) {
      this.thisPoolsTeams.push(thisNewTeam)
      return thisNewTeam
    }
  }

  findTeam (targetName) {
    let result = this.thisPoolsTeams.find(aTeam => aTeam.name === targetName)
    return result
  }

  sortTeams () {
    this.thisPoolsTeams.sort(function (a, b) {
      if (a.name < b.name) {
        return -1
      }
      if (a.name > b.name) {
        return 1
      }
      return 0
    })
  }

  sortTeamsByPoints () {
    this.thisPoolsTeams.sort(function (a, b) {
      if (a.points > b.points) {
        return -1
      }
      if (a.points < b.points) {
        return 1
      }
      return 0
    })
  }

  getTeams () {
    this.sortTeams()
    let teamResult = ''
    for (let aTeam of this.thisPoolsTeams) {
      teamResult += aTeam.toString() + View.NEWLINE()
    }
    return teamResult
  }

  toString () {
    let result = 'Pool ' + this.name + View.NEWLINE()
    return result
  }
}
