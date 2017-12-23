require('dotenv').config()

var app = require('./app');
var port = process.env.PORT;

// configure body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// set our port to use Azure port
var port     = process.env.PORT || 10255; 

var server = app.listen(port, function() {
  console.log('Express server listening on port ' + port);
});
var request = require('request');

// Set the headers
var headers = {
    'User-Agent':       'Super Agent/0.0.1',
    'Content-Type':     'application/x-www-form-urlencoded'
}

// Configure the POST request
var options1 = {
    url: 'http://samwize.com',
    method: 'POST',
    headers: headers,
    form: {'key1': 'xxx', 'key2': 'yyy'}
}

// Configure the GET request
var options2 = {
    url: 'http://samwize.com',
    method: 'GET',
    headers: headers,
    qs: {'key1': 'xxx', 'key2': 'yyy'}
}

// Configure the PUT request
var options3 = {
    url: 'http://samwize.com',
    method: 'PUT',
    headers: headers,
    qs: {'key1': 'xxx', 'key2': 'yyy'}
}

// Configure the DELETE request
var options4 = {
    url: 'http://samwize.com',
    method: 'DELETE',
    headers: headers,
    qs: {'key1': 'xxx', 'key2': 'yyy'}
}

//Handle response
var uncompress = require('compress-buffer').uncompress;

// Set the headers and options
// Start the request
request(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
        // Print out the response body
        console.log(body)

        // Process JSON response
		var objToJson = { };
objToJson.response = response;
response.write(JSON.stringify(objToJson));
        var json_body = JSON.parse(body);
    }
})
