const WebSocketServer = require('ws').Server
wss =  new WebSocketServer({port:8181})
wss.on('connection',function(ws){
  console.log('client connected')
  ws.on('message',function(m){
    console.log(m.toString())
  })
  let obj = {
    name:'gsy',
    age:22
  }
  ws.send(JSON.stringify(obj))
})