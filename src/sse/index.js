const fs = require('fs')
const http = require('http')
const server = http.createServer((req, res) => {
  let url = req.url;
  if (url === '/') {
    let data = fs.readFileSync('index.html')
    res.end(data)
  } else if (url === '/sse') {
    res.setHeader("Content-Type", "text/event-stream;charset=utf-8")
    setInterval(() => {
      res.write('data:时间是' + new Date() + '\r\n\r\n')
    }, 1000);

  }

})
server.listen(3000)