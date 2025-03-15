const leapYears = function(y) {
//if divisible by 4 but not 100 or by 400
    if (((y % 4 === 0) && (y % 100 != 0)) || (y % 400 === 0)) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
