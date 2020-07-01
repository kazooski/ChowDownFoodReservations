// Require/import the HTTP module
var express = require("express");
var path = require("path");


//Sets up the Express Apps
var app = express();

// Define a port to listen for incoming requests
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// All reservations Data

// var reserve = {};


// Table Data
var tables = {
    customerName: "MICHAEL",
    phoneNumber: "000-000-0000",
    customerEmail: "jay@mail.com",
    customerID: "MJB",
};


// Waitlist Data
var waitlist = {
    customerName: "MICHAEL",
    phoneNumber: "000-000-0000",
    customerEmail: "jay@mail.com",
    customerID: "MJB",
};


// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
    // res.send("Welcome to the restaurant home page!")
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/tables", function(req, res) {
    // res.send("Welcome to the tables page!")
    res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reserve", function(req, res) {
    // res.send("Welcome to the reserve page!")
    res.sendFile(path.join(__dirname, "reserve.html"));
});

// Displays tables JSON
app.get("/api/tables", function(req, res) {
    return res.json(tables);
});


// Displays waitlist JSON
app.get("/api/waitlist", function(req, res) {
    return res.json(waitlist);
});

// Create New Reservations - takes in JSON input
app.post("/api/tables", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newReservation = req.body;
  
    console.log(newReservation);
  
    // We then add the json the user sent to the character array
    if (tables.length < 5) {
        tables.push(newReservation);
    }

    else {
        waitlist.push(newReservation);
    }
  
    // We then display the JSON to the users
    res.json(newReservation);
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

