"use strict";
{
    // the number of times the word appears in the sentence
    const countWordOccurrences = (sentence, word) => {
        const count = sentence.toLowerCase().split(word.toLowerCase()).length - 1;
        return count;
    };
    const result = countWordOccurrences("TypeScript is great. I love TypeScript!", "typescript");
    console.log(result);
    //
}
