class Greeting {
   constructor(name, hour) {
      this.name = name
      this.hour = hour
      this.salutation = 'Hello,'
   }

   getSaluation() {
      if (this.hour <= 10) this.salutation = 'Good Morning,'
      else if (this.hour > 18) this.salutation = 'Good Evening,'
      else this.salutation = 'Hello,'
   }
79
   greet() {
      this.getSaluation()
      console.log(`${this.salutation} ${this.name}`)
   }
}

const day1 = new Greeting('Michael Urich', 19)
day1.greet()
