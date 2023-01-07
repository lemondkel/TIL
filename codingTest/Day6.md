### 1. 문자열 뒤집기	

#### < 문제 설명 >

문자열 my_string이 매개변수로 주어집니다. my_string을 거꾸로 뒤집은 문자열을 return하도록 solution 함수를 완성해주세요.


#### < 제한사항 >

1 ≤ my_string의 길이 ≤ 1,000


#### < 입출력 예 >

|my_string|return|
|:---:|:---:|
|"jaron"|"noraj"|
|"bread"|"daerb"|


#### < 입출력 예 설명>

#### 입출력 예 #1

my_string이 "jaron"이므로 거꾸로 뒤집은 "noraj"를 return합니다.

#### 입출력 예 #2

my_string이 "bread"이므로 거꾸로 뒤집은 "daerb"를 return합니다.


#### < 풀이 >

```
function solution(mystring) {
        let result = "";
        result = 	mystring.split("").reverse().join("");
        return result;
}
```
ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

### 2. 직각삼각형 출력하기

#### < 문제 설명 >

"*"의 높이와 너비를 1이라고 했을 때, "*"을 이용해 직각 이등변 삼각형을 그리려고합니다. 정수 n 이 주어지면 높이와 너비가 n 인 직각 이등변 삼각형을 출력하도록 코드를 작성해보세요.

#### < 제한사항 >

1 ≤ n ≤ 10

#### < 입출력 예 >

입력 #1
```
3
```
출력 #1
```
*
**
***
```

#### < 입출력 예 설명>

#### 입출력 예 #1

n이 3이므로 첫째 줄에 * 1개, 둘째 줄에 * 2개, 셋째 줄에 * 3개를 출력합니다.


#### < 풀이 >

```
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
     for (let i = 1; i <= input[0]; i++) console.log('*'.repeat(i));
});
```
ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ



### 3. 짝수 홀수 개수

#### < 문제 설명 >

정수가 담긴 리스트 num_list가 주어질 때, num_list의 원소 중 짝수와 홀수의 개수를 담은 배열을 return 하도록 solution 함수를 완성해보세요.

#### < 제한사항 >

1 ≤ num_list의 길이 ≤ 100
0 ≤ num_list의 원소 ≤ 1,000

#### < 입출력 예 >

|num_list|result|
|:---:|:---:|
|[1, 2, 3, 4, 5]|[2, 3]|
|[1, 3, 5, 7]|[0, 4]|


#### < 입출력 예 설명>

#### 입출력 예 #1

[1, 2, 3, 4, 5]에는 짝수가 2, 4로 두 개, 홀수가 1, 3, 5로 세 개 있습니다.

#### 입출력 예 #2

[1, 3, 5, 7]에는 짝수가 없고 홀수가 네 개 있습니다.


#### < 풀이 >

```
function solution(num) {
    let a = 0;
    let b = 0;
    for(let i=0; i<num.length; i++){
        if(num[i] % 2 == 0){
            a++;
        } else
            b++;
    }
    let result = [a, b];
    return result;
}
```
ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ


### 4. 문자 반복 출력하기

#### < 문제 설명 >

문자열 my_string과 정수 n이 매개변수로 주어질 때, my_string에 들어있는 각 문자를 n만큼 반복한 문자열을 return 하도록 solution 함수를 완성해보세요.

#### < 제한사항 >

2 ≤ my_string 길이 ≤ 5
2 ≤ n ≤ 10
"my_string"은 영어 대소문자로 이루어져 있습니다.

#### < 입출력 예 >

|my_string|n|result|
|:---:|:---:|:---:|
|"hello"|3|"hhheeellllllooo"|

#### < 입출력 예 설명>

#### 입출력 예 #1

"hello"의 각 문자를 세 번씩 반복한 "hhheeellllllooo"를 return 합니다.


#### < 풀이 >

```
function solution(my_string, n) {
    let result = '';
    for(let i=0; i<my_string.length;){
       result += my_string[i].repeat(n);
        i++;
    }
    return result;
}
```
