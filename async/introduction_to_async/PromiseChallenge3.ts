// Build out this mock API request so that does the following:
// 1. Gets the user information and turns the JSON into a JavaScript object
// 2. Gets the event message and turns the JSON into a JavaScript object
// 3. Prints out a console log message that says "Thank you, Ralph S. Mouse, your account has been updated"

interface User {
   name: string
   id: string
}
interface Msg {
   body: string
}
const eventMessage = JSON.parse(
   JSON.stringify({ body: 'Your account has been updated!' })
)
const user: User = {
   name: 'Ralph S. Mouse',
   id: '238jflK3',
}
const currentUser = JSON.parse(JSON.stringify(user))

function getUserInformation(): Promise<User> {
   return new Promise<User>((resolve, reject) => {
      setTimeout(resolve, 2000, currentUser)
   })
}

function getEventMesssage(): Promise<Msg> {
   return new Promise<Msg>((resolve, reject) => {
      setTimeout(resolve, 2000, eventMessage)
   })
}

getUserInformation()
   .then(data => console.log(data))
   .catch(e => console.error(e))
