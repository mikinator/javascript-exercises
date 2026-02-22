const sumAll = function(num1, num2) {
    let start;
    let end;

    if (num1 < 0 || num2 < 0 || !Number.isInteger(num1) || !Number.isInteger(num2))
        return "ERROR"
    if (num2 < num1) {
        start = num2;
        end = num1;
    }
    else {
        start = num1;
        end = num2;
    }

    let termCount = end - start + 1;
    return termCount * (start + end) / 2;
};

// Do not edit below this line
module.exports = sumAll;
