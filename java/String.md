StringBuffer & StringBuilder  
------

### • String은 불변!!  
-> 문자열 데이터가 계속 변경되어야 할 때는 String 보다는 StringBuffer, StringBuilder 권장  

```
.append(값) : 뒤에 값 붙임  
.insert(인덱스, 값) : 특정 인덱스부터 값 삽입    
.delete(인덱스, 인덱스) : 인덱스~인덱스 값 삭제  
.indexOf(값) : 값이 어느 인덱스에 있는지 확인  
.substring(인덱스, 인덱스) : 인덱스~인덱스 값 자르기  
.length() : 길이 확인  
.replace(인덱스, 인덱스, 값) : 인덱스~인덱스를 값으로 대체  
.reverse() : 글자 순서 뒤집음  
```

----

```
String str = "hello";
str += "world";
```
-> hello world  

#### • "hello"에 "world" 추가했더니 "hello world"가 잘 출력되는데 왜 불변이지?  
-> **변경된게 아님!!** str이 "hello world"의 값으로 새로운 메모리의 영역을 가르키게 되는 것!!  
=> "hello"가 사라지고 "hello world"가 생성되는 거고 변경이 XXX  

####  문자열 추가, 수정, 삭제 등 자주 일어날 때 string 자주 사용하면 힙 메모리 영역 딸려서 성능에 영향!!  
-> 이럴 땐 StringBuffer, StringBuilder 클래스 사용하장~~  
(StringBuffer, StringBuilder은 가변성ㅇㅇ)  

```
StringBuffer str = new StringBuffer("hello");
str.append("world");
```
-> hello world  

----
###  StringBuffer와 StringBuilder의 차이?!  
-> StringBuffer는 동기화 키워드 지원 -> 멀티쓰레도 환경에서 안전  
-> StringBuilder는 동기화 지원XX -> 멀티쓰레드 환경 적합 X, 대신 단일쓰레드에서는 StringBuffer보다 굿!!  

--  

### ✓ 요약  
|||
|:---:|:---:|
|String | 문자열 연산 적고 멀티쓰레드 환경일 때  |
|StringBuffer | 문자열 연산 많고 멀티쓰레드 환경일 때  |
|StringBuilder | 문자열 연산 많고 단일쓰레드거나 동기화 고려 필요 없을 때  |






