{
  // a new array with duplicates removed

  const removeDuplicates = (numbers: number[]): number[] => {
    const uniqueElements: number[] = [];

    for (const num of numbers) {
      if (uniqueElements.indexOf(num) === -1) {
        uniqueElements.push(num);
      }
    }

    return uniqueElements;
  };

  const result = removeDuplicates([1, 2, 2, 3, 4, 4, 5]);
  console.log(result);

  //
}
