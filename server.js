// Require/import the HTTP module
var express = require("express");
var path = require("path");


//Sets up the Express App
var app = express();

// Define a port to listen for incoming requests
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
    // res.send("Welcome to the Star Wars Page!")
    res.sendFile(path.join(__dirname, "home.html"));
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});


// // Create a generic function to handle requests and responses
// function handleRequest(request, response) {

//   // Send the below string to the client when the user visits the PORT URL
//   response.end("It Works!! Path Hit: " + request.url);
// }

// // Use the Node HTTP package to create our server.
// // Pass the handleRequest function to empower it with functionality.
// var server = http.createServer(handleRequest);

// // Start our server so that it can begin listening to client requests.
// server.listen(PORT, function() {

//   // Log (server-side) when our server has started
//   console.log("Server listening on: http://localhost:" + PORT);
// });

