const fibonacci = function(n) {
    n = Number(n)
    if (n<0) {
        return "OOPS";
    } else {
        if (n == 0 || n == 1) {
            return n;
        } else {
            let acc = [1,1]
            for (i=2; i<=n-1; i++){
                acc[i] = acc[i-1] + acc[i-2];
            }
            return acc[acc.length-1];
        }
        
    }
};

// Do not edit below this line
module.exports = fibonacci;
