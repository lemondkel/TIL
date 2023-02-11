compare
-----

### 1. Comparable 인터페이스의 `compareTo()`메소드를 원하는 조건으로 오버라이드  
### 2. 익명 인터페이스 java.util.Comparator를 구현한 class 내 `compare()`메소드를 원하는 정렬 조건으로 오버라이드하여 sort 메소드 호출시 구현한 Comparator 클래스 명시  
(Arrays 클래스뿐 아니라 다른 자료구조나 Comparable Stream 등 Collection 다루는 정렬 메소드에 대해 적용 가능)  
-> byte, int, char, double, short, long, float같은 Primitive Type의 배열에는 적용 불가!  
=> Integer같은 Wrapper "Class" 이용!!  
```
Integer[] integerArr = new Integer[] {1,3,5,2,4};
String[] stringArr = new String[] {"A","C","B","E","D"};

Arrays.sort(integerArr, Comparator.reverseOrder()); // 내림차순!
Arrays.sort(stringArr, Collections.reverseOrder()); // 내림차순!  
```
▽
```
integerArr : 5 4 3 2 1
stringArr : E D C B A
```
-> FunctionallInterface `Comparator`, java.util.`Collections` 클래스의 `reverseOrder()`메소드를 사용해 **이미 내림차순으로 구현되어 있는 Comparator 반환!!**   
-> 원하는 조건으로 정렬조건 적용하고 싶다면?!    
=> `Comparator` 인터페이스의 `compare`메소드 오버라이드한 Class를 재정의해 넘겨주면 됨!!  

&nbsp;  

```
class CustomComparator implements Comparator<String>{
    @Override
    public int compare(String o1, String o2){
        return o2.compareTo(o1);    // 내림차순
    }
}

String[] stringArr = new String[] {"A","C","B","E","D"};
Arrays.sort(stringArr, new CustumComparator());
```
▽
```
stringArr : E D C B A
```
-> `Comparator` 구현 클래스 정의 없이 `Comparartor`인스턴스 생성과 동시에 `compare()`메소드를 오버라이드 하는 것도 가능!  
```
Arrays.sort(stringArr, new Comparator<String>(){
    @Override
    public int compare(String o1, String o2){
        return o2.compareTo(o1);
    }
});
```
-------------

## • compareTo()  
➢ 두 개의 값을 비교하여 int 값으로 반환해주는 함수  

### ◦ 문자열의 비교와 숫자의 비교 두 방식이 존재!    
➢ 숫자 비교 : 단순히 크다(1), 같다(0), 작다(-1) 리턴  
➢ 문자열 비교 : 같다(0), 그 외 양수/음수 값 리턴  


### ‣ 숫자형 비교  
```
public class CompareToTest{
    public static void main(String[] args){

        Integer x = 3;
        Integer y = 4;
        Double z = 1.0;

        System.out.println( x.compareTo(y) );  // -1
        System.out.println( x.compareTo(3) );  //  0
        System.out.println( x.compareTo(2) );  //  1
        System.out.println( z.compareTo(2.7) );  //  -1

    }
}
```
-> int 타입을 가지고 비교하고자 하면 아래처럼!!  
```
int x = 4;  
int y = 5;
Integer.compare(x,y);
```

&nbsp;  

### ‣ 문자열 비교  
```public class CompareToTest{
    public static void main(String[] args){

        String str = "abcd";

        // 1) 비교대상에 문자열이 포함되어있을 경우
        System.out.println( str.compareTo("abcd") );  // 0 (같은 경우는 숫자나 문자나 0을 리턴)
        System.out.println( str.compareTo("ab") );  //  2
        System.out.println( str.compareTo("a") );  //  3
        System.out.println( str.compareTo("c") );  //  -2       
        System.out.println( "".compareTo(str) );  //  -4

        // 2) 비교대상과 전혀 다른 문자열인 경우
        System.out.println( str.compareTo("zefd") );  //  -25
        System.out.println( str.compareTo("zEFd") );  //  -25
        System.out.println( str.compareTo("ABCD") );  //  32
    }

}
```

#### 1) 비교 대상에 문자열 포함되었을 경우  
➢ `str.compareTo("ab")` 가 2인 이유!  
-> 기준값에 비교대상이 포함되어있을 경우 서로의 문자열 길이의 차이값을 리턴!!  

> "abcd" - "ab" = 2  
> "abcd" - "a" = 3  
> "abcd" - "" = 4  

**❓ 그럼 왜 `str.compareTo("c")`는 -2지???**  
-> compareTo는 같은 위치의 문자만 비교하기 때문에, 첫번째 문자부터 순서대로 비교!!  
-> 다를 경우엔 바로 아스키값 기준으로 비교처리!  
=> 따라서 "abcd"와 "c"를 비교할 경우 첫번째 위치에서 비교 실패해서 "a"와 "c"의 아스키코드 값 차이 리턴! 
(a=97, c=99)  

```
"abhg".compareTo("h"); // -7
"abcd".compareTo("abfd"); // -3
```  

&nbsp;  

#### 2) 비교 대상과 전혀 다른 문자열인 경우  
위와 같이 `str.compareTo("zefd")`의 값이 -25가 나오는 이유는 a=97, z=122 이기 때문에 차이값인 -25 리턴 

➢ `compareTo`의 경우 대소문자를 구분하기 때문에 `str.compareTo("ABCD")`는 a=97, A=65로 32 리턴!  



