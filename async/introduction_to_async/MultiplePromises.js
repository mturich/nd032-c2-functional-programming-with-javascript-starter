function randomNum(min, max) {
   return Math.floor(Math.random() * (max - min + 1)) + min
}
function randomReturn(resolve, reject) {
   return Math.random() * 10 > 5 ? resolve : reject
}

const p1 = new Promise((resolve, reject) => {
   setTimeout(randomReturn(resolve, reject), randomNum(500, 4000), 'A')
})

const p2 = new Promise((resolve, reject) => {
   setTimeout(randomReturn(resolve, reject), randomNum(500, 4000), 'B')
})

const p3 = new Promise((resolve, reject) => {
   setTimeout(randomReturn(resolve, reject), randomNum(500, 4000), 'C')
})

const p4 = new Promise((resolve, reject) => {
   setTimeout(randomReturn(resolve, reject), randomNum(500, 4000), 'D')
})

// Above are a bunch of Promises that will either resolve or reject randomly, and fulfill
// in a random amount of time between half a second and 4 seconds.

const all = [p1, p2, p3, p4]

// Challenge 1
// Implement the method to get a list of results of all the promises and console log how many failed and how many rejected

Promise.allSettled(all).then(data => {
   console.log('\n', 1)
   console.log(data, '\n')
})

// Challenge 2
// Implement the method to get a list of results from all the Promises unless one fails. Log the list of successful results or the error message if one fails.

Promise.all(all)
   .then(data => {
      console.log('\n', 2)
      console.log(data, '\n')
   })
   .catch(error => {
      console.log('\n', 2)
      console.log('There was 1 Promise rejected')
      console.error(error)
   })

// Challenge 3
// Implement the method to figure out which Promise fulfilled first, print the message it fulfills with.

Promise.race(all)
   .then(data => {
      console.log('\n', 3)
      console.log(data, '\n')
   })
   .catch(error => {
      console.log('\n', 2)
      console.log(error)
   })
