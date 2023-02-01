BufferedReader와 BufferedWriter
------
### ❓ 입력받는 건 `Scanner`가 있고 출력은 `System.out.println();`가 있는데 왜 BufferedReader/Writer을 쓰지??  
-> BufferedReader와 BufferedWriter가 **속도 훨씬 빠름**!!   
=> **많은 양의 데이터 처리할 때 유리!**  

### • 버퍼를 사용하지 않는 입력 
#### -> 키보드의 입력이 키를 누르는 즉시 바로 전달! 
```
  -------                 --------
 | 키보드 | -------------> | 프로그램 |
  -------                 ---------
```
### • 버퍼를 사용하는 입력 
#### -> 키보드의 입력 있을 때마다 한 문자씩 버퍼로 전송!  
#### -> 버퍼 가득 차거나 개행 문자 나타나면, 버퍼의 내용 한 번에 전송!
```
  --------       ------------------       --------
  | 키보드 | ---> | |H|E|L|L|O| | | | ---> | 프로그램 |
  --------       ------------------       --------
```
### ❓ 버퍼는 한 번 거쳐가서 더 느릴 것 같은데 왜 빠른게 장점이지?  
-> 하드디스크는 원래 엄청 느림! (하드뿐 아니라 키보드, 모니터 등 외부 장치와의 데이터 입출력)  
-> 버퍼링 없이 키보드가 눌릴 때마다 바로 목적지로 이동시키는 것보다 중간에 메모리 버퍼 두고 **데이터 묶어서 한 번에 이동**시키는게 더 효율 + 빠름!  
(그냥 전송하면 CPU와 성능 갭 많이 나서 비효율적)  
#### ➢ 버퍼는 일시적으로 데이터 보관하는 임시 메모리 영역!   

&nbsp;
 
```
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
```  

## • BufferedReader 사용  
```
BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
String text = br.readLine(); // String일 경우!
int i = Integer.parseInt(br.readLine());  // Int일 경우! 

FileReader fr = new FileReader("파일명.java");   // 파일에서 입력받을 경우!
BufferReader br_f = new BufferedReader(fr));

String line = "";
for(int i=0; (line = br_f.readLine()) != null; i++){  // 파일 한 줄씩 읽어서 출력
  System.out.println(line);
}
```
BufferedReader은 **`Enter`만 경계로 인식** + 받은 데이터를 **String으로 고정**  
-> 입력 받은 데이터 가공하는 작업 필요! 

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
➢ `System.out.println("");`과 동일!  
-> `BufferedWriter`함수도 버퍼 이용하기 때문에 성능 굿~  
=> 말했다시피 많은 양의 출력 필요할 때 사용하면 짱!!  
```
BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
String text = "abcdefg";  // 출력할 문자열!
bw.write(text + "\n");  // 버퍼에 있는 값 전부 출력
bw.newLine();  // 엔터 역할
bw.flush();   // 남아있는 데이터 모두 출력
bw.close();   // 스트림 닫아줌
```
#### -> `flush()`와 `close()`는 선택이 아닌 필수!! 반드시 호출해서 뒤처리 해야 함!  
#### ->  게다가 `bw.write`에는 `System.out.println()`같은 자동개행기능 없어서 `\n`넣어주거나 `newLine()` 이용해 처리!  





