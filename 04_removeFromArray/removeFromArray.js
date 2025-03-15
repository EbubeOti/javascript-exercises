const removeFromArray = function(anArray, ...num) {
    for (const n of num) {
           if (Array.isArray(anArray)) {
                const x = anArray.indexOf(n)
                const y = anArray.filter(z => z === n).length
                if (x != -1 ) {
                    anArray.splice(x,y);
                    
                } else{
                    continue
                }
            } else {
                    return "Error: enter an array as the first argument";
            }
    }
return anArray;
};

// Do not edit below this line
module.exports = removeFromArray;
