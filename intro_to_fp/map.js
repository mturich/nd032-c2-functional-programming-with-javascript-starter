

const captains = ['Picard', 'Adama', 'Reynolds', 'Beeblebrox']

// create new array
const titles = captains.map(cap => `Captain ${cap}`)

// equivalent to
/* const titles2 = captains.map(cap => {
    return `Captain ${cap}`
}) */

console.log('Resulting Array: ', titles)
// expected output: Resulting Array: ['Captain Picard', 'Captain Adama', 'Captain Reynolds', 'Captain Beeblebrox']
console.log('Original Array:', captains)
// 