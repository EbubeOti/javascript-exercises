const sumAll = function(a,b) {
    let acc = 0;
    if (a<0 || b<0 || !Number.isInteger(a) || !Number.isInteger(b)) {
        return "ERROR";
    } else {
        for (i = Math.max(a,b); i >= Math.min(a,b); i--) {
            acc += i;
        }
        return acc;
    }
};

// Do not edit below this line
module.exports = sumAll;
