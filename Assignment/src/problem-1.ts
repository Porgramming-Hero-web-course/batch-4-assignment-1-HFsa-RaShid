{
  //sum of all elements in the array

  const sumArray = (numbers: number[]): number => {
    let sum: number = 0;
    numbers.forEach((number: number) => {
      sum += number;
    });
    return sum;
  };

  const result = sumArray([1, 2, 3, 4, 5]);
  console.log(result);

  //
}
