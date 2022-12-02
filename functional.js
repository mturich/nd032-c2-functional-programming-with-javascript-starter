function greet(name, hour) {
   const greeting = getSaluation(hour)
   return `${greeting} ${name}`
}

function getSaluation(hour) {
   if (hour <= 10) return 'Good Morning,'
   else if (hour > 18) return 'Good Evening,'
   else return 'Hello,'
}

const greeting10 = greet('Michael Urich', 10)
const greeting15 = greet('Michael Urich', 15)
const greeting19 = greet('Michael Urich', 19)
console.log(greeting10, '\n', greeting15, '\n', greeting19)
