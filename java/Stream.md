Stream 
----
HashSet은 실무에서 사용 거의 안함!!  

## • Stream
➢ 배열 등에 **저장된 요소들을 하나씩 참조하면서 코드 실행**할 수 있는 기능!!  

-> Stream 사용하면 **불필요한 for문 사용 놉**!!   
-> 람다식 활용 가능해서 **코드 직관적**이게 처리 가능!!

&nbsp;  

## • 특징  
➢ 데이터를 담는 저장소는 아님!  
➢ 데이터 변경 놉!  
➢ 재사용 불가!  
➢ 각 요소 한 번씩 처리!  
➢ 무제한일 수도 있음!!  

&nbsp;  

## • 사용법  
➢ `데이터.Stream생성().중개연산()...종료연산();`   

&nbsp;  

### ◦ 중개 연산  
➢ 계속 연산 추가 가능  
➢ Stream 리턴  
➢ 종료 연산 오기 전에는 실행하지 않음(Lazy 하다)    
➢ Stateless / Statefull 오퍼레이션 구분 가능  
➢ **filter, map, limit, skip, sorted** 등등  

### ◦ 종료 연산  
➢ 더 이상 연산 연결 불가  
➢ Stream 리턴 X  
➢ **collect, allMatch, count, forEach, min, max 등등**  

```
test.stream().skip(3).map((n) -> {
  System.out.println(n);
  return "success";
});
```
-> test에서 중개 연산인 `skip`과 `map` 사용  
-> `skip(3)` : 맨 처음 요소 3개 무시  
-> `map` 사용해 나머지 요소들 출력  
**-> 그런데 아무것도 출력되지 않음!!**  
**=> 종료 연산이 없기 때문~**  

```
List<Integer> test = Arrays.asList(1, 2, 3, 4);

test.stream().skip(3).map((n) -> {
  System.out.println(n);
  return "success";
}).forEach(System.out::println);
```
-> 이제 결과 출력!  
```
4
success
```
-> 4만 나온 이유 : `skip`으로 처음 요소 3개 제외한 상태의 stream을 다음 연산에게 넘겨줘서!  

&nbsp;  

###  Java 8 이후부터는 Stream 사용해서 배열 중복 제거 가능!!!  

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
