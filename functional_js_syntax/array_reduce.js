// 1. Take this disjointed sentence and turn it into a single string
const text = [
   'The ships',
   'hung in the sky,',
   'much the way',
   'that bricks don`t',
]

// Your Code Here
const concatString = text.reduce((sum, curr) => sum + curr + ' ', '')
console.log('1. ', concatString)
// expected output: "The ships hung in the sky, much the way that bricks don't"

// ----------------------------------------------------------

// 2. Return the winning team
const scores = [
   {
      team: 'A',
      score: 20,
   },
   {
      team: 'B',
      score: 17,
   },
   {
      team: 'C',
      score: 23,
   },
   {
      team: 'D',
      score: 13,
   },
]

// Your Code Here
const winnerOk = scores.reduce((winner, team) => {
   if ((winner?.score ?? 0) < team.score) return team
   else return winner
}, {})

const winnerBetter = scores.reduce((winner, team) => {
   if (winner.score < team.score) return team
   else return winner
})

console.log('2. ', winnerBetter.team)
// expected output: "C"

// ----------------------------------------------------------
//    REAL LIFE EXAMPLE
// Reduce can sometimes save us a lot of time -- if we remember to use it.
// Instead of writing a complicated map or filter method and then calling the
// name of the ship out of the retuned array, Return the name of the fastest
// star ship

const ships = [
   {
      name: 'Serenity',
      speed: '4.2G',
   },
   {
      name: 'Cylon Raider',
      speed: '7.5G',
   },
   {
      name: 'Swordfish II',
      speed: '50G',
   },
   {
      name: 'Tie Fighters',
      speed: '4100G',
   },
]

// Your Code Here

const fastestShip = ships.reduce((fastest, currShip, i) => {
   //console.log(i, fastest, currShip)

   const getSpeed = num => +num.slice(0, -1)

   if (getSpeed(fastest.speed) < getSpeed(currShip.speed)) return currShip
   else return fastest
})

console.log('3. ', fastestShip.name)
// Expected output: Tie Fighters
