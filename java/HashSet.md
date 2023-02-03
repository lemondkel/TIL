HashSet
----

## • HashSet  
### ➢ HashSet은 Set 인터페이스에서 지원하는 구현 클래스!  
-> 순서대로 입력되지 않고, 일정하게 유지되지 않음  
(HashSet은 null요소도 허용)  
**중복 허용X!!!**  

### 중복을 걸러내는 과정  
➢ HashSet은 객체 저장하기 전에 먼저 객체의 `hashCode()`메소드를 호출해서 해시코드를 얻어냄  
-> 저장되어 있는 객체들의 해시 코드와 비교 후 같은 해시 코드 있으면 다시 `equals()`메소드로 두 객체 비교  
-> `true`가 나오면 동일한 객체로 판단하고 중복 저장하지 않음!!  

➢ 문자열을 HashSet에 저장할 경우, 같은 문자열을 같은 String객체는 동일한 객체로 간주됨!!  
(다른 문자열을 같은 String객체는 다른 객체로!)  
#### ❓이유는?!?  
➢ String클래스가 `hashCode()`와 `equals()`메소드를 재정의해서 같은 문자열일 경우 `hashCode()`의 리턴 값을 같게, `equals()`의 리턴 값은 `true`가 나오도록 해서!!  

&nbsp;  
&nbsp;  

### • HashSet 변수 선언!  
➢ HashSet <데이터타입> 변수명 = new HashSet<데이터타입>();  
```
HashSet <Integer> 변수명 = new HashSet<Integer>();
HashSet <String> 변수명 = new HashSet<String>();
```

### • HashSet 값 추가!  
➢ `add(value)`메소드 사용  
```
public class HashSetTest {
	public static void main(String[] args)  {	
		// Integer
		HashSet<Integer> set = new HashSet<Integer>();	
		
		set.add(1);
		set.add(2);
		set.add(3);
		set.add(1);
				
		// String
		HashSet<String> set2 = new HashSet<String>();

		set2.add("a");
		set2.add("b");
		set2.add("c");
		set2.add("a");
	}
}
```  

### • HashSet 값 삭제!  
➢ `remove(value)`메소드 사용  
-> 전부 삭제하고 싶을 때는 `clear()`메소드 사용!  
```
public class HashSetTest {
	public static void main(String[] args)  {	
		// Integer
		HashSet<Integer> set = new HashSet<Integer>();	
		set.remove(1);
		set.clear();
				
		// String
		HashSet<String> set2 = new HashSet<String>();
		set2.remove("a");
		set2.clear();
	}
}
```

### • HashSet 크기 구하기!  
➢ `size()`메소드 사용해 현재 크기 구하기  
(중복값이 들어오면 자동으로 제거!)  
```
public class HashSetTest {
	public static void main(String[] args)  {	
		// Integer
		HashSet<Integer> set = new HashSet<Integer>();	
		
		set.add(1);
		set.add(2);
		set.add(3);
		set.add(1);
		System.out.println("set의 크기 : " + set.size());  // set의 크기 : 3
				
		// String
		HashSet<String> set2 = new HashSet<String>();

		set2.add("a");
		set2.add("b");
		set2.add("c");
		set2.add("a");
		System.out.println("set2의 크기 : " + set2.size());  // set2의 크기 : 3
	}
}
```

### • HashSet 데이터 출력!  
➢ 단순히 `println`으로 출력할 경우 [1,2,3], [a,b,c] 형태로 출력  
-> 하나의 객체를 가져오고 싶을 땐 `Iterator` 사용!!  
```
import java.util.HashSet;
import java.util.Iterator;

public class HashSetTest {
	public static void main(String[] args)  {	
		// Integer
		HashSet<Integer> set = new HashSet<Integer>();	
		
		set.add(1);
		set.add(2);
		set.add(3);
		set.add(1);
		System.out.println("set의 값 : " + set);  // set의 값 : [1, 2, 3]

		Iterator iter = set.iterator();
		while(iter.hasNext()) {
			System.out.print(iter.next() + " ");  // 1 2 3
		}
	}
}
```

### • HashSet 검색!  
➢ `contains(value)`메소드 사용  
-> 값이 존재하면 `true`, 없으면 `false`를 return  
```
public class HashSetTest {
	public static void main(String[] args)  {	
		// Integer
		HashSet<Integer> set = new HashSet<Integer>();	
		
		set.add(1);
		set.add(2);
		set.add(3);
		set.add(1);
		
		System.out.println("1은 있는가? : " + set.contains(1)); // 1은 있는가? : true
				
		// String
		HashSet<String> set2 = new HashSet<String>();

		set2.add("a");
		set2.add("b");
		set2.add("c");
		set2.add("a");
		
		System.out.println("a는 있는가? : " + set2.contains("f"));  // a는 있는가? : false
	}
}
```



