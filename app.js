const http = require('http');

const server = http.createServer((req, res) => {
    // console.log('Name');
    // res.setHeader('Content-Type', 'text/html');
    // res.write('<html>');
    // res.write('<head>My first Node page</head>');
    // res.write('<body><h1>Welcome to my Node.js Page!</h1></body>');
    // res.write('</html>');
    const url = req.url;
    let response;
    if(url === '/home'){
        response = 'Welcome to home Page';
    }
    else if(url === '/about'){
        response = 'Welcome to about page';
    }
    else if(url === '/node'){
        response = 'Welcome to node Page';
    }
    else{
        response = "Error 404";
    }

    res.writeHead(200, {'Content-Type':'text/plain'});
    res.end(response);
});

server.listen(4000);