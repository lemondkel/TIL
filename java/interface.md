인터페이스와 추상클래스
----

## • 추상클래스란?  
추상 메소드를 선언하여 상속을 통해 자손 클래스에서 완성하도록 유도하는 클래스  
(추상클래스 : 야 내가 추상 메소드 선언만 해둘 테니까 니네가 나 상속받아서 완성해라)  
-> **미완성 설계도**  
=> 상속 위한 클래스이므로 따로 **객체 생성 불가!!**  
#### ➢ 상속 관계 쭉 타고 올라갔을 때 같은 조상클래스를 상속하고 기능까지 완벽히 똑같은 기능 필요할 경우 사용!   

```
abstract class 클래스이름{
  ...
  public abstract void 메소드이름();
}
```

## • 인터페이스란?  
추상클래스처럼 다른 클래스 작성하는데 도움 주는 목적  
(클래스랑 다르게 다중상속(구현) 가능함)  
-> **기본 설계도**  
#### ➢ 상속 관계 쭉 타고 올라갔을 때 다른 조상클래스를 상속하고 같은 기증이 필요할 경우 사용!  

```
interface 인터페이스이름 {
  public static final 상수이름 = 값;
  public abstract void 메소드이름();
}
```

추상클래스, 인터페이스 둘 다 **추상메소드 사용** 가능!!  
### ❓ 둘 다 추상메소드도 사용하고 추상클래스가 인터페이스의 역할 다 가능한데 왜 굳이 인터페이스가 있지?
=> 가장 큰 차이는 **사용 용도**!  

### 1. 사용 의도의 차이  
추상클래스 : ~이다 (ex. 물고기는 생명체이다.)  
인터페이스 : ~을 할 수 있는  (ex. 물고기는 헤엄칠 수 있다.)  

#### ❓ 왜 이렇게 구분하는데?  
다중상속의 여부에 따라 용도 정함!!  
-> 자바 특성상 한 개의 클래스만 상속 가능  
=> 해당 클래스의 구분은 추상클래스 상속 통해 해결, 할 수 있는 기능들은 인터페이스로 구현  

### 2. 공통된 기능 사용 여부 차이  
만약 모든 클래스가 인터페이스 사용해 기본 틀을 구성한다면?!  
-> 공통으로 필요한 기능들도 모든 클래스에서 오버라이딩해 재정의 해야함!! (너무 번거로워ㅜㅜ)  
=> 이렇게 공통된 기능이 필요하다면 그냥 추상클래스에서 일반메소드 작성해 자식클래스에서 사용할 수 있도록 하면 됨! 

#### ❓ 그럼 그냥 추상클래스만 사용하면 되는 거 아닌가??  
-> 자바는 하나의 클래스만 상속이 가능!!!!  
여러 클래스가 각각 다른 추상클래스를 상속하고 있는데 공통된 기능이 필요하다면?  
=> 이럴 땐 기능을 인터페이스로 작성해서 구현하는게 굿!!  


---------
### ~ 여기부턴 예제 ~

(Creature라는 추상클래스와, 이 추상클래스를 상속받는 두 추상클래스 Human과 Animal,  
Human을 상속받는 일반클래스 kevin과 Animal을 상속받는 두 일반클래스 Turtle, Pigeon이 있고,  
4개의 인터페이스 Taklable, Programmer, Swimable, Flyable가 있는 구조의 예제)  

#### ‣ Creature 추상 클래스  
```
public abstract class Creature {
    private int x;
    private int y;
    private int age;
    
    public Creature(int x, int y, int age) {
        this.age = age;
        this.x = x;
        this.y = y;
    }
    
    public void age() {
        age++;
    }
    
    public void move(int xDistance) {
        x += xDistance;
    }
    
    public int getX() {
        return x;
    }
    public void setX(int x) {
        this.x = x;
    }
    public int getY() {
        return y;
    }
    public void setY(int y) {
        this.y = y;
    }
    
    public abstract void attack(); 
    public abstract void printInfo();
     // 이 두 추상메소드는 모든 생명체에 필요하지만 각각 생명체에 따라 다른 기능으로 구현해야 해서 추상메소드로 선언하여 하위클래스에서 처리하도록 함
    
    @Override
    public String toString() {  // 이건 그냥 나중에 출력 편하게 하려고 !!
        return "x : " + x + ", y : " + y + ", age : " + age;
    }
}
```

#### ‣ Animal 추상클래스 
```
public abstract class Animal extends Creature{
    
    public Animal(int x, int y, int age) {
        super(x, y, age);
    }
    
    @Override
    public void attack() {
        System.out.println("몸을 사용하여 공격!!");
    }
}
```
##### ❓ Creature 추상클래스를 상속했는데 Animal 추상클래스에 attack메소드만 있고 printInfo메소드는 왜 없지??  
=> 하나 더 내림!!  
=> 쉽게 말해 Animal을 상속할 클래스 (Turtle, Pigeon)에게 위임한 것    
-> Animal 클래스도 추상클래스이기 때문에 가능!!!  (추상클래스는 상속을 위한 클래스)

