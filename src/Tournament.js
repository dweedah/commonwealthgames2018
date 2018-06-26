/* global Sport View */
class Tournament {// eslint-disable-line no-unused-vars
  constructor (newName) {
    this.name = newName
    this.allMySports = []
  }

  addSport (newName, newVenue) {
    let newSport = new Sport(newName, newVenue)
    this.allMySports.push(newSport)
    return newSport
  }

  getSports () {
    let result = 'These are the Sports at the ' + this.name + View.NEWLINE()
    for (let sport of this.allMySports) {
      result += sport.toString() + View.NEWLINE()
    }
    return result
  }

  findSport (targetName) {
    let result = this.allMySports.find(aSport => aSport.name === targetName)
    return result
  }

  getPools () {
    let result = ('Part 5: Pools for the ' + this.name + View.NEWLINE())
    for (let sport of this.allMySports) {
      sport.sortPools()
      result += 'These are the Pools at the ' + sport.toString() + View.NEWLINE()
      result += sport.getPools() + View.NEWLINE()
    }
    return result
  }

  getTeams () {
    let result = 'Part 4: Teams for the ' + this.name + View.NEWLINE()
    for (let sport of this.allMySports) {
      sport.sortTeams()
      // 'These are the Teams at the ' + sport.toString() + View.NEWLINE()
      result += sport.getTeams() + View.NEWLINE()
    }
    return result
  }

  getMatches () {
    let result = 'Part 6: Matches for the ' + this.name + View.NEWLINE()
    for (let sport of this.allMySports) {
      sport.sortMatches()
      result += View.NEWLINE() + 'These are the Pools at the ' + sport.toString() + View.NEWLINE()
      result += sport.getMatches() + View.NEWLINE()
    }
    return result
  }
  getAllNZMatches () {
    let result = 'Part 7: NZ Matches' + View.NEWLINE()
    for (let sport of this.allMySports) {
      sport.sortMatches()
      result += 'These are the NZ Matches at the ' + sport.toString() + View.NEWLINE()
      result += sport.getNZMatches() + View.NEWLINE()
    }
    return result
  }

  getPoolResults () {
    let result = 'Part 1: Match Results By Pool ' + this.name + View.NEWLINE()
    for (let aSport of this.allMySports) {
      result += View.NEWLINE() + aSport.toString() + View.NEWLINE() + View.NEWLINE()
      aSport.getMatches()
      aSport.sortPools()
      for (let aPool of aSport.allMyPools) {
        result += aPool.toString()
        for (let aMatch of aSport.allMyMatches) {
          if (aMatch.hasPoolt(aPool)) {
            result += aMatch.scoreToString()
          }
        }
        result += View.NEWLINE()
      }
    }
    return result
  }

  getPoolStandings () {
    let result = 'Part 2: Pool Standings for ' + this.name + View.NEWLINE()
    for (let aSport of this.allMySports) {
      result += View.NEWLINE() + aSport.toString() + View.NEWLINE() + View.NEWLINE()
      aSport.sortPools()
      aSport.getMatches()
      for (let aPool of aSport.allMyPools) {
        result += aPool.toString()
        for (let aTeam of aPool.thisPoolsTeams) {
          aTeam.calculatePoints()
        }
        aPool.sortTeamsByPoints()
        result += View.padRight('Team') + View.padRight('Played') + View.padRight('Wins') + View.padRight('Losses') + View.padRight('Draws') + View.padRight('Points') + View.NEWLINE()
        result += '===========================================================================================================' + View.NEWLINE()
        for (let aTeam of aPool.thisPoolsTeams) {
          result += aTeam.pointsToString() + View.NEWLINE()
        }
        result += View.NEWLINE()
      }
      result += View.NEWLINE()
    }
    return result
  }

  getAll () {
    let result = this.getPoolResults()
    result += this.getPoolStandings()
    return result
  }
}
