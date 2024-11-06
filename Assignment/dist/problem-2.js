"use strict";
{
    // a new array with duplicates removed
    const removeDuplicates = (numbers) => {
        return [...new Set(numbers)];
    };
    const result22 = removeDuplicates([1, 2, 2, 3, 4, 4, 5]);
    console.log(result22);
    // 
}
