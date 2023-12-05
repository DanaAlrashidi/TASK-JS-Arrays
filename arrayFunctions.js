/**
 * isArrayLengthOdd(numbers):
 * - receives array `numbers`
 * - returns true if array has an odd number of elements
 * - returns false otherwise
 *
 * e.g.
 * isArrayLengthOdd([1, 2, 3]) -> true
 * isArrayLengthOdd([1, 2, 3, 4]) -> flase
 */
let numbers = [1, 2, 3];
function isArrayLengthOdd(numbers) {
  // Your code here

  console.log(numbers);

  if (numbers.length % 2 == 1) {
    return true;
  } else {
    return false;
  }
}
console.log(isArrayLengthOdd(numbers));

/**
 * isArrayLengthEven(numbers):
 * - receives array `numbers`
 * - returns true if array has an even number of elements
 * - returns false otherwise
 *
 * e.g.
 * isArrayLengthEven([1, 2, 3]) -> false
 * isArrayLengthEven([1, 2, 3, 4]) -> true
 */
let numbers2 = [1, 2, 3, 4];
function isArrayLengthEven(numbers) {
  // Your code here

  console.log(numbers);

  if (numbers.length % 2 == 0) {
    return true;
  } else {
    return false;
  }
}
console.log(isArrayLengthEven(numbers2));

/**
 * addLailaToArray(instructors):
 * - receives array `instructors`
 * - returns a new array that's a copy of array `instructors` with additional string "Laila"
 *
 * e.g.
 * addLailaToArray(["Mshary", "Hasan"]) -> ["Mshary", "Hasan", "Laila"]
 */
let instructors = ["dana", "sultana"];
function addLailaToArray(instructors) {
  // Your code here
  console.log(instructors);
  instructors.push("Laila");
  console.log(instructors);
}
console.log(addLailaToArray(instructors));
/**
 * eliminateTeam(teams):
 * - receives array `teams`
 * - removes the last element from the array and return it
 *
 * e.g.
 * eliminateTeam(["Brazil", "Germany", "Italy"]) -> "Italy"
 */
let teams = ["Brazil", "Germany", "Italy"];
function eliminateTeam(teams) {
  // Your code here
  return teams.pop();
  // console.log(teams);
}
console.log(eliminateTeam(teams));

/**
 * secondHalfOfArrayIfItIsEven(fruits):
 * - receives array `fruits`
 * - returns a new array that's the second half of the original array if it has an even number of elements
 * - returns an empty array if it has an odd number of elements
 *
 * e.g.
 * secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi"]) -> ["banana", "kiwi"]
 * secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi", "blueberry"]) -> []
 */
let fruits = ["apple", "orange", "banana", "kiwi"];
function secondHalfOfArrayIfItIsEven(fruits) {
  // Your code here
  console.log(fruits);
  if (fruits.length % 2 == 0) {
    return fruits.slice(fruits.length / 2);
  } else {
    return [];
  }
}
console.log(secondHalfOfArrayIfItIsEven(fruits));
/**
 * youGottaCalmDown(shout):
 * - receives a string `shout`
 * - returns the string `shout` with at most one exclamation mark (!) at the end.
 *
 * e.g.
 * youGottaCalmDown("HI!!!!!!!!!!") -> "HI!"
 * youGottaCalmDown("Taylor Schwifting!!!!!!!!!!!") -> "Taylor Shwifting!"
 * youGottaCalmDown("Hellooooo") -> "Hellooooo"
 *
 * Hint:
 * - Use number method .indexOf()
 * - Use string method .slice()
 */
let shout = "HI!!!!!!!!!!";
let shout2 = "Taylor Schwifting!!!!!!!!!!!";
function youGottaCalmDown(shout) {
  // Your code here
  let index = shout.indexOf("!");

  if (index == -1) {
    return shout;
  } else {
    return shout.slice(0, index + 1);
  }
}

console.log(youGottaCalmDown(shout));
console.log(youGottaCalmDown(shout2));
