replace와 replaceAll과 replaceFirst
-------

replace(변환하고자 하는 문자열, 변환할 문자 값)  
replaceAll(변환하고자 하는 문자열, 변환할 문자 값)  
replaceFirst(변화하고자 하는 문자열, 변환할 문자 값)

```
String str1 = "aaaa";
System.out.println(str1.replace("aa", "b"); //  bb
System.out.println(str1.replac3All("aa", "b");  // bb
```

```
String str2 = "자바 코딩";
System.out.println(str2.replace("바 코", "good");  // 자good딩
System.out.println(str2.replaceAll("바 코", "good");  // 자good딩  ㅊ
```

### -> replace와 replaceAll이 똑같은 결과 출력하는데 무슨 차이가 있다는 거지??  
-> 가장 큰 차이는 입력 인자 값의 형태!!  
replace는 Char  
replaceAll은 String (정규표현식이라 부르는 형식의 일자값 사용 가능)  

```
String str3 = "abcdefghijk";
System.out.println(str3.replaceAll("[abchij]", "묭")
// 묭묭묭defg묭묭묭k 
System.out.println(str3.replaceAll("[^abchij]", "묭")
// abc묭묭묭묭hij묭  
```
#### replace()를 사용해 위 replaceAll()한 결과를 가져오려면??  

```
String str3 = "abcdefghijk";
System.out.println(str.replace("a","묭").replace("b","묭").replace("c","묭").replace("h","묭").replace("i","묭").replace("j","묭"));
// 묭묭묭defg묭묭묭k
System.out.println(str3.replac("abc","묭묭묭").replace("hij","묭묭묭");
// 묭묭묭defg묭묭묭k
```

-> 되긴 하지만 너무 번거롭고 불편!!  
+ 대상 문자열이 어떤 형태인지 모를 때는 replace() 함수만 사용하기엔 무리  

### 그럼 replaceFirst는 언제 사용하지?!  
-> replaceFirst는 이름처럼 첫번째 발견되는 타겟만 치환!!  
```
String str4 = "a, b, c, d, e";
System.out.println(",", " ");
// a b, c, d, e
System.out.println(",", "");
// ab, c, d, e
```


