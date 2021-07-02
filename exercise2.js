/*
Hu, a famous researcher is designing a new kind of typewriter that
enables users to type faster. The first line of the new typewriter has
the following alphabets: e, r, t, a, b, d, f, y, h. Given a list of the
most popular words, we need to figure out which is the longest out of
those words that can be typed using just the first line of the
typewriter.

--------------------------------------
Sample Input        |   Sample Output
--------------------------------------
bat, tab, tad       |   tad
bat, bate, tad      |   bate
bat                 |   bat
tab, hate           |   hate
at, tab             |   tab
cat, bat            |   bat

⚠ ⚠ ⚠ Please note:
1. If two or more words of equal length are the longest words that can
be typed, print the one that appears last in the list.
2. The entire list of words is parsed as a string and passed to the
function. You need to convert into an array/list as per your
requirements.
3. Your function must print the answer to standard output/ console. Your
code should not print anything else. If your function returns the answer
but does not print it, the test cases will not pass.
*/

//JS
function processInput(string1) {
    //COMPLETE THIS FUNCTION
    var lettersFirstLineTypewriter = ['e', 'r', 't', 'a', 'b', 'd', 'f', 'y', 'h'];
    var wordsSplit = string1.split(',');
    var result = '';

    wordsSplit.map((word) => {
        var wordTrim = word.trim();
        var letters = wordTrim.split('');
        var statusLetters = letters.every(letter => lettersFirstLineTypewriter.includes(letter) );

        if(statusLetters && result.length <= wordTrim.length){
            result = wordTrim;
        }
    })

    console.log(result);
}

//DO NOT EDIT ANY CODE BELOW THIS LINE
process.stdin.resume();
process.stdin.setEncoding('ascii');
var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    testCode();
});

function readLine() {
    return input_stdin_array[input_currentline++].trim();
}

function testCode() {
    var string1 = readLine();
    processInput(string1.trim());
}