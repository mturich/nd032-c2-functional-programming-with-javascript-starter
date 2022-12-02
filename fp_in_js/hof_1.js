// 1. Create a function that when passed as a callback to the Higher Order function provided, 
// makes the final return the number's square plus two

const addTwo = (callback) => {
  return callback() + 2
}

const squared = (x=2) => x * x 


const test = addTwo(squared)
console.log(test)

// 2. Create a Higher Order Function that could take this callback to return a greeting

const createFullName = (first_name, last_name, title) => {
  return `${title} ${first_name} ${last_name}`
}

const greeting = (callback, fname='Michael', lname='Urich', title='') => {

  return callback(fname, lname, title)
}
const test2 = greeting(createFullName, 'Kate', 'Urich', 'Dr')
console.log(test2)
// you might notice that this function is less than ideal - that's great! We'll talk about why next`