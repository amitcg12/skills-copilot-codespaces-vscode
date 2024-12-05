// Crete web server
// Create a web server that listens on port 3000 and serves the comments.html file
// Use the fs module to read the file and send it to the client
// If the file doesn't exist, send a 404 status code
// If there's an error reading the file, send a 500 status code
// Use the http module to create the server
// Use the fs module to read the file
// Use the res object to send the file to the client

const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
  fs.readFile('comments.html', (err, data) => {
    if (err) {
      res.writeHead(500)
      res.end('Internal server error')
    } else {
      res.writeHead(200)
      res.end(data)
    }
  })
})

server.listen(3000, () => {
  console.log('Server is listening on port 3000')
})



