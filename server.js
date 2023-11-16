// import the module
const http = require('http');


let notes =[
    {
        id :1,
        content:'backend using node.js',
        important: true,
    },
    {
        id :2,
        content:'node.js is a open source',
        important: false,
    },
    {
        id :3,
        content:'simple web server using node.js',
        important: true,
    }
];

// define the server hostname and the port number
const hostname = '127.0.0.1';//localhost
const port = 3001;

// create a server
const server = http.createServer((req,res) => {
    res.statusCode= 200;
    res.setHeader('content-type','application/json');
    res.end (JSON.stringify(notes));
});

//   make the sever listen to the defined portnumber
server.listen(port,hostname,() =>{
    console.log(`server running at http://${hostname}:${port}`);
});