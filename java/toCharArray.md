toCharArray
----

## • toCharArray  
➢ 문자열을 한 글자씩 쪼개서 char 타입의 배열에 집어넣음!  

```
String hi = "hello";
char[] str = hi.toCharArray();

String hi2 = new String(str);
// char타입 배열을 문자열로!
```

#### 두 문자열을 한 글자씩 비교하는 경우 각각 char[]에 넣고 정렬한 뒤 새 문자열로 만들어주고 `equals()`로 비교하면 됨!!  
