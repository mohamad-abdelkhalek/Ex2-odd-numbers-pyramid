function oddNums(num) {
    for (let i = 1; i <= num; i++) {
      let odds = "";
      for (let j = 1; j <= i; j++) {
        odds += (2 * j - 1) + " ";
      }
      console.log(odds);
    }
  }
  
  var userInput = parseInt(prompt("Enter a number:"));
  oddNums(userInput);