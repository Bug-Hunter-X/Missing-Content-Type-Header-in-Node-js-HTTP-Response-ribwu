const http = require('http');

const server = http.createServer((req, res) => {
  // Without a Content-Type header, the browser might not interpret the response correctly
  res.end('Hello World!');
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});