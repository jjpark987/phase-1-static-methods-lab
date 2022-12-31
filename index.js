class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-' ]+/g, "")
  }

  static titleize(string) {
    const words = string.split(' ')
    words[0] = this.capitalize(words[0])
    for(let i = 0; i < words.length; i++) {
      switch(words[i]) {
        case 'the':
          break
        case 'a':
          break
        case 'an':
          break
        case 'but':
          break
        case 'of':
          break
        case 'and':
          break
        case 'for':
          break
        case 'at':
          break
        case 'by':
          break
        case 'from':
          break
        default:
          words[i] = this.capitalize(words[i])
      }
    }
    return words.join(' ')
  }
}