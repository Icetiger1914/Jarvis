var express = require('express')
var app = express()
var Marvel = require('./avengers')


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})


app.get('/', function(request,response) {
  let avengers = new Marvel({
     publicKey : 'bc7526a203b98a24d488e9185c5baf75',
    privateKey : 'e9b7fdcb379d44628b6e91fe849440fc0c20ebd6'
  })
  avengers.assemble(function(avengers){
    response.send(avengers)
  })

})

app.listen('4000', function() {
  console.log('running on port 4000!')
})
