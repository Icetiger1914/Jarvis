var api = require('marvel-api')
var Profile = require('./avengerProfile')


class Avengers {
  constructor(config) {
    this.marvel = api.createClient({
        publicKey: config.publicKey, 
        privateKey: config.privateKey
    });
  
  }

    getSpiderman() {
     this.marvel.characters.findByName('spider-man')
      .then(function(res) {
        console.log(res.data[0].modified) 
      })
      .fail(console.error)
      .done();
  }


  assemble(cb) {
    Promise.all([ this.marvel.characters.findByName('iron man'),
                  this.marvel.characters.findByName('Vision'),
                  this.marvel.characters.findByName('captain america'),
                  this.marvel.characters.findByName('spider-man'),
                  this.marvel.characters.findByName('Hulk')])
      
      .then(function(responses) {
        let avengers = []

      responses.forEach(function(character) {
          let profile = new Profile({name:character.data[0].name, description:character.data[0].description, id:character.data[0].id, modified:character.data[0].modified})
          avengers.push(profile.createProfile())
        })
        console.log('Avengers Assemble!!!')
        cb(JSON.stringify(avengers))

      })
    }
  }

module.exports = Avengers
