// Directions: Rewrite the imperative code below as Object-Oriented

/* let status = 'active'
let warp = 2
let type = 'Dilithium Crystal'
let status_report = 'Captain, '

if (status === 'active' && warp <= 4) {
   status_report += 'the engines are active and we could be going faster.'
} else if (status === 'active' && warp > 4) {
   status_report += 'the engines are active and we are going ' + warp + '.'
} else if (status === 'down') {
   status_report += 'the engines are down.'
} else {
   status_report += 'the comms are down and we can`t reach engineering.'
}

console.log(status_report)
 */
/* 
OOP APPROACH
*/
 
class Engine {
   constructor(status, warp) {
      this.status = status
      this.warp = warp
      this.type = 'Dilithium Crystal'
      this.status_report = 'Captain, '
   }

   giveReport() {
      if (this.status === 'active' && this.warp <= 4) {
         this.status_report +=
            'the engines are active and we could be going faster.'
      } else if (this.status === 'active' && this.warp > 4) {
         this.status_report +=
            'the engines are active and we are going ' + this.warp + '.'
      } else if (this.status === 'down') {
         this.status_report += 'the engines are down.'
      } else {
         this.status_report +=
            'the comms are down and we can`t reach engineering.'
      }

      console.log(this.status_report)
   }
}

const engineFaster = new Engine('active', 3).giveReport()
const engineMax = new Engine('active', 5).giveReport()
const engineDown = new Engine('down', 4).giveReport()
const engineTest = new Engine('test', 4).giveReport()
