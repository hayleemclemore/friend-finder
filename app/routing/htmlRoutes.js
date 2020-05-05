
var path = require("path");


// ===========================================================
// Routes
// ===========================================================

module.exports = function (app) {
  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/assets/index.html"));
  });

  app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/assets/survey.html"));
  });

  // If no matching route is found default to home
  // app.get("*", function (req, res) {
  //   res.sendFile(path.join(__dirname, "../public/home.html"));
  // });
};
