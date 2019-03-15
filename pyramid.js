const printPyramid = (numberOfRows) => {

  let stars = [];
    for (i = 1; i < (numberOfRows * 2 + 1); i++) {
      stars.push(' ');
    }
    stars.splice((Math.floor(numberOfRows)), 0, '*');
    console.log(stars.join(''));
    
    for (z = 1; z < numberOfRows; z++) { 
      stars.splice((numberOfRows + z), 1, '*');
      stars.splice((numberOfRows - z), 1, '*');
      console.log(stars.join(''));
    }
  
    }
  
  printPyramid(9);
  
  
  
  