#### ‣ Human 추상클래스  
```
public abstract class Human extends Creature implements Talkable{
    // Creature 추상클래스 상속하고 Talkable 인터페이스 구현
    public Human(int x, int y, int age) {
        super(x, y, age);
    }
    
    @Override
    public void attack() {
        System.out.println("도구를 사용!!");
    }
    
    @Override
    public void talk() {
        System.out.println("사람은 말을 할 수 있다.");
    }
}
 
```
##### 여기도 위와 마찬가지로 printInfo 추상메소드는 아래로 위임!  
(talk메소드는 Talkable 인터페이스의 추상메소드)  

#### ‣ Talkable 인터페이스  
```
public interface Talkable {
    abstract void talk();
}
```
##### 보통 인터페이스 이름은 ~able인 이름 많이 쓰는 듯!! (~를 할 수 있는의 의미를 가지고 이써서)  

#### ‣ Flyable 인터페이스  
```
public interface Flyable {
    void fly(int yDistance);
    void flyMove(int xDistance, int yDistance);
}
```

#### ‣ Pigeon 일반클래스  
```
public class Pigeon extends Animal implements Flyable{
    public Pigeon(int x, int y, int age) {
        super(x, y, age);
    }
    
    @Override
    public void fly(int yDistance) {
        setY(getY() + yDistance);
    }
    
    @Override
    public void flyMove(int xDistance, int yDistance) {
        setY(getY() + yDistance);
        setX(getX() + xDistance);
    }
    
    @Override
    public void printInfo() {
    // Animal 추상클래스에서 내린 추상메소드 printInfo가 여기로 온거!
        System.out.println("Pigeon -> " + toString());
    }
}
```
#### ‣ Swimable 인터페이스  
```
public interface Swimable {
    void swimDown(int yDistance);
}
```
##### Turtle(동물)과 Kevin(사람)이라는 클래스를 작성할건데, 둘 다 수영 가능!  
##### ❓ 그럼 Creature 추상클래스에 swimDown 추상메소드를 만들어서 가져다 써야 하나? 
##### ❓ 아니면 Animal,Human 추상클래스에 각각 swinDown 추상메소드 만들어야 하나? 
##### -> 근데 모든 동물과 사람이 수영을 할 줄 아는게 아님!! (= 할 줄 아는 클래스에만 구현시켜야 함!!)  
##### => 이럴 때 인터페이스로 선언해주고 수영 할 줄 아는 클래스에 각각 구현시키면 가독성, 유지보수 짱~

#### ‣ Turtle 일반클래스
```
public class Turtle extends Animal implements Swimable{
    public Turtle(int x, int y, int age) {
        super(x, y, age);
    }
    
    @Override
    public void swimDown(int yDistance) {
        setY(getY() - yDistance);
        // 아래로 수영할 수 있는 기능 재정의!
    }
    
    @Override
    public void printInfo() {
        System.out.println("Turtle -> " + toString());
    }
}
``` 

#### ‣ Kevin 일반클래스
```
public class Kevin extends Human implements Programmer, Swimable{
                                          // 여기서 볼 수 있는 인터페이스의 장점 다중구현!!!
    public Kevin(int x, int y, int age) {
        super(x, y, age);
    }
    
    @Override
    public void coding() {
        System.out.println("Hello World!");
    }
    
    @Override
    public void swimDown(int yDistance) {
        setY(getY() - yDistance);
        if(getY() < -10) {
            System.out.println("너무 깊이 들어가면 죽을수도 있어!!");
            // 사람이라 y값이 -10이하면 죽을 수도 있다고 알려주는 기능으로 재정의!
        }
    }
    
    @Override
    public void printInfo() {
        System.out.println("Kevin -> " + toString());
    }
}

```

#### ‣ Programmer 인터페이스  
```
public interface Programmer {
    void coding();
}
```

#### ‣ Main 실행클래스  
```
public class Main {
    public static void main(String[] args) {
        Pigeon p = new Pigeon(5,10,14);
        p.printInfo();
        p.age();
        p.move(100);
        p.printInfo();
        p.fly(5);
        p.printInfo();
        p.flyMove(10, 20);
        p.printInfo();
        p.attack();
        System.out.println();
        
        Kevin kev = new Kevin(0, 0, 35);
        kev.printInfo();
        kev.age();
        kev.move(10);
        kev.printInfo();
        kev.attack();
        kev.coding();
        kev.swimDown(20);
        kev.printInfo();
        kev.talk();
        System.out.println();
        
        Turtle tur = new Turtle(100, -10, 95);
        tur.printInfo();
        tur.age();
        tur.move(-100);
        tur.printInfo();
        tur.attack();
        tur.swimDown(1000);
        tur.printInfo();
    }
}
 ```
#### ‣ 결과!  
```
Pigeon -> x : 5, y : 10, age : 14
Pigeon -> x : 105, y : 10, age : 15
Pigeon -> x : 105, y : 15, age : 15
Pigeon -> x : 115, y : 35, age : 15
몸을 사용하여 공격!!

Kevin -> x : 0, y : 0, age : 35
Kevin -> x : 10, y : 0, age : 36
도구를 사용!!
Hello World!
너무 깊이 들어가면 죽을수도 있어!!
Kevin -> x : 10, y : -20, age : 36
사람은 말을 할 수 있다.

Turtle -> x : 100, y : -10, age : 95 
Turtle -> x : 0, y : -10, age : 96 
몸을 사용하여 공격!!
Turtle -> x : 0, y : -1010, age : 96
```












