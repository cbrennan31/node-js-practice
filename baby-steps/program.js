let sum = 0

process.argv.forEach((element) => {
  if (process.argv.indexOf(element) >= 2) {
    sum += parseInt(element, 10)
  }
})

console.log(sum)
