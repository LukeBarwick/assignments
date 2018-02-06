var readline = require('readline-sync');
var input = readline.question('What phrase would you like to encrypt? ').toLowerCase();
var shift = parseInt(readline.question('How many letters would you like to shift? '));
/* first we need to use input to understand how many lowercase letters we will be shifting
2nd we will use shift to understand how many places we are expected to shift the letter to the right
3rd we need to determine whether or not the thing we are looking at is a letter
4th if it is a letter then we need to tell it to move it (shift) amount of times to the right
5th we need to put that character into an empty string
6th we need to have 4th and 5th step be part of a loop so it continues to do this for (input.length)
amount of times.
7th step should be logging that new string */
var alpha = "abcdefghijklmnopqrstuvwxyz";
var newPass = ""
if(var i = 0; i < input.length; i++){
var
}
