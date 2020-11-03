const capitalize = (string) => {

    return typeof string === 'string' 
      ?  string.toUpperCase() 
      :  'Please enter a string'
 
}


module.exports = capitalize;