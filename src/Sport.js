/* global View Pool Team Match */
class Sport {// eslint-disable-line no-unused-vars
  constructor (newName, newVenue) {
    this.name = newName
    this.venue = newVenue
    this.allMyMatches = []
    this.allMyPools = []
    this.allMyTeams = []
    this.allNZMatches = []
  }

  toString () {
    let result = this.name + ' at ' + this.venue
    return result
  }

  addTeam (newTeam) {
    if (this.thisPoolsTeams.includes(newTeam) === false) {
      let thisNewTeam = new Team(newTeam)
      this.thisPoolsTeams.push(thisNewTeam)
      return thisNewTeam
    }
  }

  findTeam (targetName) {
    let result = this.allMyTeams.find(aTeam => aTeam.name === targetName)
    return result
  }

  sortTeams () {
    this.allMyTeams.sort(function (a, b) {
      if (a.name < b.name) {
        return -1
      }
      if (a.name > b.name) {
        return 1
      }
      return 0
    })
  }

  getTeams () {
    let teamResult = 'These are all the Teams for ' + this.name + ':' + View.NEWLINE()
    this.sortTeams()
    for (let aTeam of this.allMyTeams) {
      teamResult += aTeam.toString() + View.NEWLINE()
    }
    return teamResult
  }

  findPool (targetName) {
    let result = this.allMyPools.find(aPool => aPool.name === targetName)
    return result
  }

  addPool (newPool) {
    if (!this.allMyPools.includes(this.NewPool)) {
      let thisNewPool = new Pool(newPool)
      this.allMyPools.push(thisNewPool)
      return thisNewPool
    } else {
      this.findPool(newPool)
    }
    return newPool
  }

  sortPools () {
    this.allMyPools.sort(function (a, b) {
      if (a.name < b.name) {
        return -1
      }
      if (a.name > b.name) {
        return 1
      }
      return 0
    })
  }

  getPools () {
    let poolResult = ''
    this.sortPools()
    for (let aPool of this.allMyPools) {
      poolResult += aPool.toString()
      poolResult += aPool.getTeams()
      poolResult += View.NEWLINE()
    }
    return poolResult
  }

  addMatch (newYear, newMonth, newDay, newHour, newMinute, newPoolName, newTeamNameA, newTeamNameB) {
    let whenMatch = new Date(newYear, newMonth, newDay, newHour, newMinute)
    let thePool = this.findPool(newPoolName)
    if (!thePool) {
      thePool = new Pool(newPoolName)
      this.allMyPools.push(thePool)
    }
    let teamA = this.findTeam(newTeamNameA)
    if (!teamA) {
      teamA = new Team(newTeamNameA)
      this.allMyTeams.push(teamA)
      thePool.thisPoolsTeams.push(teamA)
    }
    let teamB = this.findTeam(newTeamNameB)
    if (!teamB) {
      teamB = new Team(newTeamNameB)
      this.allMyTeams.push(teamB)
      thePool.thisPoolsTeams.push(teamB)
    }
    let aNewMatch = new Match(whenMatch, thePool, teamA, teamB)
    this.allMyMatches.push(aNewMatch)
  }

  sortMatches () {
    this.allMyMatches.sort(function (a, b) {
      if (a.pool < b.pool) {
        return -1
      }
      if (a.pool > b.pool) {
        return 1
      }
      return 0
    })
  }

  getMatches () {
    this.sortMatches()
    let matchesResult = 'These are all the matches for ' + this.name + ':' + View.NEWLINE()
    for (let aMatch of this.allMyMatches) {
      matchesResult += aMatch.toString() + View.NEWLINE()
    }
    return matchesResult
  }

  getNZMatches () {
    for (let aMatch of this.allMyMatches) {
      if (aMatch.hasTeamt('New Zealand') == true) {
        this.allNZMatches.push(aMatch)
      }
    }
    let NZMatchesResult = ''
    for (let match of this.allNZMatches) {
      NZMatchesResult += match.toString() + View.NEWLINE()
    }
    return NZMatchesResult
  }

  addPoolResult (winTeam, loseTeam, ScoreA, ScoreB) {
    for (let match of this.allMyMatches) {
      if ((match.hasTeamt(winTeam) && match.hasTeamt(loseTeam))) {
        match.addScore(ScoreA, ScoreB)
		match.determineTeamOrder(winTeam, loseTeam)
        if (ScoreA - ScoreB > 0) {
          let winningTeam = this.findTeam(winTeam)
          let losingTeam = this.findTeam(loseTeam)
          winningTeam.allMyResults.push('win')
          losingTeam.allMyResults.push('lose')
        } else if (ScoreA - ScoreB == 0) {
          let drawingTeamA = this.findTeam(winTeam)
          let drawingTeamB = this.findTeam(loseTeam)

          drawingTeamA.allMyResults.push('draw')
          drawingTeamB.allMyResults.push('draw')
        }
      }
    }
  }
  }
