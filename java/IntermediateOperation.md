Stream 중개 연산
------

## • Stream 중개 연산 (Intermediate Operation)  
➢ **Filtering** - filter(), distinct()  
➢ **Mapping** - map(), flatMap()  
➢ **Restricting** - limit(), skip()  
➢ **Sorting** - sorted()  
➢ **Iterating** - peek()  

&nbsp;  

## • Filtering  
➢ stream 내 요소들을 하나씩 평가해 걸러내는 작업  

### ◦ distinct()  
➢ **중복된 요소가 제거**된 새로운 stream을 반환  
-> 내부적으로 Object 클래스의 `equals()` 메소드를 사용해 요소의 중복을 비교  

### ◦ filter()  
➢ 주어진 **조건(predicate)에 맞는 요소만**으로 구성된 새로운 stream 반환  

```
List<Integer> list = Arrays.asList(7, 5, 5, 2, 1, 2, 3, 5, 4, 6);
List<String> list2 = Arrays.asList("a1", "a2", "b1", "c2", "c4", "c1");

Stream<Integer> stream1 = list.stream().distinct(); // [7, 5, 2, 1, 2, 3, 4, 6]
Stream<Integer> stream2 = list.stream().filter(e -> e % 2 == 0) // [2, 2, 4, 6]
Stream<String> stream3 = list2.stream().filter(s -> s.startsWith("c")).forEach(System.out::println) // c2 c1 c3
```

&nbsp;  

## • Mapping  
➢ stream에 들어가 있는 값이 input이 되어 특정 로직 거친 후 output이 되어 새로운 stream에 담는 작업  

### ◦ map()  
➢ stream 내 요소들을 **하나씩 특정 값으로 변환**  
(이 때 값을 변환하기 위한 람다식을 인자로 받음)  
```
List<String> list = Arrays.asList("Java", "JavaScript", "React");

Stream<Integer> stream1 = list.stream().map(String::length);  // [4, 10, 5];
Stream<String> stream2 = list.stream().map(String::upperCase);  // [JAVA, JAVASCRIPT, REACT]
```

### ◦ flatMap()  
➢ 반환하려는 해당 stream의 요소가 배열일 때 사용  
-> 인자로 `mapper` 받고, 리턴 타입은 `Stream`  
-> 새로운 Stream 생성해서 리턴하는 람다를 넘겨줘야 함  
=> **중첩 구조를 한 단계 제거하고 단일 컬렉션으로** 만들어주는 역할  
(이런 작업을 플래트닝(flattening)이라 함)  
```
List<List<Integer>> list = Arrays.asList(Arrays.asList(1, 3)< Arrays.asList(4, 2)); // [[1,3],[4,2]]

List<Integer flatMapTest = list.stream().flatMap(Collection::stream)
      .collect(Collectors.toList());  // [1, 3, 4, 2]
```
-> 이렇게 중첩 구조를 제거하고 작업 가능!  
-> 아래처럼 객체에도 적용 가능하다!!  
(Student 담고있는 리스트를 stream으로 생성하고, 객체가 가지고 있는 각 과목 점수를 `flapMap` 통해 접근 가능)  
```
students.stream().flapMapToInt(student -> IntStream.of(student.getKor(), student.getEng(), student.getMath()))
        .average().ifPresent(System.out::println);
```
&nbsp;  





