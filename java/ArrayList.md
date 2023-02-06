ArrayList
----

## • ArrayList  
➢ List 인터페이스를 상속받은 클래스로 **크기가 가변적으로 변하는** 선형 리스트!  
-> 객체들이 추가돼서 저장 용량 초과하면 자동으로 그만큼 저장 용량 늘어남!!!!!  
(인덱스는 당연히 0부터!!)  


## • ArrayList 사용 방법!  
### ArrayList 선언  
```
// 타입 설정 안하면 Object로 선언!
ArrayList list = new ArrayList();

// 타입 Student 객체만 사용 가능함!
ArrayList<Student> num = new ArrayList<Student>();

// int 타입만 사용 가능!
ArrayList<Integer> num = new ArrayList<Integer>();
ArrayList<Integer> num = new ArrayList<>();
ArrayList<Integer> num = new ArrayList<Integer>(10);

// 생성시 값 추가!  
ArrayList<Integer> num = new ArrayList<Integer>(Arrays.asList(1,2,3);
```
-> ArrayList에 타입 명시해주는게 굿!!  

&nbsp;  

### ArrayList 값 추가  
```
ArrayList<Integer> list = new ArrayList<Integer>();
list.add(3);
list.add(null);
list.add(1, 10);  // 인덱스 1에 10이라는 값 추가! 

Array<Student> members = new ArrayList<Student>();
Student Student = new Student(name, age);
members.add(student);
members.add(new Student("박은지", 23);
```
-> `add(index, value)` 메소드 사용하면 값 추가 가능!!  
-> 근데 중간에 값 추가 많이 하면 성능에 안좋음!  
=> 많이 넣을거면 LinkedList도 굿!!  

&nbsp;  

### ArrayList 값 삭제  
```
ArrayList<Integer> list = new ArrayList<Integer>(Arrays.asList(1,2,3));
System.out.println(list.get(0));  //0번째 인덱스 출력

for(Integer i : list) {
  System.out.println(i);
} // 전체 출력 

Iterator iter = list.iterator();
while(iter.hasNext()){
  System.out.println(iter.next());
}
```
-> `get(index)` 메소드 사용하면 ArrayList의 원하는 인덱스값 리턴!  


&nbsp;  

### ArrayList 값 삭제  
```
ArrayList<Integer> list = new ArrayList<Integer>(Arrays.asList(1,2,3));
System.out.println(list.contains(1)); // 1이 있는지 검색하고 있으면 true
System.out.println(lise.indexOf(1));  // 1이 있는 인덱스 없으면 -1 반환! 
```
-> `contains(value)` 메소드 사용해 검색!  
-> `indexOf(value)`메소드 사용해 값 존재하는 인덱스 검색!  

