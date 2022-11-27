var과 let, const 차이점
=====
&nbsp;

## ☻ 1. 변수 선언 전 사용
&nbsp;  
• **var**은 <U>변수를 만들기 전에 사용이 가능하다.</U>

```
console.log(test);
var test; // undefined 출력
```  
&nbsp;

이렇게 작성하면 에러가 발생하는게 아니라 undefined값이 출력된다. 선언이 나중에 되었지만 위로 올라간 듯한 **호이스팅(Hoisting) 현상**이 발생한다.  

호이스팅은 선언 부분만 끌어 올려지기 때문에

```
console.log(test); // undefined 출력
var test = 'Hello';
console.log(test); // Hello 출력
```

이렇게 변수 선언과 동시에 값을 할당하더라도 할당된 값 자체는 그 이후에 접근이 가능하다.
&nbsp;  
&nbsp;

• **let과 const**는 <U>선언 이전에 사용이 불가능</U>해서 예상치 못한 에러가 발생했을 때 그 원인을 파악하기 훨씬 수월하다.

&nbsp;  
&nbsp;  
&nbsp;  


## ☻ 2. 변수 중복 선언
&nbsp;  
• **var**은 <U>중복 선언이 가능하다.</U>  
&nbsp;

```
var test = 'Hello';
console.log(test); // Hello 출력

var test = 'Welcome';
console.log(test); // Welcome 출력
```

이렇게 작성해도 문제없이 각각 Hello와 Welcome이 출력되는 걸 확인할 수 있다.  

하지만 두 선언 사이에 훨씬 많은 코드들이 있어서 실수로 이미 선언한 변수명을 중복으로 선언해 버리면 그 이후부터는 선언한 Hello라는 값은 사라지게 되는 문제가 발생한다.


• 반면에 **let과 const**는 <u>중복 선언이 불가능하여 같은 이름으로 중복 선언하려하면 콘솔에 에러 메시지가 나타난다.</u>

&nbsp;  
&nbsp;  
&nbsp;  


##  ☻ 3. 스코프 (scope)
&nbsp;  
•  **var**은 변수의 <u>스코프나 함수 단위로만 구분</u>된다. 
```
var x = 3;

if (x < 4) {
    var y = 3;
}

for (var i = 0; i < 5; i++){
    console.log(i);
}

console.log('x:', x); 
console.log('y:', y); 
console.log('i:', i); 
```
```
0
1
2
3
4
x: 3
y: 4
i: 5
```

때문에 <u>조건문이나 반복문 안에서 새로운 변수를 만들게 되더라도 모두 **전역 변수** 로 평가</u>된다.
&nbsp;  
&nbsp;  



• 이 부분을 해결하기 위해 **let과 const**는 <u>**코드 블록**(중괄호가 사용되는 부분)을 기준으로 변수의 유효 범위를 구분</u>한다.  

위 코드의 var을 let으로 바꾸고 실행해보면,  
```
let x = 3;

if (x < 4) {
    let y = 3;
}

for (let i = 0; i < 5; i++){
    console.log(i);
}

console.log('x:', x); 
console.log('y:', y); 
console.log('i:', i); 
```
```
0
1
2
3
4
x: 3
ReferenceError: y is not defined
```
이처럼 "y가 선언되지 않았다"라는 에러 메시지가 나타난다.

if문 안에서 let으로 선언된 변수 y는 if문의 코드 블록 안에 있는 지역 변수로 평가됐기 때문에 if문 밖에서는 사용할 수가 없게 된 것이다.
&nbsp;  
&nbsp;  
&nbsp;  



```
{
    let test = "Hello";
    console.log(test);
}

console.log(test);
```

let과 const는 어떤 문범에 해당하는 **특별한 키워드 없이 단순히 코드 블록으로만 구분되어 있어도 모두 스코프를 구분**하기 때문에 코드 블록 안에서는 Hello가 잘 출력 되지만 밖에서는 에러가 출력되는 것을 볼 수 있다.

```
Hello  
ReferenceError: test is not defined
```