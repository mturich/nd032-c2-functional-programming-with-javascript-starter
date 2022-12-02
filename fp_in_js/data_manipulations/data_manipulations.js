var nearEarthObjects = require('./nasa_near_earth_object_API.json')

// The object in the nasa_near_earth_object_API.json is a copy of
// real API response from the NASA Near - Earth Object API.
// Find the following from the API:

// Total Count ---------------------------------------------
// 1. How many near-earth objects did NASA register for the date of the search? Return the asteroid count.
const count = nearEarthObjects.element_count
const nEO = nearEarthObjects.near_earth_objects

function countUniqueObjects(elements) {
   let i = 0
   const arrOfObjects = Object.values(elements).flat(1)
   const Hash = arrOfObjects.reduce((idHash, curr) => {
      if (idHash[curr.id] == undefined) {
         idHash[curr.id] = 1
         i++
      }
      return idHash
   }, {})

   return i
}

const countNEO = countUniqueObjects(nEO)
console.log(countNEO)

// Averages ------------------------------------------------
// 2. What was the average absolute magnitude of all the near earth objects in this data set? Return the average absolute_magnitude_h.

function averageMagnitude(elements) {
   const arrOfObjects = Object.values(elements).flat(1)
   return arrOfObjects.reduce((sum, curr, i, arr) => {
      sum += curr.absolute_magnitude_h

      if (i === arr.length - 1) return sum / i

      return sum
   }, 0)
}
const avgMagnitude = averageMagnitude(nEO)
console.log(avgMagnitude)

// Hint - you can achieve this multiple ways, but the reduce method can be a little-known but cool way to find averages. To do it though, you'll need to use the initial_value argument
// For some extra challenge try using reduce with the initial setting argument. To learn more about it, take a look at this page: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

// Hazardous -----------------------------------------------
// 3. A list of all objects (their id, name, max size in miles, and closest approach in miles) that are labeled potentially hazardous

function pontentialHazard(elements) {
   const arrOfObjects = Object.values(elements).flat(1)
   return arrOfObjects
      .filter(el => el.is_potentially_hazardous_asteroid === true)
      .map(el => ({
         id: el.id,
         name: el.name,
         maxSizeInMiles: el.estimated_diameter.miles.estimated_diameter_max,
         clostestApproachMiles: el.close_approach_data[0].miss_distance.miles,
      }))
}
const isHazard = pontentialHazard(nEO)
//console.log(isHazard)

function potHazardRecuder(elements) {
   const arrOfObjects = Object.values(elements).flat(1)
   const result = arrOfObjects.reduce((res, el, i, arr) => {
      if (el.is_potentially_hazardous_asteroid) {
         const obj = {
            id: el.id,
            name: el.name,
            maxSizeInMiles: el.estimated_diameter.miles.estimated_diameter_max,
            clostestApproachMiles:
               el.close_approach_data[0].miss_distance.miles,
         }
         res.push(obj)
      }
      return res
   }, [])

   return result
}
const isHazardReduce = potHazardRecuder(nEO)
//console.log(isHazardReduce)

// Too Close for Comfort -----------------------------------
// 4. A list of all objects (their id, name, max size in miles, and closest approach in miles) that have a miss_distance of less than 900,000 miles

function missDistanceLess900kMiles(elements) {
   const arrOfObjects = Object.values(elements).flat(1)
   const result = arrOfObjects.reduce((res, el) => {
      const number = +el.close_approach_data[0].miss_distance.miles
      if (number < 900_000) {
         const obj = {
            id: el.id,
            name: el.name,
            maxSizeInMiles: el.estimated_diameter.miles.estimated_diameter_max,
            clostestApproachMiles:
               el.close_approach_data[0].miss_distance.miles,
         }
         res.push(obj)
      }
      return res
   }, [])

   return result
}

const lessThan900k = missDistanceLess900kMiles(nEO)
//console.log(lessThan900k)

// Alert ---------------------------------------------------
// 5. Of all the near-earth objects for this date, find the time that the asteroid with the nearest miss will be closest to earth.
function getDateOfNearestMiss(elements) {
   const arrOfObjects = Object.values(elements).flat(1)
   const result = arrOfObjects.reduce((res, el, i) => {
      const missDate = el.close_approach_data[0].close_approach_date
      const missDistance = parseInt(el.close_approach_data[0].miss_distance.miles)
      const obj = {
         id: el.id,
         name: el.name,
         missDate,
         missDistance,
      }
      if (
         res[missDate] == undefined ||
         res[missDate].missDistance > missDistance
      )
         res[missDate] = obj

      return res
   }, {})

   return result
}

const missDate = getDateOfNearestMiss(nEO)
console.log(missDate)

for (el in nEO) {

	const arr = nEO[el].map(el => parseInt(el.close_approach_data[0].miss_distance.miles)).sort((a, b) => a - b)
	//console.log(arr)
	console.log(Math.min.apply(null, arr))
}

