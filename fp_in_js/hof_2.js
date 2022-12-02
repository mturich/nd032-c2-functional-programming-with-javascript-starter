weaponsWithNoises = [
   { name: 'Phaser', noise: 'bssszzsssss', universe: 'Star Trek' },
   { name: 'Blaster', noise: 'Pew Pew', universe: 'Star Wars' },
   { name: 'Sonic Screwdriver', noise: 'Pew Pew', universe: 'Dr. Who' },
   { name: 'Lightsaber', noise: 'Pew Pew', universe: 'Star Wars' },
   { name: 'Noisy Cricket', noise: 'Pew Pew', universe: 'Men in Black' },
]

function weaponsFromUniverse(universe) {
   const weaponsWithNoisesByUniv = weaponsWithNoises.filter(
      el => el.universe === universe
   )
   return weapon => {
      const filtered = weaponsWithNoisesByUniv.find(el => el.name === weapon)
      if (filtered)
         console.log(`used ${filtered.name}: ${filtered.noise}`)
      else console.log(`${weapon} is not part of the ${universe} universe.`)
   }
}

// USAGE
const useStarWarsWeapon = weaponsFromUniverse('Star Wars')

useStarWarsWeapon('Blaster') // console logs 'used Blaster: Pew Pew'
useStarWarsWeapon('Noisy Cricket') // console logs 'Noisy Cricket is not a part of the Star Wars universe'
