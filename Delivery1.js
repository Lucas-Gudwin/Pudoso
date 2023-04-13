const http = require('http');
const uc = require('upper-case');

const PORT = 2020;

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end(uc.upperCase('Hello World modafuka\n'));
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
