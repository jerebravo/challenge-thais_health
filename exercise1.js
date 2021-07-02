/*
Given a NxN matrix of positive integers, find the sum of all elements
that appear twice or more than twice in the matrix.
The first line of the input is the size of the matrix, N. The next N
lines are each a row of the matrix, where the elements are separated by
spaces.

Sample input:
3
1 0 2
2 3 8
6 8 8

Sample output:
10

Explanation:
2 appears 2 times and 8 appears 3 times. So the output is 2 + 8 = 10
⚠ ⚠ ⚠ PLEASE READ THIS CAREFULLY:
- The input is parsed as a matrix of strings. You need to convert the
elements to integers before using.
- Your function must print the answer to standard output/ console. Your
code should not print anything else. If your function returns the
answer and does not print it (test cases won't pass)
*/

function processInput(input) {
    //COMPLETE THIS FUNCTION
    var joinInput = [];
    var repeated = {};
    var repeatedStatus = {};
    var result = 0;

    input.map((data) => joinInput.push(...data));

    joinInput.forEach((number) => {
        repeated[number] = (repeated[number] || 0) + 1;
        if(repeated[number] > 1 && !repeatedStatus[number]){
            repeatedStatus[number] = true;
            result += parseInt(number)
        }
    });

    console.log(result)
}

//you do not need to edit any code below this line
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
    var n = parseInt(readLine());
    var input = []
    for (var i = 0; i < n; i++) {
        var str = readLine();
        input.push(str.split(" "));
    }

    processInput(input);
}