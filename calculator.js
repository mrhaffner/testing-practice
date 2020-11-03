const calculator = {
    add: (x, y) => {
            return typeof x === 'number' && typeof y === 'number' 
                ? x + y
                : 'Please enter two numbers'
        },
    subtract: (x, y) => {
        return typeof x === 'number' && typeof y === 'number' 
            ? x - y
            : 'Please enter two numbers'
        },
    multiply:  (x, y) => {
        return typeof x === 'number' && typeof y === 'number' 
            ? x * y
            : 'Please enter two numbers'
        },
    divide:  (x, y) => {
        if (typeof x !== 'number' || typeof y !== 'number') { 
            return 'Please enter two numbers'
        } else if (y === 0) {
            return 'Cannot divide by 0'
        } else {
            return x / y
        }
        },
}

module.exports = calculator;