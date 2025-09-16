import http from 'http';
import fs from 'fs';
import path from 'path';

const port = 3000;

const server = http.createServer((req, res) => {
  // Path to index.html (assuming it's in the same folder as this script)
  const filePath = path.join(process.cwd(), 'index.html');

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Error loading index.html');
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    }
  });
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
