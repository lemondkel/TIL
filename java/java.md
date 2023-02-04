java 클래스와 객체
----

## • 클래스  
➢ 객체에 속성과 기능을 넣어줄 설계도/, 확장 가능!   
(쉽게 말해 붕어빵틀임!! 🥣)  
#### ❓ 확장 가능하다?   
**=> 처음 설정할 때와 나중에 변수, 메소드를 추가/ 삭제 가능하다!**
```
public class Body
{
  public String arm;
  public String leg;
  public String eye;
  public String ear;
  
  public void listen()
  {
    System.out.println("듣는 중");
  }
  public void see()
  {
    System.out.println("보는 중");
  }
  public void grab()
  {
    System.out.println("잡았다");
  }
  public void walk()
  {
    System.out.println("걷는다");
  }
}
```
➢ 여기서 `arm`, `leg`, `eye`, `ear`이 Body 클래스가 가진 속성!  
➢ 4개의 메소드 `listen`, `see`, `grab`, `walk`이 Body 클래스가 수행할 행동!  

### ❓ 그래서 Body 클래스는 어떻게 쓰는 건데?  
```
public class Main
{
  public static void main(String[] args)
  {
    Body
  }
}
```
-> 위처럼 Main 클래스에 Body만 똑 넣어주면 안됨!!!!  
=> 객체 사용해야 함!!!  
  
&nbsp;  
&nbsp;  


## • 객체  
➢ 의사나 행위가 미치는 대상, 문장 내에서 동사의 행위가 미치는 대상, **작용의 대상이 되는 쪽**  
=> 소프트웨어 세계에서 **구현할 대상!**   
(붕어빵!!! 🥐)   

˚ 객체에는 상태(데이터)와 동작(코드)가 있음  
˚ 프로그램에서 사용되는 데이터 또는 식별자에 의해 참조되는 공간을 의미!  
-> 변수, 자료구조, 함수, 메소드가 될 수 있는데, **객체 지향 프로그래밍에서는** 클래스를 기반으로 한 변수, 즉 **클래스의 인스턴스**라 함  
**˚ 메모리가 할당되기 전까지 객체는 존재하지 않음**    

```
public class Main
{
  public static void main(String[] args)
  {
    // Body 클래스의 객체 생성
    Body body = new Body();
    
    // 객체 통해 Body 클래스의 속성에 값 넣어줌
    body.arm = "팔";
    body.ear = "귀";
    body.eye = "눈";
    body.leg = "다리";
    System.out.println("arm =" + body.arm + ", ear = " + body.ear + ", eye = " + body.eye + ", leg = " + body.leg);

    // 객체 통해 Body 클래스의 메소드 호출해 작동하도록 지시
    body.see();
    body.grab();
    body.listen();
    body.walk();
  }
}
```
```
arm = 팔, ear = 귀, eye = 눈, leg = 다리
보는 중
잡았다
듣는 중
걷는다
```
#### 객체를 만들었으면 Body 클래스에 선언했던 변수, 메소드들을 Main 클래스에서 불러다 쓰거나 값 넣을 수 있음!!  
(Body 클래스에서 변수나 메소드 중 하나의 접근제어자를 private로 하면 Main에서 사용 불가!!)  

&nbsp;  

