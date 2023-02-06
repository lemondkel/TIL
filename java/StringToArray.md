문자열을 배열로 
----
후 이거 맨날 나오는데 맨날 틀령 그냥 정리해두자,,,  

## • split() 메서드  
#### ➢ 가장 많이 사용됨!  
```
String str = "Hello Java Programming!";

String[] arr = str.split(" ");

for (int i=0; i < arr.length; i++)
    System.out.println("arr[" + i+ "]=" + arr[i]);
```

```
arr[0]=Hello
arr[1]=Java
arr[2]=Programming!
``` 


## • Pattern.split() 메서드  
#### ➢ 정규식 이용!  
```
String str = "Hello,Java,Programming!";

Pattern pattern = Pattern.compile(",");
String[] arr = pattern.split(str);

for (int i=0; i <arr.length; i++)
  System.out.println("arr[" + i+ "]=" + arr[i]);
```

```
arr[0]=Hello
arr[1]=Java
arr[2]=Programming!
```


## • StringTokenizer 클래스  
#### ➢ 자주 사용하는 방법은 아님!  
```
int i = 0;

String str = "Hello,Java,Programming!";

// 문자열을 콤마로 분할
StringTokenizer str_tokenizer = new StringTokenizer(str, ",");

// 토큰의 개수와 동일한 문자열 배열을 생성
String[] arr = new String[str_tokenizer.countTokens()];

// 위에서 생성한 문자열 배열을 순회하여 토큰을 할당
while (str_tokenizer.hasMoreTokens()) {
  arr[i] = str_tokenizer.nextToken();
  i++;
}

for (String strElement : arr) {
  System.out.println(strElement + " ");
}
```

```
Hello 
Java 
Programming!
```

## • toCharArray()  
#### ➢ char[]로 반환!  
```
String str = "Hello, World";
char[] arr = str.toCharArray();
System.out.println("arr: " + Arrays.toString(arr));
```

```
arr: [H, e, l, l, o, ,,  , W, o, r, l, d]
```

