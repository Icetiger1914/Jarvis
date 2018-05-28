var api = require('marvel-api')

var marvel = api.createClient({
    publicKey: 'bc7526a203b98a24d488e9185c5baf75',
    privateKey: 'e9b7fdcb379d44628b6e91fe849440fc0c20ebd6'
});

 
class Marvel {
  constructor() {
  
  }

  getFirst100() {
    marvel.characters.findAll(100)
       .then(function(res) {
        for (var index = 0; index < res.data.length; index++) {
          console.log((index + 1) + ' ' + res.data[index].name)
     }  
  })
  .fail(console.error)
  .done();

  }

} 

module.exports = Marvel
