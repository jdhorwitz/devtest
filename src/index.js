var http = require("http");

const {
  runPalindromeTests,
  runRemovePropertyTests,
  runDeepCloneTests,
  runFibTests
} = require("./tests");

// Open up the code folder to start coding!

runPalindromeTests();
runDeepCloneTests();
runRemovePropertyTests();
runFibTests();

http
  .createServer(function(req, res) {
    res.write("welcome to ambyint"); //write a response to the client
    res.end(); //end the response
  })
  .listen(8080); //the server object listens on port 8080
