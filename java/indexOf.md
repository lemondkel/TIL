indexOf()와 lastIndexOf() 
----

## • indexOf()  
➢ 특정 문자나 문자열이 **앞에서부터** 처음 발견되는 인덱스를 반환  
-> 찾지 못하면 `-1` 반환!  

```
public class IndexOfTest{
    public static void main(String[] args){

        String test1 = "Hello world";
        String test2 = "         Hello world         ";     

        System.out.println( test1.indexOf("o") );  // 4
        System.out.println( test1.indexOf("x") );  // -1
        System.out.println( test1.indexOf("o",5) );  // 7
        System.out.println( test2.indexOf("o") );  // 13
        System.out.println( test2.indexOf("el") );  // 10

    }
}
```
### ➢ indexOf("찾을 특정 문자", "시작할 위치")  
-> 시작할 위치는 생략 가능!!! 생략하면 당연히 0번째부터 찾지롱  

&nbsp;  

## • lastIndexOf()  
➢ 특정 문자나 문자열이 **뒤에서부터** 처음 발견되는 인덱스를 반환  
-> 얘도 찾지 못하면 `-1` 반환!  
```
public class IndexOfTest{
    public static void main(String[] args){

        String test3 = "Hello world";

        System.out.println( test3.lastIndexOf("o") );  // 7
        System.out.println( test3.lastIndexOf("x") );  // -1
        System.out.println( test3.lastIndexOf("o",5) );  // 4

    }
}
```
### ➢ 뒤에서 찾기 시작하지만 왼쪽에서부터 몇 번째 위치하는지 왼쪽부터 인덱스로 반환!!!!  


