// Use Object.keys with the map method to print "This character has a(n) [property-name]" for each property

const character = {
    id: '12mn18udcbv9823',
    name: 'Chewbacca',
    race: 'Wookie',
    planet: 'Kashyyyk',
    job: 'First Mate'
};

console.log(Object.keys(character));
// Expected Output: 
// This character has a(n) id.
// This character has a(n) name.
// This character has a(n) race.
// This character has a(n) planet.
// This character has a(n) job.
// [ 'This character has a(n) id',  'This character has a(n) name',  'This character has a(n) race', 'This character has a(n) planet', 'This character has a(n) job' ]

for (const key in character) {
    console.log(`This character has ${character[key]} key.`)
}


const arrayCharacter = Object.keys(character).map(el => `This character has ${character[el]} ${el}.`)
console.log(arrayCharacter)