var request = require("request");

request("http://www.google.com", function(error, response, body) {
  console.log(body);
});

http.listen(process.env.PORT || 3000, function(){
console.log('listening on *:3000');
});
