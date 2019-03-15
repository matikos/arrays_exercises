let myArr = ["cat","black","You are late.","rabbit","Frost is gone."];


const wordsExtraction = (arr) => {
  let wordsArray = [];
  for (let m = 0; m < arr.length; m++){
    if (!(arr[m].includes(".") || arr[m].includes("!") || arr[m].includes("?"))) {
      wordsArray.push(arr[m])
    }
  }
   return wordsArray
}


const countWordsAndSentences = (arr) => {
  let sentenceCount = 0;
  let wordCount = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].includes(".")) {
      sentenceCount += 1;
    } else {
      wordCount += 1;
      }
    
    }

  console.log(`number of words in array: ${wordCount}`);
  console.log(`number of sentences in array: ${sentenceCount}`);
};
countWordsAndSentences(myArr);

const longestWord = (arr) => {
  let longword;
  let ind = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[ind].length > arr[1].length) {
      longword = arr[ind];
      ind += 1
    } else {
      longword = arr[1];
      ind += 1

    }
  }
  console.log(`longest word: ${longword}`);
};
longestWord(wordsExtraction(myArr));
  
const averageWord = (arr) => {
  let howManyLetters = 0;
  let ind = 0;
  for (let i = 0; i < arr.length; i++) {
    howManyLetters += arr[ind].length;
    ind += 1;
  }
  console.log(`average length of words used: ${howManyLetters / arr.length}`);
};
averageWord(wordsExtraction(myArr));

const threeLetters = (arr) => {
  let threeLet = 0;
  let ind = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[ind].length == 3) {
      threeLet += 1;
      ind ++;
    } else {
      ind ++;
    }
  }
  console.log(`number of 3-letter words: ${threeLet}`);
};

threeLetters(wordsExtraction(myArr));






