// (1) call signatures : 함수 위에 마우스를 올렸을 때 보게되는 것
(함수를 어떻게 호출해야 하는지, 함수의 반환 타입 알려줌)

type Add = (a:number, b:number) => number

const add:Add = (a, b) => a+b



// (2) overloading : 함수가 여러 개의 call signatures를 가지고 있을 때 발생시킨다.
(서로 다른 여러 개)

type Config = {
	path: string,
	state: object,
}
type Push = {
	(path: string): void
	(config: Config): void
}
const push : Push = (config) => {
	if(typeof config === “string”) { console.log(config)}
	else {
		console.log(config.path, config.state)
	}
}



// (3) 다른 개수의 파라미터를 가질 경우

type Add = {
	(a: number, b:number) :number
	(a: number, b:number, c:number): number,
}
const add:Add = (a, b, c) => {
	return a + b
}
// -> c의 타입도 number일 것이다 라고 지정

const add:Add = (a, b, c?:number) => {
	return a + b
}


// (4) generic : 타입의 placeholder같은 역할로, concrete type(우리가 전부터 봐왔던 타입들) 대신 사용 가능하다.
// -> call signature을 작성할 때, 확실한 타입을 모를 경우 generic 사용

type SuperPrint = {
	(arr: number[]):void
	(arr: boolean[]):void
	(arr: string[]):void
}

// -> generic을 사용한 SuperPrint

type SuperPrint = {
	<T>(arr: T[]):void 
}

const superPrint : SuperPrint = (arr) => {
	arr.forEach(i => console.log(i))
}
    
superPrint([1, 2, 3, 4])	// number
superPrint([true, false, true])	// boolean
superPrint([“a”, “b”, “c”])	// string
superPrint([1, 2, true])	// number | boolean
// 타입스크립트가 발견한 타입으로 call signature 바꿔줌
    

// (5) generic
    
type Test = <T, M>(a: T[], b:M) => T
// T는 함수의 첫번째 파라미터로 배열이 올 거고 M은 두 번째 파라미터로 들어올 것이라는 의미
    
Test(1, 2) // 에러
Test(“a”, 3)	// 에러
Test([1, 2, 3], “x”)	// 정상
Test([“a”, “b”], true)	// 정상

// => 즉 우리의 요청에 따라 call signature을 생성
