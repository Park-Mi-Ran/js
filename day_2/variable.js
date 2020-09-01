'use strict';
//var hoisting(항상 선언을 제일 위로 끌어올린다.) 
//코드블럭안에 var을 선언해도 gobal 변수처럼 사용가능하다.
{
 let name = 'ellie';
 console.log(name);
 name = 'hello';
 console.log(name);
}

//constance 절대변수(const) 선언후 변경 불가능
//favor immutable data type always 1. 보안상의 이유 2. 동시에 값을 변경할 수 있기 때문에
// 3. 실수방지

