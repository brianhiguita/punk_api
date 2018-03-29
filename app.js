var express = require("express");
var app = express();
var request = require("request");

app.use(express.static("public"));
app.set("view engine", "ejs");


app.get("/", function(req, res){
  request("https://api.punkapi.com/v2/beers?brewed_after=01-2015&abv_gt=5&abv_lt=11", function(error, response, body){
    if (!error && response.statusCode == 200) {
      var data = JSON.parse(body);
      res.render("results", {data: data})
      // res.send(results[1]["name"]);
    }
  });
});






app.listen(3000, function(){
  console.log("server has started");
});
