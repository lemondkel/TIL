DML
----

## • DML  
### ➢ 데이터 조작어!!  (Data Manipulation Language)  
-> 데이터를 조작하여 저장하는 일련의 과정을 **트랜젝션**이라고 함  
=> DML은 트랜젝션을 다루는 명령어!!  
-> 테이블 행을 기준!  

&nbsp;  

## • 명령어  
## ◦◦ 1. SELECT  
➢ 데이터 조회/검색  
`SELECT [ALL/DISTINCT] 보고싶은 칼럼명1, 보고싶은 칼럼명2, ... FROM 해당 칼럼들이 있는 테이블명;`

#### ‣ ALL  
> ➢ Default 옵션이므로 별도 표기 필요 없음!!   
> -> 중복된 데이터 있어도 모두 출력  

#### ‣ DISTINCT  
> ➢ 중복된 데이터가 있는 경우 1건으로 처리해 출력!!  
> `SELECT DISTINCT STUDENT_ID FROM STUDENT`;


#### ‣ WILDCARD 사용하기!  
> ➢ 해당 테이블의 모든 칼럼 정보를 보고싶을 땐 와일드카드로 에스터리스크`*` 사용해 조회 가능!!  
> `SELECT * FROM 테이블명;`  

&nbsp;  

-----
### WHERE절 (⭐️)  
➢ SELECT문으로 데이터를 조회할 때 **특정 조건을 기준으로 원하는 행을 출력**하는데 사용!  
```
SELECT [조회할 열1 이름], [열2 이름], ...
FROM [조회할 테이블 이름] 
WHERE[조회할 행을 선별하기 위한 조건식];
```
-> 조건식 대입한 결과가 `참`인 경우에만 출력!!  

ex)
```
SELECT * FROM employee 
WHERE job = '사원';
```
-> job이 '사원'인 데이터만 조회!  

&nbsp;  

#### ‣ 기본 연산자 
➢  `>`, `<`, `>=`, `<=`, `=`, `!`, `<>`  

### ❓ 여러 개의 조건을 함께 사용해야 할 때?   
#### ‣ 논리 연산자    
➢ and : 둘 다 만족!  
ex)
```
SELECT * FROM employee 
WHERE job != '사장'
AND salary >= 500;
```
-> '사장'직급이 아니면서 salary가 500 이상인 데이터에 대해서만 조회!  

➢ or: 하나만 만족!  
ex)
```
SELECT * FROM employee 
WHERE (salary * 12) + isnull(commission, 0) <= 5500
OR job = '사원';
``` 
-> commission을 포함한 연봉이 5500만원 이하이거나 '사원' 직급인 데이터 조회!  

### ❓ 만약 A보다는 크고 B보다는 작은 데이터 조회하려면?!  
#### ‣ BETWEEN A AND B  
```
SELECT * FROM employee
WHERE salary BETWEEN 300 AND 500;
``` 
-> `AND`연산자만 사용했을 때보다 간결하고 직관적임!  
```
SELECT * FROM employee
WHERE salary >= 300
AND salary <= 500;
```

### ❓ 그럼 만약 salary가 300, 400, 500, 600인 데이터 조회하려면 어떡해??  
```
SELECT * FROM employee
WHERE salary = 300
OR salary = 400
OR salary = 500
OR salary = 600
```
-> 이렇게도 할 수 있지만 너무 길어ㅠㅠ  
**=> IN 사용하자!**  


#### ‣ IN  
```
SELECT * FROM employee 
WHERE salary IN (300, 400, 500, 600);
```
-> 훨씬 간결 + 직관적!!!  


&nbsp;  
&nbsp;  

-----
### JOIN (⭐️)  
➢ 한 데이터페이스 내의 여러 테이블의 레코드를 조합해 하나의 열로 표현한 것!!  
-> 테이블로서 저장되거나, 그 자체로 이용할 수 있는 결과 셋을 만들어 냄  
=> 서로 관계있는 데이터가 여러 테이블로 나뉘어 저장되므로 **각 테이블에 저장된 데이터를 효과적으로 검색할 수 있음**!!  

