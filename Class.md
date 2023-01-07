☻ Javascript에서 class를 사용하는 이유?
------


### ✓ class 사용 이유
‣ 1. class는 코드를 직관적이고 쉽게 읽을 수 있도록 만들어준다.
(복잡한 코드일수록 class의 장점을 더 잘 알 수 있다)  

‣ 2. 작성하기도 쉽고 class 기반 언어에 익숙한 개발자들은 더 빠르게 적응할 수 있다.

## ☻ class란?
➣ class란 객체를 생성하기 위한 템플릿이다.  
class문법은 class **표현식과** class **선언** 두 가지 방법을 제공한다.



### • class 선언
class를 선언하기 위해선 class의 이름과 class 키워드를 사용해야 한다.

```
class Student{
	constructor(name, age){
		this.name = name;
		this.age = age;
	}
}
```

#### Hoisting (호이스팅)
function은 정의하기 전에 호출하여도 실행이 되지만, class는 반드시 정의한 뒤에 사용할 수 있다.

```
const smart = new Student();

class Student{
}
```

### • class 표현식
class 표현식은 이름을 가질 수도 있고, 갖지 않을 수도 있다. 
```
let Student = class {
	constructor(name, age){
		this.name = name;
		this.age = age;
	}
}
console.log(Student.name);	// “Student”

let Student = class Student2{
	constructor(name, age){
		this.name = name;
		this.age = age;
	}
}
console.log(Student.name);	// “Student2”
```

## ☻ class body와 method

```
class Student{
	constructor(name, age){
		this.name = name;
		this.age = age;
	}
	addAge(age){
		return this.age + age;
	}
}
```
>
• **method**는 클래스 내에서 정의된 **함수**이다.  
• **instance**는 클래스를 통해 생성된 **객체**이다.  
• 클래스 이름은 **대문자**로 시작한다.  
• constructor은 class에서 필요한 **기초 정보를 세팅하는 곳**으로, new로 객체를 생성할 때 가장 먼저 자동으로 호출된다.    
• **constructor**이라는 이름을 가진 특수 메소드는 **class 안에 한 개만 존재**할 수 있고, 여러 개의 constructor 메소드가 존재하면 SyntaxError가 발생한다.  
• constructor은 super 키워드를 사용해 부모 클래스의 constructor을 호출할 수 있다.  
• **this는 본인 객체**로, class 내에서 메소드끼리 소통하기 위해선 this가 필요하다.  
• 정적 메소드나 프로토타입 메소드가 this값 없이 호출된다면, this 값은 메소드 안에서 undefined가 된다.  
>

## ☻ class 상속
다른 class를 상속받기 위해서는 extends를 사용한다.
```
class Student{
	constructor(
		this.name = name;
	}
	study(){
		console.log(${this.name} have to study.`);
	}
}

class Smart extends Student{
	constructor(name){
		super(name);
	}
	study(){
		console.log(`{this.name} studys well.`);
	}
}

let stu1 = new Smart(’Sally’);
stu1.study();	// Sally studys well.
```
상속받는 클래스에 constructor가 있다면, this 사용 전에 먼저 super()을 호출해야 한다.



 