### ❓ 그럼 객체 지향은 뭔데??  
➢ 객체 지향 프로그래밍(Object-Oriented Programming(OOP))
-> 프로그래밍을 **여러 개의 객체 단위**로 보고 작업하는 것!!  
(객체 지향 언어에는 Java, C++, C# 등등)  

&nbsp;  

### • 객체 지향 언어들의 특징!!  
### 1. 다형성  
➢ 대표적으로 `Overloading`과 `Overriding`이 있음  

➢ **Overloading** : 같은 이름의 함수(메소드)를 매개변수의 유형과 개수를 다르게 해 다양하게 재정의 하는 것!  
(ex. 이름은 메소드 이름은 둘 다 print인데 하나는 int, 하나는 string)  
```
Class Test {
	public void print(int value) {
		System.out.println(“ 숫자 출력= " +value);
	}
	public void print(String value) {
		System.out.println(“ 문자 출력= " +value);
	}
}

Class Main{
	public void main(String[]args) {
		Test test = new Test();
		test.print(100);     // 결과 : 숫자 출력 = 100
		test.print(“test”);   // 결과 : 문자 출력 = “test”
	}
}
```
오.. 신기하당.. 

➢ **Overriding** : 상위 클래스가 가지고 있는 메소드를 하위 클래스에서 재정의하여 사용하는 것!  
(ex. A클래스의 print메소드를 A클래스를 상속받은 B클래스에서 재정의)  
```
Class A {
	public void print() {
		System.out.println(“  print Class A “);
	}
}

Class B extends A {
	public void print() {
		System.out.println(“  print Class B “);
	}
}

Class Main {
	public void main(String[]args) {
		A a=new A();
		B b=new B();
		a.print();     // 결과 : print Class A
		b.print();     // 결과 : print Class B
	}
}
```
-> A클래스의 print함수와 B클래스의 print함수 결과 다름!  

&nbsp;  

### 2. 상속성  
➢ 상위 클래스의 모든 걸 하위 클래스가 이어받음!  
```
Class A {
	public void print(){
		System.out.println(“  print Class A “);
	}
}

Class B extends A {
	
}
	
Class Main {
	public void main(String[]args){
		A a=new A();
		B b=new B();
		a.print();     // 결과 : print Class A
		b.print();     // 결과 : print Class A
	}
}
```
-> B클래스에서 print함수를 따로 재정의 해주지 않는다면 A클래스에서와 같은 결과!  

&nbsp;  

### 3. 캡슐화   
➢ 객체의 속성과 행위를 하나로 묶고, 외부로부터 내부를 감싸 숨기는 것!  
-> 외부의 잘못된 접근으로 값이 변하는 것 방지  
(public, protected, private, default 접근제어자 통해 구현 가능)  
```
public class Student {
	private String name;
	private int id;
	private int age;

	public void setName(String name) {
		this.name = name;
    }

	public void setId(int id) {
		this.name = name;
    }

	public void setAge(int age) {
		this.name = name;
    }

	public void getName() {
		return name;
    }

	public void getId() {
		return id;
    }

	public void getAge() {
		return age;
    }
}
public class Main {
	public static void main(String[] args) {
		Student student = new Student();
		student.setName("홍길동");
		student.setId(20110756);
		student.setName(20);

		System.out.println("이름 :" +student.getName());
		System.out.println("학번 :" +student.getId());
		System.out.println("나이 :" +student.getAge());
	}
}
```
-> `student.age` 등으로 호출 불가!! `getAge()` 메소드 통해 변수에 접근 가능!!   

&nbsp;  

### 4. 추상화 
➢ 객체의 공통 속성, 기능 추출해 정의하는 것!  
```
abstract class Action {
   // 달리다 
   public abstract void running();

   // 치다
   public abstract void hitting();

   // 돌다
   public abstract void turnning();
}
```
```
Class Man extends Action {  // 사람 객체
  public void running() {
    System.out.println("운동장을 달린다.");
  }

  public void hitting() {
    System.out.println("바닥을 치다.");
  }

  public void turnning() {
    System.out.println(“찻길 옆으로 돌다.＂);
  }
}
public class Animal extends Action {
  public void running() {
    System.out.println("동물을 피해 달린다.");
  }

  public void hitting() {
    System.out.println("앞에선 동물을 치다.");
  }

  public void turnning() {
    System.out.println("앞에선 동물을 피해 돌다.");
  }
}
Class Main {
  public static void main(String[] args) {
    Action manAction = new Man();         // 사람의 액션
    Action animalAction = new Animal();  // 동물의 액션

    manAction.running();                       // 결과 : 운동장을 달린다.
    manAction.hitting();                        // 결과 : 바닥을 치다.
    manAction.turning();                       // 결과 : 찻길 옆으로 돌다.

    animalAction.running();                   // 결과 : 동물을 피해 달린다.
    animalAction.hitting();                    // 결과 : 앞에선 동물을 치다.
    animalAction.turnning();                   // 결과 : 앞에선 동물을 피해 돌다.
  }
}
```

&nbsp;  

### • 객체 지향 언어를 사용하면 좋은 점!!  
➢ 상속 통한 코드의 **재사용성** 높임!  
➢ 잘 설계된 클래스는 **개발 생산성** 향상에 도움!!   
➢ 캡슐화로 인해 내용 수정해도 다른 클래스에 영향 덜 미쳐서 **유지 보수** 굿!!    





