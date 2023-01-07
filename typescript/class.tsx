// (1) 클래스

class Player{
    constructor(firstName, lastName, nickName){
        this.firstName = firstName;
        this.lastName = lastName;
        this.nickName = nickName;
    }
}
const enz = new Player("enz", "las", "읁");

// Typescript 코드로 바꾸면

class Player{
    constructor(
        private firstName:string,
        private lastName:string,
        public nickName:string,
    ){}
}
const enz = new Player("enz", "las", "읁");
enz.firstName   // 이 코드는 작동 X. private
enz.nickName    // 이 코드는 작동 O. public




// (2) 추상 클래스 : 다른 클래스가 상속받을 수 있는 클래스 (상속만 가능)

abstract class User {
    constructor(
        private firstName:string,
        private lastName:string,
        public nickName:string,
    ){}
    getFullName(){
        return `${this.firstName} ${this.lastName}`
    }
}
class Player extends User{

}
const enz = new Player("enz", "las", "읁");
const enz = new User("enz", "las", "읁"); // 작동 X. 추상 클래스로 직접 새로운 인스턴스 만들기 불가

enz.getFullName()   // Player는 User로부터 상속받았으므로 new Player로 생성한 인스턴스에 getFullName 사용 가능 (private 붙이면 작동X)





// (3) 추상 메소드 : 추상 클래스를 상속받는 모든 것들이 구현해야 하는 메소드
// 추상 클래스 안에서는 추상 메소드 생성 가능 (메소드는 구현 X, 메소드의 call signature만 적어야 함)
// (= 추상 메소드는 구현이 되어있지 않은(코드가 없는) 메소드이다.)

abstract class User {
	constructor(
		private firstName:string,
		private lastName:string,
		private nickName:string,
	)	{}
	abstract getNickName():void // 추상 메소드
	getFullName(){
		return `${this.firstName} ${this.lastName}`
	}
}
class Player extends User{
	getNickName(){
		console.log(this.nickName); // nickName은 private이므로 불가
        // property를 private로 만들면, 그 클래스를 상속 받더라도 그 property에 접근 불가
	}	
}
// -> 추상 메소드가 있는 경우, 추상 클래스를 상속받는 클래스에서 추상 메소드를 구현해야 한다.




// (4) protected

// private : 인스턴스 밖에서 접근 불가, 다른 자식 클래스에서도 접근 불가
// protected : 인스턴스 밖에서 접근 불가, 다른 자식 클래스에서 접근 가능

abstract class User {
	constructor(
		private firstName:string,
		private lastName:string,
		protected nickname:string,
	)	{}
	abstract getNickName():void
    protected getFullName(){
		return `${this.firstName} ${this.lastName}`
	}
}
class Player extends User{
    gitNickName(){
        console.log(this.nickName)  //  자식클래스 내부라 작동 O.
    }
}
const enz = new Player(“enz”, “las”, “읁”);

enz.getFullName()   // 작동X. protected
enz.nickname() // 작동X. protected





// (5) class 사용 예시 : 사전 만들기

type Words = {
    [key:string] : string
    // Words 타입이 string만을 property로 가지는 오브젝트라는 것
    // property에 대해 미리 알지 못하지만 타입만 알고있을 때 사용
}
let dict :Words = {
    "potato": "food"
}
class Dict {
    private words: Words
    constructor(){
        this.words = {}
         // words를 initializer 없이 선언해주고 constructor에서 수동으로 초기화 시켜줌
    }
    add(word: Word){ // 클래스를 타입처럼 사용 가능
        if(this.words[word.term] === undefined) {// 아직 단어가 사전에 존재않을 때
            this.words[word.term] = word.def;
        }
    }
    def(term:string){
        return this.words[term]
    }
}   

class Word {
    constructor(
        public term:string,
        public def:string,
    ) {}
}

const puppy = new Word("puppy", "강아지");
const dict = new Dict()

dict.add(puppy)
dict.def("puppy")   // 강아지 출력
