BufferedReader와 BufferedWriter
------
### ❓ 입력받는 건 `Scanner`가 있고 출력은 `System.out.println();`가 있는데 왜 BufferedReader/Writer을 쓰지??  
-> BufferedReader와 BufferedWriter가 **속도 훨씬 빠름**!!   
(입력된 데이터가 바로 전달되지 않고 버퍼를 거쳐 전달돼서 데이터 처리 효율성 높임!!)  
=> **많은 양의 데이터 처리할 때 유리!**  

근데 BufferedReader은 **`Enter`만 경계로 인식** + 받은 데이터를 **String으로 고정**  
-> 입력 받은 데이터 가공하는 작업 필요!  

```
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
```  

## • BufferedReader 사용  
```
BufferedReader bf = new BufferedReader(new InputStreamReader(System.in));
String text = bf.readLine(); // String일 경우!
int i = Integer.parseInt(bf.readLine());  // Int일 경우!
```
## • readLine() 사용시 주의할 점  
### 1. readLine()시 리턴값은 String으로 고정되기에 String이 아닌 다른 타입으로 입력 받으려면 형변환 필요!  
(readLine()은 Scanner에서의 next() 같은 역할로 보면 됨)  

### 2. 예외처리 필수!  
-> readLine 할 때마다 try/catch문을 이용해 예외 처리를 해줘도 되지만 보통 **throws IOException** 통해 작업  

#### throw 이용 방법  
➢ `import java.io.IOException;` 추가  
➢ main 클래스 옆에 throws IOException를 작성  
`public static void main(String[] args) throws IOException{}`  

### ❓BufferedReader해서 읽은 데이터는 `Enter`만 경계로 인식한다고 했는데, 그럼 공백으로는 경계 못 나누나?!?  
-> **아님!!** `StringTokenizer의 nextToken()`함수와 `split()`함수 통해 가능함!!  

### StringTokenizer  
```
StringTokenizer st = new StringTokenizer(text);  // 인자값에 입력 문자열 넣음
int a = Integer.parseInt(st.nextToken());
int b = Integer.parseInt(st.nextToken());
```
-> 예를 들어 공백이 아니라 `/`같은 다른 문자로 기분을 나누고 싶다면  
`StringTokenizer st = new StringTokenizer(text, "/");` 이렇게 사용!  


### split()  
```
String[] str = text.split(" ");
``` 

## • BufferedWriter 사용   
```
BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
String text = "abcdefg";  // 출력할 문자열!
bw.write(text + "\n");  // 버퍼에 있는 값 전부 출력
bw.flush();   // 남아있는 데이터 모두 출력
bw.close();   // 스트림 닫아줌
```
#### `flush()`와 `close()`는 선택이 아닌 필수!! 반드시 호출해서 뒤처리 해야 함!  
#### 게다가 `bw.write`에는 `System.out.println()`같은 자동개행기능 없어서 `\n`로 따로 처리해야 함  





