var path = require("path");

// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var friendsData = require("../data/friends");

module.exports = function (app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function (req, res) {
    res.json(friendsData);
  });

  app.post("/api/friends", function (req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're using the body parsing middleware
  

    //receive user details as parameters sent from the client-side as part of POST request (name, email, scores)
    var user = req.body;

    //loops through scores and changes them from strings to integers
    for (var i = 0; i < user.scores.length; i++) {
      user.scores[i] = parseInt(user.scores[i]);
    }
    console.log(req.body.scores);

    //defaul friend match is the first friend but results will be whoever has the minimum difference in scores

    var friendMatchIndex = 0;
    var minDiff = 40;
    var newFriendTotal = 0;
    var currentbestFriend = {};
    var totalDifference = 0;

    //for-loop to find the total of scores from newPerson
    for (var i = 0; i < req.body.scores.length; i++) {
        console.log("looping?", req.body.scores[i]);
        newFriendTotal += req.body.scores[i];
    };
    console.log("Total = ", newFriendTotal);

    //for-loop to find the total of each person in friendsData
    // for (var i = 0; i < friendsData.length; i++) {

    //   //for loop for grand total of old friend!!! friendsData[i]
    //   for (var x = 0; x < friendsData[i].scores.length; x++) {
        
    //   }

      //another for loop for grand total of old friend!!! friendsData[i]
        //for
      
      
      
      //once u have newfriend total and old friend total(friendsData[i])
      // if statment to compare how close differnece is
      //if new diffence is less than current minDiff than update min def minDiff = newDiff and currentbestFriend
      

    // in this for-loop, start off with a zero difference and compare the user and the ith friend scores, one set at a time
    //  whatever the difference is, add to the total difference
    for(var i = 0; i < friendsData.length; i++) {
      var totalDifference = 0;
      for(var j = 0; j < friendsData[i].scores.length; j++) {
        var difference = Math.abs(user.scores[j] - friendsData[i].scores[j]);
        totalDifference += difference;
      }

      // if there is a new minimum, change the best friend index and set the new minimum for next iteration comparisons
      if(totalDifference < minDiff) {
        friendMatchIndex = i;
        minDiff = totalDifference;
      }
    }
    console.log("total difference: ", totalDifference)
    console.log("Your friend match is:", friendsData[friendMatchIndex].name)

    friendsData.push(user);

    res.json(friendsData[friendMatchIndex]);
  });
};
