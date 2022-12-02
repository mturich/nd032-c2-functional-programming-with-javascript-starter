// 1. Write a map function to reverse this array:
const start = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// your code
const reversed = start.map(num => start.length - num + 1)
console.log('Exercise 1: ', reversed)
// expected output: Array [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

// ----------------------------------------------------------
// 2. Write a map function to print the Job: Name:
const shipMates = [
   ['Mal', 'Captain'],
   ['Wash', 'Pilot'],
   ['Zoey', '1st Mate'],
   ['Jayne', 'Public Relations'],
]

// your code
const jobName = shipMates.map(el => `${el[1]}: ${el[0]}`)
console.log('Exercise 2: ', jobName)
// expected output: Array ["Captain: Mal", etc...]

// ----------------------------------------------------------
// 3. Write a map function that prints the name: even|odd
const awayTeam = ['Picard', 'Riker', 'Troy', 'Data']

// your code
const evenOdd = awayTeam.map(
   name => `${name}: ${name.length % 2 === 0 ? 'even' : 'odd'}`
)
console.log('Exercise 3: ', evenOdd)
// expected output: Array: ["Picard: even", "Riker: odd", etc...]

// ----------------------------------------------------------
// 4. Create a multidimensional array of each item and its index in the original Array.

const sci_fi_shows = [
   'Manedlorian',
   'Enterprise',
   'Firefly',
   'Battlestar Galactica',
]

// your code
const multiDimArray = sci_fi_shows.map((el, i) => [el, i])
console.log('Exercise 4: ', multiDimArray)
// expected output: Array [['Manedlorian', 0], ['Enterprise', 1], ['Firefly', 2], ['Battlestar Galactica', 3]]

// ----------------------------------------------------------
// 5. For each item in this array, create a multidimensional array containing the entire original array.

const numbers = [1, 2, 3, 4]

// your code
nTimesCopied = numbers.map((el, i, arr) => arr)
console.log('Exercise 5: ', nTimesCopied)
// expected output: Array [[1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4]

// Having trouble with creating a 2D array?
// Take a closer look at the last two arguments of map, one of them might be able to help
