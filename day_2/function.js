// function
// 장 :재사용 가능
// 한가지 task나 어떠한 값을 계산 하기위해 사용
// 구성
// function name(parm1, parm2) { body... return;}
//one funtion == one thing
//naming => 동사형태로 이름을 지정해야한다.
//JS에서는 function은 object 간주된다. 때문에 변수에 할당, 파라미터로 전달, 함수를 return 가능

function printHello(){
    console.log('Hello');
}
printHello(); //함수 호출


function log(message){
    console.log(message);
    return 0;
}
log('Hello!');

//ts의 경우
//function log(message: string): number{  :number은 리턴값의 type을 명시
//    console.log(message);
//    return 0;
//}

//  2. parameters
// premitive parameters: passed by value
// object parameters: passed by reference
function changeName(obj){
    obj.name = 'coder';
}
const ellie = { name: 'ellie'}
changeName(ellie);
console.log(ellie);

//  3. Default paramters (added in ES6)
function showMessage(message, from) {
    console.log(`${message} by ${from}`); 
}
showMessage('Hi!'); // Hi! by undefined

function showMessage(message, from = 'unknown') {
    console.log(`${message} by ${from}`); 
}
showMessage('Hi!'); // Hi! by unknown

//  4. Rest parameters ( added in ES6)
function printAll(...args) {  //... Rest parameters: 배열 형태로 전달된다.
    for (let i =0; i< args.length; i++){
        console.log(args[i]);
    }

    for (const arg of args){ // 배열을 전부 출력하는 간단한 for문장
        console.log(arg);
    }

    args.forEach((arg) => console.log(arg)); // forEach를 사용하여 배열을 출력
}
printAll('dream','coding','ellie');

//5. local scope : 밖에서는 안을 볼수 없고 안에서만 밖을 볼 수 있다.
let globalMessage = 'global'; // 전역변수
function printMessage() {
    let message = 'hello'; // 지역변수
    console.log(message);
    console.log(globalMessage);
}
printMessage();

//  6. return a value

function sum(a,b){
    return a+b;
}
const result = sum(1,2);
console.log(`sum: ${result}`);
console.log(`sum: ${sum(1,2)}`);


//  7. Early return , early exit 
//bad
function ungradeUser(user) {
    if(user.point>10){
        //long upgrade logic...
    }
}
//good
function ungradeUser(user){
    if(user.porint<=10){ 
        return ;
    }
    //long upgrade logic... 필요한 로직을 아래쪽으로, return은 빨리
}

//  function expression
const print = function() { // anonymous function을 바로 변수에 할당
    console.log('print');
}
print();
const printAgain = print;
printAgain();
const sumAgain = sum; //74줄 function
console.log(sumAgain(1,3));


// callback function
function randomQuiz(answer, printYes, printNo) {
    if (answer === 'love you') {
        printYes();
    } else{
        printNo();
    }
}

const printYes = function() {
    console.log('yes!');
};

const printNo = function() {
    console.log('no!');
};

randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

// arrow function <- anonymous function

const simplePrint = () => console.log('no!');
const add = (a,b) => a+b;

// IIFE :함수선언과 동시에 호출하고 싶을 때
(function hello() {
    console.log('IIFE');
})();

//qs
function calculate(command, a, b){
    switch (command) {
        case 'add':
            return a+b;
            break;
        case 'substract':
            return a-b;
            break;
        case 'divide':
            return a/b;
            break;
        case 'multiply':
            return a*b;
            break;
        case 'remainder':
            return a%b;
            break;
    }
}
calculate('add',1,2);