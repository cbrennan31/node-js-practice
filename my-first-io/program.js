let fs = require('fs')

let buffer = fs.readFileSync(process.argv[2])

let string = buffer.toString()

let numNewLines = string.split('\n').length - 1

console.log(numNewLines)
