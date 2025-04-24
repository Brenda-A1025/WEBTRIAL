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