### ‣ 내부 조인(INNER JOIN)  
➢ 가장 흔한 결합 방식! 기본 조인 형식임!!  
-> 조인 구문에 기밚란 두 개의 테이블(A,B)의 컬럼 값을 결합  
=> 새로운 결과 테이블 생성!!!  

#### ☛ 명시적 조인 표현 (explicit)  
➢ 테이블에 조인을 하는 걸 지정하기 위해 JOIN 키워드 사용 + ON 키워드는 조인에 대한 구문 지정하는데 사용  
``` 
SELECT * FROM employee
INNER JOIN deparement
ON employee.DepartmentID = department.DepartmentID;
```

#### ☛ 암시적 조인 표현 (implicit)
➢ SELECT 구문의 FROM 절에서 그것들을 분리하는 `,` 사용해 단순히 조인을 위한 여러 테이블 나열  
```
SELECT * FROM employee, department  
WHERE employee.DepartmentID = department.DepartmentID;
```


### ‣ 동등 조인(EQUAL JOIN)    
➢ 비교자 기반의 조인! **동등 비교만을 사용**  
-> 다른 비교 연산자(ex. <)를 사용하는 건 동등 조인으로서의 조인의 자격 박탈하는 거임!!  

### ‣ 자연 조인(NATURAL JOIN)  
➢ 동등 조인의 한 유형!  
-> 조인 구문이 조인된 테이블에서 동일한 컬럼명을 가진 2개의 테이블에서 모든 컬럼들을 비교함으로써 암시적으로 일어나는 구문 
-> 결과적으로 나온 조인된 테이블을 동일한 이름을 가진 컬럼의 각 쌍에 대한 단 하나의 컬럼만 포함  
`SELECT * FROM employee NATURAL JOIN department;`


### ‣ 교차 조인(CROSS JOIN)  
➢ 조인되는 두 테이블에서 곱집합 반환!  
-> 두 번째 테이블의 각 행과 첫 번째 테이블의 각 행이 한 번씩 결합된 열 생성  
(m행 테이블과 n행 테이블 교차 조인되면 m*n개의 행 생성)  

#### ☛ 명시적 조인 표현 (explicit)  
``` 
SELECT * FROM employee
CROSS JOIN department;
```

#### ☛ 암시적 조인 표현 (implicit)  
```
SELECT * FROM employee, department;
```


### ‣ 외부 조인(OUTER JOIN)  
➢ 조인 대상 테이블에서 특정 테이블의 데이터가 모두 필요한 상황에 사용!  
-> 외부 조인 활용해 효과적으로 결과 집합 생성 가능!!  

### ‣ 왼쪽 외부 조인(LEFT OUTER JOIN)  
➢ 우측 테이블에 조인할 컬럼의 값이 없는 경우 사용!  
=> 좌측 테이블의 모든 데이터를 포함하는 결과 집합을 생성  
```
SELECT * FROM employee 
LEFT OUTER JOIN department
ON employee.DepartmentID = department.DepartmentID;
```

### ‣ 오른쪽 외부 조인(RIGHT OUTER JOIN)  
➢ 좌측 테이블에 조인할 컬럼의 값이 없는 경우 사용!  
=> 우측 테이블의 모든 데이터를 포함하는 결과 집합 생성  
```
SELECT * FROM employee 
RIGHT OUTER JOIN department
ON employee.DepartmentID = department.DepartmentID;
```

### ‣ 완전 외부 조인(FULL OUTER JOIN)  
➢ 양쪽 테이블 모두 외부 조인 필요할 때 사용!  
```
SELECT * FROM employee
FULL OUTER JOIN department
ON employee.DepartmentID = department.DepartmentID;
```


-----

## ◦◦ 2. INSERT    
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

## ◦◦ 3. UPDATE    
➢ 데이터 수정  
`UPDATE 테이블명 SET 수정되어야 할 칼럼명 = 수정되기를 원하는 새로운 값;`  
-> ex) `UPDATE STUDENT SET STUDENT_ID = 234;`

&nbsp;  

## ◦◦ 4. DELETE   
➢ 데이터 삭제  
`DELETE [FROM] 삭제될 정보가 들어있는 테이블명;`    
-> ex) `DELETE FROM STUDENT`;

