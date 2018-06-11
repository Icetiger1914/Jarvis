class AvengerProfile {
  constructor(hero) {
    this.name = hero.name
    this.description = hero.description
    this.id = hero.id
    this.modified = hero.modified
  }

  createProfile() {
    return {
      name: this.name, 
      description: this.description,
      id: this.id,
      modified: this.modified
    }
  }
}

module.exports = AvengerProfile
