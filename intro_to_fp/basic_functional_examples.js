// -----------------------------------------------------------------
// Exercise 1
// Directions: Write a pure function that prints "good afternoon" if
//       its afternoon and "good morning" any other time of the day.
// Hint - this will help with time of day: new Date().getHours()
// -----------------------------------------------------------------

function greeting(time) {
   const hour = time ?? new Date().getHours()

   if (hour > 13 && time < 18) return 'Good afternoon'
   else return 'Good morning'
}

console.log(greeting())

// -----------------------------------------------------------------
// Exercise 2
// Directions: Write a pure function that takes in a number and
//       returns an array of items counting down from that number to
//       zero.
// -----------------------------------------------------------------

const arrayToZero = number => {
   const arr = []
   /*    
	for (i = number; i >= 0; i--) {
      arr.push(i)
   } 
	 */
   return [...Array(number).keys()].reverse()
}

console.log(arrayToZero(5))
