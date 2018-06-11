function getAndPrintHTML () {
  var https = require("https");
  var chunks = "";
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  https.get(requestOptions, function(response) {

    response.setEncoding("utf8");

    response.on("data", function(data) {
      chunks += data;
      console.log("Here is the entirety of the page \n", chunks);
    });



    response.on("end", function() {
      console.log("We done here");
    });
  });
}

console.log(getAndPrintHTML());