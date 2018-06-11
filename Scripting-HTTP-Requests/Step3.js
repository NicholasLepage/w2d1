function getAndPrintHTML (options) {

  var https = require("https");
  var chunks = "";

  https.get(options, function(response) {

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

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions);