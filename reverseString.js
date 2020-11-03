const reverseString = (string) => {
     return typeof string === 'string' 
      ?  string.split('').reverse().join('')
      :  'Please enter a string'
  }
  
  
  module.exports = reverseString;