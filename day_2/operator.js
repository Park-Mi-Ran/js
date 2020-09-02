//  1. string conctenation
console.log('my'+'cat'); // 문자열+문자열
console.log('1'+2); //문자열+숫자
console.log(`string literals: 1 + 2 = ${1+2}`);// `기호를 사용 & 
//String literals 이용하면 enter 적용 x

//  2. Numeric operators 사칙연산

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter = conter + 1;
// preIncrement = conter
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
const postIncrement = counter++;
// postIncrement = counter;
// counter = counter + 1;
console.log(`preIncrement: ${postIncrement}, counter: ${counter}`);

//  4. Assignment operatiors 할당가능한 연산
let x = 3;
let y = 4;
x += y; // x= x+y;
y /= x; // y = y/x;

// 5. Comparison operatiors 비교연산자

// 6. logical operatiors : ||(or),&&(and),!(not)
const value1 = false;
const value2 = 4<2;

//||, 
//첫번째에 ture가 나오면실행을 멈춤
//=> 효율적으로 코딩을 하기위해 함수처럼 무거운 조건(?)을 뒤에 배치하고 상대적으로 가벼운 value1, value2를 앞에 배치하는것이 좋다.
console.log(`or: ${value1 || value2 || check()}`)
//&&
//null check할 때 많이 사용한다. 
//첫번재에 false가 나오면 실행을 멈춤
//or와 마찬가지로 함수는 뒤쪽에 배치하는것이 효율적이다.
console.log(`and: ${value1 && value2 && check()}`)

function check(){
    
    for (let i = 0; i<10; i++){
        console.log('★');
    }
    return true;
}

//!
console.log(!value2);

//  7. equality

const stringFive = '5';
const numberFive = 5;

// == type 상관 x
console.log(stringFive == numberFive); //true
console.log(stringFive != numberFive); //false
 // === type 상관 o -> 사용을 많이한다.
console.log(stringFive === numberFive); //false
console.log(stringFive !== numberFive); //true

// equality사용시 object를 잘 확인해야한다.
const ellie1 = {name: 'ellie'};
const ellie2 = {name: 'ellie'};
const ellie3 = ellie1;

console.log(ellie1 == ellie2); // F
console.log(ellie1 === ellie3); // F 똑같은 값이라도 다른 ref를 가지고 있기 때문에 false
console.log(ellie1 === ellie3); // T

console.log(0 == false); // T
console.log(0 === false); // F (number != boolean)
console.log('' == false); // T
console.log('' === false); // F (string != boolean)
console.log(null == undefined); // T
console.log(null === undefined); // F


//  8. if, else
const name = 'coder';
if (name == 'ellie'){
    console.log('Welcome, Elie!');
} else if (name == 'coder'){
    console.log('Welcome, coder!');
} else{
    console.log('unknon');
}

// 9. Teranry operatior: ?
// true는 왼쪽 false는 오른쪽 실행
console.log(name === 'ellis' ? 'yes': 'no');

//10. switch
const brower = 'IE';
switch(brower) {
    case 'IE':
        console.log('go away!');
        break;
    case 'Chrome':
    case 'Firefox':
        console.log('love you!');
        break;
    default:
        console.log('same');
}

// 11. while
//while내 문장이 거짓이 될 때까지 실행
let i = 3;
while ( i>0) {
    console.log(`while: ${i}`);
    i--;
} // 실행 결과 3,2,1


//  12. do-while
// block을 실행한 후 조건 검사
do{
    console.log(`do-while: ${i}`);
    i--;
}
while(i>0);//실행결과 3,2,1,0

//  13. for

// nested loops => for, while 가능
// break, contiune


//qs 작성
for (let i = 1; i<11 ; i++){
    if(i%2 !== 0){
            continue;
        }
        console.log(i);
}

for(let i=0 ; i<11 ; i++){
    
    if(i==8){
        break;
    }
    console.log(i);
}