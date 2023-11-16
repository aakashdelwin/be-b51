// import the module
const http = require('http');

// define the server hostname and the port number
const hostname = '127.0.0.1';//localhost
const port = 3000;

// create a server
const server = http.createServer((req,res) => {
    res.statusCode= 200;
    res.setHeader('content-type','text/plain');
    res.end ('hello world !');
});

//   make the sever listen to the defined portnumber
server.listen(port,hostname,() =>{
    console.log(`server running at http://${hostname}:${port}`);
});