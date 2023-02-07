DML
----

## • DML  
### ➢ 데이터 조작어!!  (Data Manipulation Language)  
-> 데이터를 조작하여 저장하는 일련의 과정을 **트랜젝션**이라고 함  
=> DML은 트랜젝션을 다루는 명령어!!  
-> 테이블 행을 기준!  

&nbsp;  

## • 명령어  
### ◦◦ SELECT  
➢ 데이터 조회/검색  
`SELECT [ALL/DISTINCT] 보고싶은 칼럼명1, 보고싶은 칼럼명2, ... FROM 해당 칼럼들이 있는 테이블명;`

#### ‣ ALL  
➢ Default 옵션이므로 별도 표기 필요 없음!!   
-> 중복된 데이터 있어도 모두 출력  

#### ‣ DISTINCT  
➢ 중복된 데이터가 있는 경우 1건으로 처리해 출력!!  
`SELECT DISTINCT STUDENT_ID FROM STUDENT`;


#### ‣ WILDCARD 사용하기!  
➢ 해당 테이블의 모든 칼럼 정보를 보고싶을 땐 와일드카드로 에스터리스크`*` 사용해 조회 가능!!  
`SELECT * FROM 테이블명;`  

&nbsp;  

### ◦◦ INSERT    
➢ 데이터 삽입  
#### ‣ 몇 개의 칼럼에만 데이터 삽입할 경우!  
`INSERT INTO 테이블명(칼럼리스트) VALUES (칼럼리스트에 넣을 값리스트);`  
-> ex) `INSERT INTO STUDENT (STUDENT_ID, STUDENT_NAME, STUDENT_AGE) VALUES (123, "박땡땡", 23);` 

#### ‣ 모든 칼럼에 데이터 삽입할 경우!  
`INSERT INTO 테이블명 VALUES (전체 칼럼리스트에 넣을 값리스트);`  
-> ex) `INSERT INTO STUDENT VALUES (123, "박땡땡", 23, "Korea", 1018);` 

> 데이터 유형일 경우 ' 로 입력할 값 입력!  
> 데이터 유형이 숫자면 그냥 입력!  
> Primary key나 not null로 지정된 칼럼은 null 허용X!!  
> 모든 칼럼에 데이터 삽입할 경우엔 칼럼의 순서대로 빠지없이 데이터 입력되어야 함!  

&nbsp;  

### ◦◦ UPDATE    
➢ 데이터 수정  
`UPDATE 테이블명 SET 수정되어야 할 칼럼명 = 수정되기를 원하는 새로운 값;`  
-> ex) `UPDATE STUDENT SET STUDENT_ID = 234;`

&nbsp;  

### ◦◦ DELETE   
➢ 데이터 삭제  
`DELETE [FROM] 삭제될 정보가 들어있는 테이블명;`    
-> ex) `DELETE FROM STUDENT`;

