Stream 
----
HashSet은 실무에서 사용 거의 안함!!  

## • Stream
➢ Java 8 이후부터는 Stream 사용해서 배열 중복 제거 가능!!!  

```
public class Test {
  public static void main(String[] args){
    String[] arr = {"H", "E", "L", "L", "O"};
    String[] arr2 = Arrays.stream(arr).distinct().toArray(String[]::new);
    // 배열 => stream => 중복제거 => 배열
    
    System.out.println(arr2.length);  // 4
    System.out.println(Arrays.toString(arr2));  // [H, E, L, O]
```
-> 배열의 Stream 객체 생성!  
-> `distinct()` 메소드로 중복 제거!  
-> 다시 `toArray()` 메소드로 Stream을 String 배열로 다시 변환!  
