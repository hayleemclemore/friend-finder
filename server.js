
//dependencies
var express = require("express");
var path = require("path");


//sets up the Express App
var app = express();
var PORT = process.env.PORT || 3000;

//sets up the express app the handle data parsing
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static('public'))


// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================

require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);




// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });