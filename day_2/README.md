- 자바스크립트 3강

* 변수
var
↓
let이라는 키워드를 사용(ES6에서 추가) * IE는 지원 x

# 12분 7초 부분 설명 정리
- 숫자 type는 number 하나
- 타입스크립트 경우에는 let a: number = 12; 즉 number을 명시해야한다.

* 연산하기 전에 값이 연산할 수 있는 값인지 확인을 잘 해야한다.
- dom요소를 js를 이용해 포지션을 바꾸거나 다양한 계산을 할 때 에러가 발생할 수 있기 때문에

* string
- template literals/ 변수의 값이 자동적으로 붙여져서 반환된다.
ex)  const helloBob = 'hi ${brandan}!';
- 백틱을 이용해서 string을 쉽게 출력 가능하다.
ex) console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

* boolean
- false : 0, null, undefined, NaN(Not a Number), ''
    null // 값 x
    undefined // 선언 o 값 지정 x
- true : any other value

* symbol
- 고유한 식별자가 필요할 때 사용한다.
- 동일한 string을 작성했어도 다른 symbol로 만들어진다. 
- 동일한 symbol을 작성하고 싶을 때 (for을 사용해준다.)
ex) const symbol1 = Symbol.for('id');
    const symbol2 = Symbol.for('id');
- symbol을 출력하고 싶을 때(.description을 이용)
ex) console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

* dynamically typed language -> 에러가 많이 생기는 부분
- 할당된 값에 따라 값이 변경 될 수 있다.

* TS
- JS위에 TYPE이 올려진 언어
-----------------------------------------------------------------
* 뻘짓
- 주석, vs code 설정 값변경
    "editor.fontSize": 17,

// 주석(comments) 색상 변경 
"editor.tokenColorCustomizations": {
     "textMateRules": [ 
         { 
             "scope": "comment", 
             "settings": { 
                 "fontStyle": "italic", //주석의 폰트체를 이탤릭 처리 
                 "foreground": "#99FF99", //주석의 색상을 변경 
                 "editor.fontWeight": "bold",
                 } 
            } 
        ] 
    },

----------------------------------------------------------------------
- 자바스크립트 4강



