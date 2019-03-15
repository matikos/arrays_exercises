//Declaring array, its length and first index
let array = [3,2,1,7,6,10,11,5];
let lengthOfArray = array.length;

let swapped;
//making sure that array will be sorted at least once
do {
  swapped = false;
  let ind = 0;
  //sorting throu array one time
  for (let i = 1; i < lengthOfArray; i++) {
    //checking if the pair needs swapping
    if (array[ind] > array[ind + 1]) {
      //swapping
      swapped = true;
      [array[ind], array[ind + 1]] = [array[ind + 1], array[ind]];
      //moving onto next index
      ind += 1;
    } else {
      ind += 1
      }
  }
} 
//if no swaps were made the while loop should terminate
while (swapped);
//showing of the results - thank you for watching
console.log(array);