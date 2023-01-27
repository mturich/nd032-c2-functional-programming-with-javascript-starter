const fetch = require('node-fetch');
// We have set up an endpoint at http://localhost:3000. 

// Make one fetch request for each CRUD action below and print the response. 
const URL = 'http://localhost:3000'

// Create a GET request to http://localhost:3000
fetch(URL)
	.then(response => response.json())
	.then(data => console.log(data))
	.catch(error => console.log(error))

// Create a POST request to http://localhost:3000

const body = {
	method : 'POST',
  	headers: {'Content-Type': 'application/json' },
  	body: JSON.stringify({"name": "Michael"})
}

fetch(URL, body )
	.then(response => response.json())
	.then(data => console.log(data))
	.catch( error => console.log(error))

// Create a PUT request to http://localhost:3000

fetch(URL, {
	method: 'PUT',
  	headers: {'Content-Type': 'application/json'},
  	body: JSON.stringify({name: 'Janina' }) 
	})
	.then(response => response.json())
	.then(data => console.log(data))
	.catch(error => console.error(error))

// Create a DELETE request to http://localhost:3000
fetch(URL, {
	method: 'DELETE',
	headers: {'Content-Type':'application/json'},	
	body: JSON.stringify({name: "test"})
	})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(e => console.error(e))

