// const isEven = require("is-even")

function printAllModulo(configuration) {
    let current = 1
    let moduloNumbers = [0]
    let index = 0
    let max = 0

    function incrementCurrent() {
        current = current + 1
    }

    function modulo(number) {
        return number % configuration.modulo == 0
    }

    while (current < configuration.limit) {
        incrementCurrent()

        if (modulo(current)) {
            moduloNumbers[index] = current;
            index = index + 1;

            if (max < index) {
                max = index
            }
        }
    }

    index = 0
    while (index < max) {
        console.log(moduloNumbers[index]);
        index = index + 1
    }
}

const GLOBAL_MODULO = 2

module.exports = {
    printAllModulo,
    GLOBAL_MODULO
}