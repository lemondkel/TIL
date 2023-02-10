compareTo()
-----

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



