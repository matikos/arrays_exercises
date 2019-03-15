
const thirdWord = (arr) => {


let swapped;
//making sure that array will be sorted at least once
do {
  swapped = false;
  let ind = 0;
  //sorting throu array one time
  for (let i = 1; i < arr.length; i++) {
    //checking if the pair needs swapping
    if (arr[ind].length > arr[ind + 1].length) {
      //swapping
      swapped = true;
      [arr[ind], arr[ind + 1]] = [arr[ind + 1], arr[ind]];
      //moving onto next index
      ind += 1;
    } else {
      ind += 1
      }
  }
} 
//if no swaps were made the while loop should terminate
while (swapped);
//returning 
return arr[arr.length - 3]

}

console.log(thirdWord(['moodle', 'cat', 'bell', 'wikipedia']));