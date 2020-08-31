# js 공부하기!!

DAY 1. hello world, 환경설정하기
- 참고자료: https://www.youtube.com/watch?v=tJieVCgGzhs&t=29s
자바스크립트 공식사이트 ecma-international.org
developer.mozilla.org // 더 많이 사용하는 사이트

- node.js는 js엔진이 있어 브라우저 없이도 바로 실행 가능하다.
- js파일이 있는 곳으로 이동해 cmd를 통해서 node hello.js를 통해 hello world! 를 출력한다.// node.js command에서도 실행가능
- console api // browser가 이해할 수 있는 함수들.
- dev tools (web ->f12)
간단한 js를 실행할 수 있음.
sorce //디버깅할 때 유용하게 사용한다.
------------------------------------------------
* js를 정의하는 방법
1. head 태그 내에
- <script src ="hello.js"></script>
- 단점 : 사용자가 html요소들을 확인하는데 오랜시간이 걸리기 때문이다.
2. body 태그 내에
- <script src ="hello.js"></script>
- 단점 : js서버에 의존적인 페이지라면 또 js를 기다리는데 오랜시간이 걸린다.
3. head + asyns
- <script asyns src = "hello.js"></script>
- asyns 속성값을 사용 boolean으로 이루어져있기 때문에 true로 설정 // 병렬로 html실행과 js를 가져옴
- 단점 : js에서 qs를 이용해서 dom요소를 변경하고싶을 때 html parsing이 끝나지 않았기 때문에 위험할 수 있다. / 사용자가 페이지를 보는데 시간이 지연된다.
4. head+defer ※가장 좋은 옵션
- <script defer src = "hello.js"></script>


