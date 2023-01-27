// Task 1 - write a program that acheives the following sequence

// log "A"
// wait 2s
// log "B"
// wait 3s
// log "C"
// log "D" immediately

function consoleLog() {
   console.log('A')
   const id = setTimeout(() => {
      console.log('B')
   }, 2000)
   const id2 = setTimeout(() => {
      console.log('C')
      console.log('D')
   }, 3000)
}

//consoleLog()

// Task 2 - print each word of this quote every second using built javascript method setInterval. Print the quote source all at once afterwards

// Tip: To stop a setInterval - call clearInterval()
// Tip: To pass arguments to the function setInterval is calling, add them as a 3rd (and 4th if you need it) argument to setInterval, after the milliseconds

// "The art of programming is the skill of controlling complexity."
// "-- Marijn Haverbeke, Eloquent JavaScript"

const quote = 'The art of programming is the skill of controlling complexity.'
const reference = '-- Marijn Haverbeke, Eloquent JavaScript'

function printAllWordOfQuote() {
   let index = 0

	return quote => {
		 
      console.log(index, quote[index])
      if (index === quote.length - 1) {
         clearInterval(idTimeOut)
         console.log(reference)
      }
      index++
   }
}

const idTimeOut = setInterval(printAllWordOfQuote(), 1000, quote.split(' '))
