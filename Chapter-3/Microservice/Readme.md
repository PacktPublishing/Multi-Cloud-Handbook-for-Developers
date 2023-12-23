# The code imports the Express framework and creates an Express application.
# It defines a route that matches /user/:id, where :id is a dynamic parameter.
# When a request is made to this route, the callback function sends a JSON response with the user ID from the URL and a name.
# The app.listen function starts the server and listens for incoming requests on port 3000.

# command to install Express
`npm install express`

# command to start the server
`node app.js`

# Open a web browser or use a tool like Postman. Send a GET request to the following URL: 
`http://localhost:3000/user/123`