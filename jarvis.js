#!/usr/bin/env node
var program = require('commander')
var Avengers = require('./avengers')

program
  .version('0.1.0')
  .option('-ga, --getAvengers', 'Assemble all the Avengers!')
  .option('-gs, --getSpiderman', 'Get Spiderman')
  .parse(process.argv);

 if (program.getSpiderman) {
  var spiderman = new Avengers({
    publicKey : 'bc7526a203b98a24d488e9185c5baf75',
    privateKey : 'e9b7fdcb379d44628b6e91fe849440fc0c20ebd6'
 })


  spiderman.getSpiderman()

 }


 if (program.getAvengers) {
  var avengers = new Avengers({
    publicKey : 'bc7526a203b98a24d488e9185c5baf75',
    privateKey : 'e9b7fdcb379d44628b6e91fe849440fc0c20ebd6'
  })

  avengers.assemble(function(avengers) {
   console.log(avengers)
    
  })
}
