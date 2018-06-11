function getAndPrintHTMLChunks () {
  var https = require("https");
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  https.get(requestOptions, function(response) {

    response.setEncoding("utf8");

    response.on("data", function(data) {
      console.log("Here is the chunk information: \n", data);
    });

    response.on("end", function() {
      console.log("We done here");
    });
  });
}

getAndPrintHTMLChunks();