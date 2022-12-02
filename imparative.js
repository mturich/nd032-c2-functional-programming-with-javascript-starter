let fullName = 'Captain Kirk'
let hour = new Date().getHours()

let greeting = ''

if (hour <= 10) {
   greeting = 'Good Morning, '
} else if (hour >= 17) {
   greeting = ' Good evening, '
} else {
   greeting = 'Hello '
}

console.log(`${greeting} ${fullName}`)
