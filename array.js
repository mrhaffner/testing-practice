const array = (arr) => {
 return {
     average: arr.reduce((a, b) => (a+b)) / arr.length,
     length: arr.length,
     min: Math.min(...arr),
     max: Math.max(...arr),
 }
}

module.exports = array