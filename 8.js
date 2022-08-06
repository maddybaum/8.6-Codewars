/*Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24 */

function grow(x){
    return x.reduce((acc, curr) => acc * curr)
  }

/*
Create a function with two arguments that will return an array of the first (n) multiples of (x).

Assume both the given number and the number of times to count will be positive numbers greater than 0.

Return the results as an array (or list in Python, Haskell or Elixir).

Examples:

countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
countBy(2,5) === [2,4,6,8,10]
*/

function countBy(x, n) {
    var z = [];
    for (i = 1; i <= n; i++) {
        z.push(x * i);
    }
    return z;
}
/*
In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater or equal to p = 1200 inhabitants?
*/


function nbYear(p0, percent, aug, p) {
    let year = 0;
    while (p0 < p) {
      p0 += p0 * percent/100 + aug;
      year++;
    }
    return year;
  }
    
  function wordsToMarks(string){
    let sum = 0;
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  for(let i = 0; i < string.length; i++){
  sum += alphabet.indexOf(string[i]) + 1
    }
  return sum
};
     