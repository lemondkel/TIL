### 1. 두 수의 합
&nbsp;
#### < 문제 설명 >

정수 num1과 num2가 주어질 때, num1과 num2의 합을 return하도록 soltuion 함수를 완성해주세요.

&nbsp;

#### < 제한사항 >
-50,000 ≤ num1 ≤ 50,000
-50,000 ≤ num2 ≤ 50,000

&nbsp;

#### < 입출력 예 >
|num1|num2|result|
|:----:|:----:|:----:|
|2|3   |  5  |
|100|2   |  102  |

&nbsp;

#### < 입출력 예 설명>
#### 입출력 예 #1
num1이 2이고 num2가 3이므로 2 + 3 = 5를 return합니다.
#### 입출력 예 #2
num1이 100이고 num2가 2이므로 100 + 2 = 102를 return합니다.

&nbsp;

#### < 풀이 >
```
function solution(num1, num2) {
    let result = 0;
    result  = num1 + num2;
    return result;
}
```

ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

### 2. 두 수의 차

&nbsp;

#### < 문제 설명 >

정수 num1과 num2가 주어질 때, num1에서 num2를 뺀 값을 return하도록 soltuion 함수를 완성해주세요.

&nbsp;

#### < 제한사항 >
-50000 ≤ num1 ≤ 50000
-50000 ≤ num2 ≤ 50000

&nbsp;

#### < 입출력 예 >
|num1|num2|result|
|:----:|:----:|:----:|
|2|3   |  -1  |
|100|2   |  98  |


&nbsp;

#### < 입출력 예 설명>
#### 입출력 예 #1
num1이 2이고 num2가 3이므로 2 - 3 = -1을 return합니다.
#### 입출력 예 #2
num1이 100이고 num2가 2이므로 100 - 2 = 98을 return합니다.

&nbsp;

#### < 풀이 >
```
function solution(num1, num2) {
    let result = 0;
    result = num1 - num2;
    return result;
}
```
--------------------------------------------

### 3. 두 수의 곱

&nbsp;

#### < 문제 설명 >
정수 num1, num2가 매개변수 주어집니다. num1과 num2를 곱한 값을 return 하도록 solution 함수를 완성해주세요.

&nbsp;

#### < 제한사항 >
0 ≤ num1 ≤ 100
0 ≤ num2 ≤ 100

&nbsp;

#### < 입출력 예 >

|num1|num2|result|
|:----:|:----:|:----:|
|3|4   |  12  |
|24|19   |  513  |

&nbsp;

#### < 입출력 예 설명 >
#### 입출력 예 #1
num1이 3, num2가 4이므로 3 * 4 = 12를 return합니다.
#### 입출력 예 #2
num1이 27, num2가 19이므로 27 * 19 = 513을 return합니다.

&nbsp;

#### < 풀이 >
```
function solution(num1, num2) {
    let result = 0;
    result = num1 - num2;
    return result;
}
```

ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

### 4. 몫 구하기

&nbsp;

#### < 문제 설명 >

정수 num1, num2가 매개변수로 주어질 때, num1을 num2로 나눈 몫을 return 하도록 solution 함수를 완성해주세요.

&nbsp;

#### < 제한사항 >
0 < num1 ≤ 100
0 < num2 ≤ 100

&nbsp;

#### < 입출력 예 >

|num1|num2|result|
|:----:|:----:|:----:|
|10|5   |  2  |
|7|2   |  3  |

&nbsp;

#### < 입출력 예 설명 >
#### 입출력 예 #1
num1이 10, num2가 5이므로 10을 5로 나눈 몫 2를 return 합니다.
#### 입출력 예 #2
num1이 7, num2가 2이므로 7을 2로 나눈 몫 3을 return 합니다.

&nbsp;

#### < 풀이 >
```
function solution(num1, num2) {
   	let result = 0;
    result = parseInt(num1 / num2);
    return result;
}
```
