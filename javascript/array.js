// (1) push 함수 사용해 배열의 마지막 위치에 요소 추가

let arr = ["A", "B", "C", "D"];
console.log(arr.length);  // 4

let usePush = arr.push("E");
console.log(arr.length); // 5
console.log(arr);        // ["A", "B", "C", "D", "E"]

let usePush = arr.push("F", "G", "H");
consloe.log(arr);  // ["A", "B", "C", "D", "E", "F", "G", "H"]

let usePush = arr.push(1, 2);
consloe.log(arr);  // ["A", "B", "C", "D", "E", "F", "G", "H", 1, 2]





// (2) unshift 함수 사용해 배열의 첫번째 위치에 요소 추가

let arr = ["A", "B", "C", "D"];
console.log(arr.length);  // 4

let useUnshift = arr.unshift("E", "F", "G");
console.log(arr.length);  // 7
console.log(arr);         // ["E", "F", "G", "A", "B", "C", "D"]





// (3) splice 함수 사용해 배열 요소 추가
// 첫 번째 인수 : 추가/제거할 배열 요소의 인덱스, 두 번째 인수 : 제거할 배열 요소의 개수, 세 번째 인수부터 : 추가할 요소

let arr = ["A", "B", "C", "D"];

arr.splice(1, 0, "E", "F"); // 1번째 인덱스부터 0개 요소 제거하고 "E", "F" 추가
console.log(arr); // ["A", "E", "F", "B", "C", "D"];






// (4) length 속성 사용해 배열 요소 추가

let arr = ["A", "B", "C", "D"];

arr[3] = "P";
console.log(arr); // ["A", "B", "C", "P", "D"]





// (5) concat 함수 사용해 배열 요소 추가
// 기존 배열과 인자로 주어진 배열 또는 값을 병합해 새로운 배열 생성

let arr = ["A", "B", "C", "D"];
let useConcat = arr.concat("E", "F");

consle.log(arr);  // ["A", "B", "C", "D", "E", "F"]





// (6) spread 연산자 사용해 배열 요소 추가
// ...연산자

let arrStr = ["A", "B", "C", "D"];
let arrNum = ["1", "2", "3", "4"];

let useSpread = [...arrStr, ...arrNum];

console.log(useSpread); // ["A", "B", "C", "D", "1", "2", "3", "4"]



// (6)-1 spread 연산자를 사용하지 않을 경우 -> 중첩된 배열 생성

let arrStr = ["A", "B", "C", "D"];
let arrNum = ["1", "2", "3", "4"];

let useSpread = [arrStr, arrNum];

console.log(useSpread); // [["A", "B", "C", "D"], ["1", "2", "3", "4"]]



// (6)-2 이것도 가능하지롱

let arrStr = ["A", "B", "C", "D"];

let useSpread = [...arrStr, "E", "F"];

console.log(useSpread); // ["A", "B", "C", "D", "E", "F"]



