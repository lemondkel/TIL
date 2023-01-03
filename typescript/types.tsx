// (1) typescript한테 타입 알려주기 -->
let x: boolean = false
let a : number[] = [1, 2];
let b : string[] = [“a”, “b”];
let c : boolean[] = [true]; 
// 꼭 이렇게 타입 알려주지 않아도 typescript가 추론해준다. (추론하게 해주는게 좋음)



// (2) name은 필수고 age는 선택일 상황에 타입 지정하기 -->
const player : {
	name : string,
	age? : number	
} = {
	name : “enz”
}
// 선택은 뒤에 물음표 붙여주면 됨 -> 이러면 age 타입은 number 또는 undefined가 됨 



// (3) 함수에 타입 지정하는 두 가지 방법 -->
function First(name:string) : Player {
	return {
		name
	}
} 

const Second = (name:string) : Player => ({name})



// (4) readonly (읽기 전용) -->
type Player = {
	readonly name:string
} 
// Player의 name을 수정하려고 시도하면 typescript는 우리를 멈춤 



// (5) Tuple : 최소한의 길이를 가지고, 특정 위치에 특정 타입이 있는 array 생성 -->
const first : [string, number, boolean] = [“enz”, 23, true]

const second : readonly [string, number, boolean] = [“enz”, 23, true]
second[0] = "hi"
// second가 읽기 전용으로 되어있으므로 변경 불가 



// (6) any : 타입을 따로 안 써줬을 때의 기본값 -->
let a = [];
//  이렇게 쓰면 typescript는 a를 any의 array라고 생각함
      any는 typescript로부터 빠져나오고 싶을 때 사용 (보호 장치로부터 벗어나는



// (7) unknown : 변수의 타입을 미리 알지 못할 때 사용 



// (8) void : 아무것도 return 하지 않는 함수 (따로 지정할 필요 X) -->
function hello(){
	console.log(‘x’)
}
const a = hello();
a.toUpperCase();
//  void 타입에는 toUpperCase가 없어서 윗줄은 허용되지 않음



// (9) never : 함수가 절대 return 하지 않을 때 발생 (ex 함수에서 exception 발생할 때, 타입이 두 가지 이상일 수도 있을 때) -->
function hello(name:string|number) : never{
  name + 1
}
// 위의 name + 1은 작동하지 않음 (name이 string일 수도 있으니까) 

function hello(name:string|number) : never{
	if(typeof name === “string”){
		name		// 여기서 name은 string
	} else if (typeof name ===“number”){
		name		// 여기서 name은 number
	} else {
		name		// 여기서 name은 never. 하지만 맨 위에서 name:string|number라고 지정해줬으니까 마지막 else문은 절대 실행되지 않아야 함
	}
}

