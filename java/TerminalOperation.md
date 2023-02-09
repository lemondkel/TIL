Stream 종료 연산  
-----

## • Stream 종료 연산 (Terminal Operation)  
‣ 출력 : forEach()  
‣ 소모 : reduce()   
‣ 검색 : findFirst(), findAny()  
‣ 검사 : anyMatch(), allMatch(), noneMatch()  
‣ 통계 : count(), min(), max()  
‣ 연산 : sum(), average()  
‣ 수집 : collect()  

&nbsp;

## • 출력  

### ◦◦ forEach()  
➢ 각 stream의 요소를 소모해 명시된 동작 수행  
-> 반환 타입이 void이므로 보통 stream의 모든 요소를 출력하는데 많이 사용  
```
Stream<String> stream = Stream.of("첫째", "둘째", "셋째", "넷째");
stream.forEach(System.out::println);
```

```
첫째
둘째
셋째
넷째
```
--------
## • 소모 

### ◦◦ reduce()  
➢ 모든 stream의 각 요소를 소모해 연산 수행  
(첫 번째와 두 번째 연산 -> 그 결과로 또 세 번째와 연산 . . .)  
```
Stream<String> stream1 = Stream.of("하나", "둘", "셋", "넷");
Stream<String> stream2 = Stream.of("하나", "둘", "셋", "넷");

Optional<String> result1 = stream1.reduce((s1, s2) -> s1 + "++" + s2);
result.ifPresent(System.out::println);

String result2 = stream2.reduce("시작", (s1, s2) -> s1 + "++" + s2);
System.out.println(result2);
```

```
하나++둘++셋++넷
시작++하나++둘++셋++넷
```
-> 위처럼 인수로 초기값 전달하는 `reduce()`메소드의 반환 타입은 `Optional<T>`가 아닌 `T` 타입임!  
=> 비어있는 stream과 `reduce()` 연산을 할 경우 전달받은 초기값을 그대로 반환해야 해서!  

---
## • 검색  

### ◦◦ findFirst(), fintAny()  
➢ 첫 번째 요소를 참조하는 Optional 객체 리턴  
-> 두 메소드 모두 비어있는 stream에서는 비어있는 Optional 객체 리턴  
```
IntStream stream1 = IntStream.of(4,2,7,3,5,1,6);
IntStream stream2 = IntStream.of(4,2,7,3,5,1,6);

OptionalInt result1 = stream1.sorted().findFirst();
System.out.println(result1.getAsInt());

OptionalInt result2 = stream2.sorted().findAny();
System.out.println(result2.getAsInt());
```

```
1
1
```
-> 결과는 같게 출력되지만 병렬 stream인 경우에는 `findAny()` 메소드를 사용해야만 정확한 연산 결과 반환!!  

------
## • 검사  

### ◦◦ anyMatch()  
➢ 일부 요소가 특정 조건을 만족할 경우 true 반환  

### ◦◦ allMatch()  
➢ 모든 요소가 특정 조건을 만족할 경우에 true 반환  

### ◦◦ noneMatch()  
➢ 모든 요소가 특정 조건을 만족하지 않을 경우 true 반환  

```
IntStream stream1 = IntStream.of(30, 90, 70, 10);
IntStream stream2 = IntStream.of(30, 90, 70, 10);

System.out.println(stream1.anyMatch(n -> n > 80));
System.out.println(stream2.allMatch(n -> n > 80));
```

```
true
false
```

------
## • 통계    

### ◦◦ count()  
➢ 요소의 총 개수를 long 타입의 값으로 반환  

### ◦◦ min(), max()      
➢ 요소 중 가장 큰 값과 가장 작은 값 가지는 요소 참조  

```
IntStream stream1 = IntStream.of(30,90,70,10);
IntStream stream2 = IntStream.of(30,90,70,10);

System.out.println(stream1.count());
System.out.println(stream2.max().getAsInt());
```

```
4
90
```

-----
## • 연산  

### ◦◦ sum(), average()  
➢ 모든 요소에 대해 합과 평균  

```
IntStream stream1 = IntStream.of(30, 90, 70, 10);
DoubleStream stream2 = DoubleStream.of(30.3, 90.9, 70.7, 10.1);
 
System.out.println(stream1.sum());
System.out.println(stream2.average().getAsDouble());
```

```
200
50.5
```

------
## • 수집    

### ◦◦ collect()    
➢ 인수로 전달되는 Collectors 객체에 구현된 방법대로 stream의 요소 수집  
(Collectors 클래스에는 미리 정의된 다양한 방법이 클래스 메소드로 정의되어 있음)  

#### ‣ Collectors 메소드  
> 1. stream을 배열이나 컬렉션으로 변환 : toArray(), toCollection(), toList(), toSet(), toMap()
> 2. 요소의 통계와 연산 메소드와 같은 동작을 수행 : counting(), maxBy(), minBy(), summingInt(), averageingInt() 등
> 3. 요소의 소모와 같은 동작을 수행 : reducing(), joining()
> 4. 요소의 그룹화와 분할 : groupingBy(), partitioningBy()  

```
Stream<String> stream = Stream.of("하나", "둘", "셋", "넷");

List<String> list = stream.collect(Collectors.toList());
Iterator<String> iter = list.iterator();
while(iter.hasNext()) {
    System.out.print(iter.next() + " ");
}
```

```
하나 둘 셋 넷
```
-> `collect()` 메소드를 이용해 해당 stream을 리스트로 변환  

```
Stream<String> stream = Stream.of("HTML", "CSS", "JAVA", "PHP");
 
Map<Boolean, List<String>> patition = stream.collect(Collectors.partitioningBy(s -> (s.length() % 2) == 0));
 
List<String> oddLengthList = patition.get(false);
System.out.println(oddLengthList);
 
List<String> evenLengthList = patition.get(true);
System.out.println(evenLengthList);
```

```
[CSS, PHP]
[HTML, JAVA]
```
-> Collectors 클래스의 partitioningBy()메소드 이용해 각 요소별 글자 수에 따라 홀/짝 나누어 저장  



