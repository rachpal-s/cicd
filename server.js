//server.js, unicode file format gives error.. do donot use
const http = require('http')
const PORT = process.env.PORT || 9000
http
  .createServer((req, res) => {
    console.log('New connection')
    res.end('Hello Cloud Run. This is superb. Now running version 2')
  })
  .listen(PORT, () => console.log('Listening on', PORT))