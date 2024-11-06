"use strict";
{
    //sum of all elements in the array
    const sumArray = (numbers) => {
        let sum = 0;
        numbers.forEach((number) => {
            sum += number;
        });
        return sum;
    };
    const result = sumArray([1, 2, 3, 4, 5]);
    console.log(result);
    //
}
