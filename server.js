const http = require("http");

const host = 'localhost';
const port = 3000;

let notes = [];

const requestListener = function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');

  if (req.method === 'POST') {
    let data = '';
    req.on('data', chunk => {
      data += chunk;
    });
    req.on('end', () => {
      notes.push(data);
      console.log(notes);
      res.end();
    });
  } else if (req.method === 'GET') {
    res.end(JSON.stringify(notes));res.end();
  } else if (req.method === 'DELETE') {
    let data = '';
    req.on('data', chunk => {
      data += chunk;
    });
    req.on('end', () => {
      console.log(data);
      res.end();
    });
  } 
};

const server = http.createServer(requestListener);

server.listen(port, host, () => {
console.log(`Server is running on http://${host}:${port}`);
});