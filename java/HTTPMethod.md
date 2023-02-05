HTTP Method
----
## • HTTP Method  

### ˚ GET 조회
➢ 주로 **데이터 읽거나 검색**할 때에 사용!  
-> GET 요청 성공적으로 이루어지면 상태 코드 200(ok) 리턴  
-> 에러 발생하면 주로 404(Not found)나 400(Bad request) 에러! 

-> 같은 요청 여러 번 해도 변함없이 항상 같은 응답 받을 수 있음!  
-> 데이터를 변경하는 연산에 사용하면 안됨!!  
=> **idempotent**  

-> **GET은 캐싱이 가능해서 같은 데이터를 한 번 더 조회할 경우 저장한 값을 사용해 조회 속도 빨라짐!!!** 
```
GET /user/1
```
=> 데이터를 조회하는 거라 요청시에 Body값과 Content-Type이 비워져 있음  
-> 데이터 조회 성공하면 Body 값에 데이터 값 저장해 성공 응답 보냄!  

&nbsp;  
&nbsp;  

### ˚ POST 등록  
➢ **새로운 리소스 생성**할 때 사용!  
(하위 리소스들 생성하는데 사용)  
-> 성공적으로 이루어지면 상태 코드 201(Created) 리턴  
**=> URL에 데이터 정보 들어있지 않아 GET보다는 조금 더 안전!**  
```
POST /user
body : {date : "example"}
Content-Type : "application/json"
```
=> 데이터를 생성하는 거라 요청시에 Body값과 Content-Type 값 작성해야 함   
(URL 통해 데이터 받지 않고 Body 값 통해서 받음!)   
-> 데이터 조회 성공하면 Body 값에 저장한 데이터 값을 저장해 성공 응답 보냄!  

&nbsp;  
&nbsp;  

### ˚ PUT 수정  
➢ **리소스 생성, 업데이트** 하기 위해 서버로 데이터 보내는데 사용!  
-> 동일한 PUT 요청을 여러 번 호출하면 항상 동일한 결과 생성!  
=> **idempotent**  

```
PUT /user/1
body : {date : "update example"}
Content-Type : "application/json"
```
=> 데이터를 수정하는 거라 요청시에 Body값과 Content-Type 값 작성해야 함  
(URL 통해 어떤 데이터 수정할지 파라미터를 받고, 수정할 데이터 값을 Body 통해서 받음!)  
-> 데이터 조회 성공하면 Body 값에 저장한 데이터 값을 저장해 성공 응답 보냄!  

&nbsp;  
&nbsp;  

### ˚ DELETE 삭제  
➢ 저장된 **리소스 삭제**!  
```
DELETE /user/1
```
=> 데이터를 삭제하는 거라 요청시에 Body값과 Content-Type 값 비워져있음  
(URL 통해 어떤 데이터를 삭제할지 파라미터 받음!)  
-> 데이터 삭제 성공하면 Body 값 없이 성공 응답만 보냄!!  


#### ❓ idempotent(멱등성)이란?  
➢ 여러 번 수행해도 결과가 같다는 걸 의미!!  
=> 호출로 인해 데이터가 변형되지 않음!!




