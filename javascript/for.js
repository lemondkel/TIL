function printTriangle(height) {
	let plus ='';
	for(let i=1; i <= height; i++){
	  plus = plus + '*';
	  console.log(plus);
	  
	}
}

// * 증가 삼각형 테스트 코드
console.log('높이: 1');
printTriangle(1);

console.log('높이: 3');
printTriangle(3);

console.log('높이: 5');
printTriangle(5);