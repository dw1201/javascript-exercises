const removeFromArray = function() {
    const values = [1,2,3,4];
    const newValues = [];
    
    for (i = 0; i < values.length; i++) {
        if ((values[i] == values[i])) {
            newValues.push(values[i]);
        }
    }
    return(newValues);

};

// Do not edit below this line
module.exports = removeFromArray;
