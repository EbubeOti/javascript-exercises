const repeatString = function(string, num) {
    let i = 1;
    let acc = string;
    while (i < num) {
        acc = acc + string
      i++;
    }
    return acc
};

// Do not edit below this line
module.exports = repeatString;
