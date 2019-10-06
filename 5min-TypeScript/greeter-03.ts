function greeter(person: string) {
    return "Hello, " + person;
}

let user = [0, 1, 2];

document.body.innerHTML = greeter(user);

/*
Result:
greeter-03.ts:7:35 - error TS2345: Argument of type 'number[]' is not assignable to parameter of type 'string'.
7 document.body.innerHTML = greeter(user);
~~~~
Found 1 error.
*/

/*
에러가 있었음에도 불구하고, greeter.js 파일은 여전히 생성됩니다.
코드에 오류가 있어도 TypeScript를 사용할 수 있습니다.
그러나 이 경우에 TypeScript는 코드가 예상대로 실행되지 않을 것이라고 경고합니다.
*/