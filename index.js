console.log("hello world");
let pi;
pi = 3.142;
const r = 7;
let c = pi * r * r
console.log(c);
const CurrentUser = 'Brenda Njeri';
const WelcomeMessage = 'Welcome to my website';
console.log("CurrentUser".length);
console.log("CurrentUser"[5]);
console.log(WelcomeMessage, CurrentUser);
/*another way to concatenate*/
const CurrentUser1 = 'Brenda Nyagah';
const WelcomeMessagenew = 'Welcome to my website ' + CurrentUser1;
console.log(WelcomeMessagenew);
console.log(10!=9);

function testnum(a){
    let results;
    if(a>0){
        results = "positive";
    }
    else{
        results = "Not positive";
    }
    return results;
}
console.log(testnum(20));

/*user inputs values immediatly on the website
function numTest(a){
    let result;
    if(a>0){
        result = "positive";
    }
    else{
        result = "Not positive";
    }
    return result;
}
let UserInput = prompt("Enter a number to confirm if it's positive or not");
let number = Number(UserInput);

alert(numTest(number));*/

/*linked to the html*/
function lasttest(a){
    let answer;
    if (a>0) {
        answer = "positive";
    }
    else {
        answer = "Not positive";
    }
    return answer
}
function checknumber(){
    let input = document.getElementById("numberInput").value;
    let answer = lasttest(Number(input));
    document.getElementById("output").textContent = answer;
}