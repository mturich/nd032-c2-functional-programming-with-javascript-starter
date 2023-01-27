// Build out this mock API request so that does the following:
// 1. Gets the user information and turns the JSON into a JavaScript object
// 2. Gets the event message and turns the JSON into a JavaScript object
// 3. Prints out a console log message that says "Thank you, Ralph S. Mouse, your account has been updated"
var eventMessage = JSON.stringify({ body: 'Your account has been updated!' })
var user = {
   name: 'Ralph S. Mouse',
   id: '238jflK3',
}
var currentUser = JSON.stringify(user)

function getUserInformation() {
   return new Promise(function (resolve, reject) {
      setTimeout(resolve, 2000, currentUser)
   }).then(data => JSON.parse(data))
}
function getEventMesssage() {
   return new Promise(function (resolve, reject) {
      setTimeout(resolve, 2000, eventMessage)
   }).then(data => JSON.parse(data))
}
getUserInformation()
   .then(data => {
      getEventMesssage().then(msg => {
         const sentence = `Thank you, ${data.name}, ${msg.body.toLowerCase()}`
         console.log(sentence)
      })
   })

   .catch(e => console.error(e))
