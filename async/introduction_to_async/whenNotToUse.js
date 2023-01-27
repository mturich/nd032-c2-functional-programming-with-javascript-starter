// You will recognize this code example from earlier in the lesson, but now the mock API has been updated to return Promises! Where in the last exercise you added try/catch blocks, here you need to add Async/await and try/catch blocks!
console.clear()
let endangeredAnimalsDB = [
   {
      common_name: 'saola',
      conservation_status: 'critical',
      species: 'Pseudoryx nghetinhensis',
      region: 'Greater Mekong',
      population: null,
   },
   {
      common_name: 'amur leopard',
      conservation_status: 'critical',
      species: 'Panthera pardus orientalis',
      region: 'Amur-Heilong',
      population: 'more than 84',
   },
   {
      common_name: 'vaquita',
      conservation_status: 'critical',
      species: 'Phocoena sinus',
      region: 'Gulf of California',
      population: null,
   },
   {
      common_name: 'Javan rhino',
      conservation_status: 'critical',
      species: 'Rhinoceros sondaicus',
      region: 'Java, Indonesia',
      population: '58-68',
   },
   {
      common_name: 'green turtle',
      conservation_status: null,
      species: 'Chelonia mydas',
      region: [
         'Mesoamerican Reef',
         'Coastal East Africa',
         'Gulf of California',
         'The Galápagos',
         'Coral Triangle',
      ],
      population: null,
   },
]

const animalsByConservationStatus = status => {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         const results = endangeredAnimalsDB
            .filter(a => a.conservation_status === status)
            .map(a => a.common_name)

         if (results.length > 0) {
            resolve(results)
         } else {
            reject(`no animals found with status: ${status}`)
         }
      }, 1500)
   })
}

const fetchAnimalByName = name => {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         const results = endangeredAnimalsDB.find(a => a.common_name === name)

         if (results !== undefined) {
            resolve(results)
         } else {
            reject(`no animal found with name: ${name}`)
         }
      }, 1500)
   })
}

// ------------------------------------------------------------
// Challenge 1
// The following code doesn't work! Use Async/await to fix it
// And add error handling with try/catch

const printStatusMessage = async status => {
   try {
      const animalsList = await animalsByConservationStatus(status)

      message = `Animals listed as ${status} are: ${animalsList.join(', ')}`
      console.log('Challenge 1: ', message)
   } catch (e) {
      console.error('error in Ch 1:', e)
   }
}

/* printStatusMessage('critical') // success test
printStatusMessage('extinct') // failure test */

// ------------------------------------------------------------
// Challenge 2
// The following code doesn't work! Use Async/await to fix it
// And add error handling with try/catch
endangeredAnimals = ['saola', 'green turtle', 'amur leopard', 'deer']

const printAnimalMessage = async animal => {
   try {
      const info = await fetchAnimalByName(animal)
      const message = `${animal}: The ${info.common_name} has an endangered status of ${info.conservation_status}`
      console.log('Challenge 2: ', message)
   } catch (e) {
      console.error('Challenge 2: ', animal, ' error in Ch 2:', e)
   }
}
/* 
endangeredAnimals.forEach(animal => printAnimalMessage(animal)) */
// ------------------------------------------------------------
// Challenge 3
// The following code doesn't work! Use Async/await to fix it
// And add error handling with try/catch

animal1 = 'vaquita'
animal2 = 'mouse'

const printAnimalFacts = async animal => {
   try {
      const data = await fetchAnimalByName(animal)

      const message = `Challenge 3: The ${data.common_name} (${data.species}) is an endangered animal 
      with ${data.population} individuals in the wild in their home region of ${data.region}`
      console.log(message)
      console.log(`Search completed: ${animal}`)
   } catch (e) {
      console.error('Challenge 3: ', 'error', e)
   }
}

/* printAnimalFacts(animal1) // success test
printAnimalFacts(animal2) // failure test */

// ------------------------------------------------------------
// EXTRA HARD Challenge 4
// This is a bonus round that is extra difficult!
// The following code doesn't work! Use Async/await to fix it
// And add error handling with try/catch

const printAnimalRegions = async status => {
   try {
      const animalsList = await animalsByConservationStatus(status)
      const getAnimals = animalsList.map(animal => {
         return fetchAnimalByName(animal).catch(err => console.log(err))
      })
      const regions = await Promise.allSettled(getAnimals)
         .then(results => {
            const regions = results.map(result => result.value.region)
            return regions
         })
         .catch(error => console.log(error))
      const message = `Task4: Animals with an endangered status of ${status} can be found in the following regions: ${regions.join(
         ', '
      )}`

      console.log(message)
   } catch (e) {
      console.log( e)
   } finally {
      console.log(`Found all regions with animals of status: ${status}`)
   }
}

printAnimalRegions('critical')
printAnimalRegions('threatened')
