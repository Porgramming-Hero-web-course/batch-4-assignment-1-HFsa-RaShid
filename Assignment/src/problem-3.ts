{
  // the number of times the word appears in the sentence

  const countWordOccurrences = (sentence: string, word: string): number => {
    const count = sentence.toLowerCase().split(word.toLowerCase()).length - 1;
    return count;
  };

  const result = countWordOccurrences("I love typescript", "typescript");
  console.log(result);

  //
}
