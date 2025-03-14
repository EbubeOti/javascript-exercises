const removeFromArray = function(anArray, ...num) {
    for (const n of num) {
           if (Array.isArray(anArray)) {
                const x = anArray.indexOf(n)
                const y = anArray.filter(z => z === n).length
                if (x != -1 ) {
                    anArray.splice(x,y);
                    
                }
                } else {
                    return "Error";
            }
    }
return anArray;
};

// Do not edit below this line
module.exports = removeFromArray;
