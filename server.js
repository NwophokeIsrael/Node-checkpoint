const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Hello Node!!!!</h1>\n');
});

const port = 3000;
server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});