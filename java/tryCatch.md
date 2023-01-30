try/catch
-----

try : 예외 감지  
catch : 예외 처리  

```
public void A() {
		try {
		System.out.println( 10 / 0 );
        System.out.println( "끝" );
		}
		catch(Exception e) { 
			System.out.println("예외 처리");
		}
	} 
  ```
  -> 예외 처리  
  
 예외가 발생하면 바로 catch 문으로 가서 실행!!  
 
 ### • Exception은 모든 예외! 각각 예외마다 알맞게 처리해야 함!  
 (처음부터 Exception으로 선언해 준다면, 그 뒤에 선언한 catch문은 수행 불가)  
 ```
public static void main(String[] args) {
		int x,sum;
		try {
			x = Integer.parseInt(args[0]);
			sum = x / 0;
		}catch(ArithmeticException e) { // 첫번째 예외처리
			System.out.println("0으로 나누어서 예외발생");
		}catch(Exception e ) { // 두번째 예외처리
			System.out.println("args[0]를 주지않아 예외발생");
		}
	}
  ```  
  
  ### • 예외를 인위적으로 발생시키는 throw!!  
  : 예외를 던진다  
  ```
  public void A() {
		try {
		 throw new Exception();
		}
		catch(Exception e) {
			System.out.println("A에서 예외 처리");
		}
	}
  ```
  -> A에서 예외 처리  
  => 반드시 처리해야 할 예외를 명시적으로 에외를 발생시켜 **유지 보수에 도움** 줌  
  
  ### • throws : 자신을 불러온 메소드에서 인위적으로 예외 발생!
  ```
  public void A() {
		try {
			B();
		}
		catch(Exception e) {
			System.out.println("A에서 예외 처리");
		}
	}
	
	public void B() throws Exception{
		throw new Exception();
	}
  ```
  ➢ A메소드에서 B를 호출하고 B메소드에서는 예외를 throw
  -> B에서는 try/catch 구문이 없어서 예외 발생시켜도 처리해줄 곳이 없음    
  => 호출한 곳에서 처리해주겠다!! (= 발생한 예외를 호출한 곳으로 넘겨주겠다!)  
  
  ### • 무조건 수행하는 finally!!  
  ```
  public void A() {
		try {
			System.out.println("1");
			System.out.println( 10 / 0); // 예상치못한 예외발생
			System.out.println("2");
		}
		catch(Exception e) {
			System.out.println("3");
		}
		finally {
			System.out.println("4");
		}
	} 
  ```
  -> 1 3 4  
  (1 출력 후 다음 문장에서 예외가 발생  
  -> catch문 실행 (3 출력)  
  -> finally문 실행 (4 출력))  
  
  #### • finally문 실행 이유  
  ➢ 반드시 수행되어야 하는 구문 있을 경우  
  ➢ 중복 코드 없애기 가능  
  ```
  public void A() {
		Scanner test = new Scanner(System.in);
		try {
			//~~~~~~~ 기타 구문 수행
			test.close();
		}
		catch(Exception e) {
			test.close();
		}
	}
  ```
  `test.close();`가 중복됨!  -> finally 구문 사용해 해결  
  ```
  public void A() {
		Scanner test = new Scanner(System.in);
		try {
			//~~~~~~~ 기타 구문 수행
		}
		catch(Exception e) {
			System.out.println("나는 예외");
		}
    finally{
      test.close();
    {
	}
  ```
  
  
  
  
  
