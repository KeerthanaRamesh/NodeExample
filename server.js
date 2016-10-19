// var express    =    require('express');
// var app        =    express();

// require('./main')(app);
// app.set('views',__dirname + '/views');
// app.set('view engine', 'ejs');
// app.engine('html', require('ejs').renderFile);

// var server     =    app.listen(3000,function(){
// console.log("Express is running on port 3000");
// });
// var express = require('express');
// var app = express();

// app.get('/index', function (req, res) {
//    res.send('Hello World');
// })

// var server = app.listen(4000, function () {
//    var host = server.address().address
//    var port = server.address().port
   
//    console.log("Example app listening at http", host, port)
// })
// var express = require('express');
// var app = express();

// app.use(express.static('public'));
// app.get('/index.htm', function (req, res) {
//    res.sendFile( __dirname + "/" + "index.html" );
// })

// app.get('/process_get', function (req, res) {
//    // Prepare output in JSON format
//    response = {
//       first_name:req.query.first_name,
//       last_name:req.query.last_name
//    };
//    console.log(response);
//    res.end(JSON.stringify(response));
// })

// var server = app.listen(8081, function () {
//    var host = server.address().address
//    var port = server.address().port
//    console.log("Example app listening at http://%s:%s", host, port)

// // })
// var express = require('express');
// var app = express();

// app.use(express.static('public'));

// app.get('/', function (req, res) {
//    res.send('Hello World');
// })

// var server = app.listen(8081, function () {
//    var host = server.address().address
//    var port = server.address().port
//   console.log("Example app listening at http://%s:%s", host, port)
// })
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// var http = require('http');

// // Configure our HTTP server to respond with Hello World to all requests.
// var server = http.createServer(function (request, response) {
//   response.writeHead(200, {"Content-Type": "text/plain"});
//   response.end("Hello World\n");
// });

// // Listen on port 8000, IP defaults to 127.0.0.1
// server.listen(8000);

// // Put a friendly message on the terminal
// console.log("Server running at http://127.0.0.1:8000/");
var express = require('express');
var server = express();

server.get('/', function (req, res) {
  res.send(/index.html);
});
server.get('/about', function (req, res) {
  res.send('Hello Keerthana!');
});

server.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});