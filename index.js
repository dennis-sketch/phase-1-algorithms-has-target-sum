function hasTargetSum(array, target) {
  // Write your algorithm here
  for (let i = 0; i < numbers.length; i++) {
    const currentNumber = numbers[i];
    
    // Check if there is another number in the array that, when added to the current number, equals the target
    if (numbers.slice(i + 1).includes(target - currentNumber)) {
      return true;
    }
  }
  return false;
}
module.exports = hasTargetSum;

/* 
  Write the Big O time complexity of your function here

*/
const { expect } = require('chai');
const hasTargetSum = require('../index');

describe('hasTargetSum', () => {
  it('returns true for [3, 8, 12, 4, 11, 7] and target 10', () => {
    expect(hasTargetSum([3, 8, 12, 4, 11, 7], 10)).to.be.true;
  });

  it('returns true for [22, 19, 4, 6, 30] and target 25', () => {
    expect(hasTargetSum([22, 19, 4, 6, 30], 25)).to.be.true;
  });

  it('returns false for [1, 2, 5] and target 4', () => {
    expect(hasTargetSum([1, 2, 5], 4)).to.be.false;
  });


});


/* 
  Add your pseudocode here
*/
console.log("Expecting: true");
console.log("=>", hasTargetSum([1, 2, 3, 4, 5], 9));

console.log("");

console.log("Expecting: false");
console.log("=>", hasTargetSum([1, 2, 3, 4, 5], 11));

/*
  Add written explanation of your solution here
*/


// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
