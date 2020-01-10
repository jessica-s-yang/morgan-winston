# morgan-winston
expressjs logging using winston and morgan

framework Express
using Winston and Morgan
https://www.npmjs.com/package/rotating-file-stream

to start the project:

npm init

set the "main" to server.js

npm install --save express morgan winston rotating-file-stream

In a terminal run node server.js. Go to localhost:8080. You will see this middleware log out in your console:
{"message":"Overriding express logger","level":"debug"}
Server running on port: 8080
GET / 304 2.755 ms - -
{"message":"::1 - - [10/Jan/2020:17:57:23 +0000] \"GET / HTTP/1.1\" 304 - \"-\" \"Mozilla/5.0 (Macintosh; Intel Mac OS X ) AppleWebKit/ (KHTML, like Gecko) Chrome/ Safari/\"\n","level":"info"}

