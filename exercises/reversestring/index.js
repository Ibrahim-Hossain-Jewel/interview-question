// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    debugger;
    return str.split("").reduce((reversed,character) => character + reversed);
}
reverse("jewel");
module.exports = reverse;




    // //Now make a reversed program using for loop.
    // const reversed = '';
    // for (let char = 0; char < str.length; char++){
    //     reversed = str[char] + reversed;
    // }
    // return reversed;
// const reversed = '';
//     for(const character of str){
//         reversed = character + reversed;
//     }
//     return reversed;
//return str.split("").reverse().join("");