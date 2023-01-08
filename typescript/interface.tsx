// (1) static

type Words = {
    [key: string]: string
}

let dict: Words = {
    "potato": "food"
}
class Dict {
    private words: Words
    constructor() {
        this.words = {}
    }
    add(word: Word) {
        if (this.words[word.term] === undefined) {
            this.words[word.term] = word.def;
        }
    }
    def(term: string) {
        return this.words[term]
    }
    static hello() { // 이 static은 typescript가 아닌 javascript의 것
        return “hello”
    }
}
class Word {
    constructor(
        public readonly term: string, // readonly 사용하면 수정 불가
        public readonly def: string,
    ) { }
}
const puppy = new Word("puppy", "강아지");
const dict = new Dict()

dict.add(puppy)
dict.def("puppy")





// (2) type을 지정된 옵션으로만 제한

type Team = “red” | “yellow” | “blue”
type Health = 1 | 5 | 10

type Player = {
    nickname: string,
    team: Team
    health: Health
}

const enz: Player = {
    nickname:”enz”,
    team: “pink”	// 에러. red, yellow, blue만 가능
}




// (3) interface
// 오브젝트의 모양을 typescript에게 설명해 주기 위해서 사용 : interface 특징 1

type Team = “red” | “yellow” | “blue”
type Health = 1 | 5 | 10
interface Hello = string	// interface로는 이런거 불가

interface Player = {
    nickname: string,
    team: Team
    health: Health
}

const enz: Player = {
    nickname:”enz”,
}

// interface와 type 둘 다 typescript에게 오브젝트의 모양 알려줄 수 있다.
// type은 타입 alias를 만들고, 특정 값들로만 제한할 수 있다.
// type이 활용도가 더 높지만 interface는 class 다루는 것과 비슷해서 더 쉽게 느껴질 수도





// (4) interface는 property들을 축적시키기 가능 : interface 특징 2

interface User {
    name: string
}
interface User {
    lastName: string
}
interface User {
    health: number
}
const enz: User{
    name:”enz”,
    lastName:”e”,
    health:10
}





// (5) abstract class & interface

    abstract class User{
        constructor(
            protected firstName: string,
            protected firstName: string,
        ){ }
        abstract sayHi(name: string): string
        abstract fullName(): string
    }
class Player extends User {
    fullName() {
        return `${this.firstName} ${this.lastName}`
    }
    sayHi(name: string) {
        return `Hello ${name}. My name is ${this.fullName()}`
    }
}
    
    
// —> 추상클래스를 interface로


interface User {
    firstName: string,
    firstName: string,
    sayHi(name: string): string
    fullName(): string
}
class Player implements User {		// implements를 쓰면 코드가 더 가벼워짐
    construtor(
        private firstName: string,	// *
        private lastName: string,	// *
    ) { }
    fullName() {
        return `${this.firstName} ${this.lastName}`
    }
    sayHi(name: string) {
        return `Hello ${name}. My name is ${this.fullName()}`
    }
}

// interface를 상속할 때에는 property를 private, protected로 만들지 못한다.
// * 줄에서 Player가 firstName을 상속했지만 private여서 에러 뜸 (public이어야 함)

// interface는
    // -> 고유한 사용처가 있다.
    // -> 컴파일하면 JS로 바뀌지 않고 사라진다.
    // -> typescript에만 존재하고 javascript에는 존재하지 않는다.
    // -> interface의 상속에서는 private property 사용이 불가하다.
    // -> class가 아니라 class의 모양, 오브젝트의 모양을 특정할 수 있게 해주는 방법





// (6) 한 class에서 여러 개 interface 동시에 상속 가능

interface User {
    firstName: string,
    firstName: string,
    sayHi(name: string): string
    fullName(): string
}
interface Human {
    health: number
}
class Player implements User, Human {
    construtor(
        public firstName: string,
        public lastName: string,
        public health: number
    ) { }
    fullName() {
        return `${this.firstName} ${this.lastName}`
    }
    sayHi(name: string) {
        return `Hello ${name}. My name is ${this.fullName()}`
    }
}

// -> interface 만들어 모두 같은 interface를 사용하며 팀원이 각자 원하는 방식으로 클래스를 상속하면 모두 같은 property와 method 가지게 된다 굿




// (7) interface를 type로도 사용

function makeUser(user: User) {
    return {
        firstName:”enz”,
        lastName:”las”,
        fullName: () => “xx”,
        sayHi: (name) => “string”
    }
}
makeUser({
    firstName:”enz”,
    lastName:”las”,
    fullName: () => “xx”,
    sayHi: (name) => “string”
})
// argument에 interface를 씀으로써 오브젝트의 모양 지정 가능
// interface이기 때문에 new User을 쓸 필요 없다




// (8) interface와 type의 상속 차이

type PlayerA = {    // type
    name:string
}
type PlayerAA = PlayerA & {
    lastName:string
}
const playerA: PlayerAA ={
    name:"enz",
    lastName:"e",
}
///
interface PlayerB { // interface
    name:string
}
interface PlayerBB extends PlayerB {
    lastName:string
}
const playerB: PlayerBB = {
    name:"enz",
    lastName:"e"
}



// (9) property 추가 차이

type PlayerA = {    // type
    name:string
}
type PlayerAA = PlayerA & {
    lastName:string
}
type PlayerAA = {   // 이미 PlayerAA는 정의돼서 중복이라 불가
    health:number   
}
const playerA: PlayerAA ={
    name:"enz",
    lastName:"e",
}
///
interface PlayerB { // interface ((4)번 내용처럼 쓰기도 가능)
    name:string
}
interface PlayerBB extends PlayerB {
    lastName:string
}
interface PlayerBB {    // interface에서는 아무 문제 없이 작동
    health:number
}
const playerB: PlayerBB = {
    name:"enz",
    lastName:"e"
}




// (10) type과 interface 둘 다 상속 가능

type PlayerA={
    firstName:string
}
interface PlayerB {
    firstName:string
}
class User implements PlayerA { // PlayerB도 가능
    constructor(
        public firstName:string
    ){}
}
