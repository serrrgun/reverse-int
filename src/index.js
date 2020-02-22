module.exports = function reverse (n) {

  const con = Math.abs(n)

  const string = String(con)

  const reverse = string.split('').reverse().join('')

  return  Number(reverse)

}
