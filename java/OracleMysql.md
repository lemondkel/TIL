Oracle과 MySQL 차이  
----

## ❓ DB?!  
### ➢ 여러 사람에 의해 공유되어 사용될 목적으로 통합하여 관리되는 데이터의 집합!!!  
-> 자료를 구조화하여 저장해 자료 검색/갱신의 효율 업!  
Oracle과 MySQL은 DB의 여러 종류들 중 하나!!!  
(대체로 충분한 예산/ 복잡한 비즈니스 요구하는 큰 프젝들 주로 수행하는 대기업들은 Oracle 선호)  

&nbsp;  

## • 오라클(Oracle)      
➢ 세계 점유율 1위 데이터베이스 관리 시스템...?!?! 우와  
-> 그만큼 현재 유닉스 체제에서 가장 많이 사용되는 DBMS!  

### ☺︎ 오라클 장점  
> #### ➢ 관리 시스템  
> ◦ Multiple databases 튜닝 가능  
> ◦ **다수의 사용자가 동시에 접근** 가능

> #### ➢ 변화 관리  
> ◦ 변경 plan 작성하고 실제 구현 전에 변경 사항의 효과 볼 수 있음!  
> ◦ **생산 시스템 방해 X**  

> #### ➢ 경고  
> ◦ 오류 발생하면 설정되어 있는 계정 및 이메일로 연락 옴  

> #### ➢ 분산처리  
> ◦ DBMS 실행 컴퓨터 / 서버 역할 컴퓨터 / DB 응용 프로그램 실행 컴퓨터 **다르게 분산처리**!  

> #### ➢ 용량처리  
> ◦ 다른 데이터베이스보다 고성능의 트랜잭션 처리  
> ◦ Cost 비용 최소화 위해 **테이블과 인덱스로 분석**   

### ☹︎ 오라클 단점
> #### ➢ 비용적인 부담 증가  
> #### ➢ 기능이 많은만큼 초보자에게 어려움  
> #### ➢ 높은 지원 하드웨어 사양이 필요  

### => 관리, 분산/용량처리 등 많은 기능이 있지만 그만큼 비용&사양이 요구됨!  

&nbsp;  

--------

## • MySQL    
➢ 전세계적으로 가장 널리 사용되고 있는 **오픈 소스 데이터베이스**!    

### ☺︎ MySQL 장점  
> #### ➢ 용량처리  
> ◦ MySQL은 오직 1MB의 RAM만 사용할만큼 용량 차지 적음  
> (= 매우 적은 오버헤드 사용!)
> ◦ 처리 속도 빠르고 대용량 데이터 처리에 용이  

> #### ➢ 접근성    
> ◦ 상대적으로 구조 간단해 사용하기 쉬움  

> #### ➢ 지원  
> ◦ 다양한 프로그래밍 언어 통합 가능
> ◦ 거의 모든 운영체제 사용 지원  오..

> #### ➢ 유연성  
> ◦ 유연하고 확장 가능한 구조  

> #### ➢ 가격 
> ◦ MySQL 데이터베이스는 무료  
> ◦ 오픈소스는 무료, 상업용은 유료

### ☹︎ MySQL 단점
> #### ➢ 복잡한 쿼리는 성능 저하
> #### ➢ 트랜잭션 지원 완벽하지 않음
> #### ➢ 사용자 정의 함수의 사용 어렵고 유연하지 X

### => 용량, 접근성, 유연성, 지원 다 좋지만 복잡한 쿼리나 사용자정의 함수, 트랜잭션 지원 부분은 아쉽 ,,,  

&nbsp;

------
## • 오라클과 MySQL 차이!!  

### 1. 구조적 차이  
**Oracle** : DB 서버가 통합된 하나의 스토리지를 공유하는 방식 (하나를 공유)  
**MySQL** : DB 서버마다 독립적인 스토리지를 할당하는 방식 (각각 할당)  

### 2. 조인 방식의 차이  
**Oracle** : 중첩 루프 조인, 해시 조인, 소트 머지 조인 방식 제공  
**MySQL** : 중첩 루프 조인 방식 제공  

### 3. 확장성의 차이  
**Oracle** : 별도의 DBMS 설치해 사용 불가  
**MySQL** : 별도의 DBMS 설치해 사용 가능  

### 4. 메모리 사용율의 차이  
**Oracle** : 메모리 사용율 큼 -> 최소 수백MB 이상 되어야 설치 가능  
**MySQL** : 메모리 사용율 낮음 -> 1MB 환경에서도 설치 가능  

### 5. 파티셔닝  
**Oracle** : Local Partion Index, Global Partion Index 지원  
**MySQL** : Local Partion Index만 지원  

### 6. 힌트 방식  
**Oracle** : 힌트에 문법적 오류 있으면 힌트 무시하고 쿼리 수행  
**MySQL** : 힌트에 문법적 오류 있으면 오류 발생시킴  

### 7. SQL 구문의 차이  
#### ‣‣ NULL 대체
**Oracle** `NVL(열명, '대체값')`  
**MySQL** `IFNULL(열명, '대체값')`

#### ‣‣ SELECT 결과 개수 제한(페이징처리)   
**Oracle** `ROWNUM <= 숫자`  
**MySQL** `LIMIT 시작위치, 가져올 데이터 건수`

#### ‣‣ 가상테이블 DUAL  
**Oracle** `SELECT 1 FROM DUAL;`  
**MySQL** `SELECT 1;`

#### ‣‣ 현재 날짜  
**Oracle** `SELECT SYSDATE FROM DUAL;`  
**MySQL** `SELECT NOW();`

#### ‣‣ 조건식 (IF)  
**Oracle** `SELECT DECODE(칼럼, 값, TRUE일 때 출력할 값, FALSE일 때 출력할 값) FROM TABLE;`   
**MySQL** `SELECT IFNULL(조건식, TRUE일 때 값, FALSE일 때 값) FROM TABLE;`

#### ‣‣ 날짜 형식  
**Oracle** `SELECT TO_CHAR(SYSDATE, 'YYYY-MM-FF') FROM DUAL;`  
**MySQL** `SELECT DATE_FORMAT(NOW(), '%Y-%m-%d');`

#### ‣‣ 시퀀스  
**Oracle** 
```
CREATE SEQUENCE [시퀀스명]
INCREMENT BY [증가값]
START WITH [시작값]
NOMINVALUE / MINVALUE [최솟값]
NOMAXVALUE / MAXVALUE [최댓값]  
CYCLE / NOCYCLE
CACHE / NOCACHE
```
```
INSERT TABLE
(SEQ_NBR)
VALUES
(시퀀스명.NEXTVAL)
;
```

**MySQL**  
```
CREATE TABLE
(SEQ_NBR INT NOT NULL AUTO_INCREMENT PRIMARY KEY);
```
(INSERT 시 자동으로 값이 생성되어 들어감)  

#### ‣‣ 문자열 합치기  
**Oracle** 
```
SELECT "A" || "B" FROM DUAL;
SELECT CONCAT("A", "B") FROM DUAL;
```
**MySQL**
` SELECT CONCAT("A", "B") FROM DUAL;`


#### ‣‣ 문자열 자르기  
**Oracle** `SELECT SUBSTR(문자열/칼럼, 시작위치, 잘라낼 문자열 길이) FROM DUAL;`  
**MYSQL** `SELECT SUBSTRING(문자열/칼럼, 시작위치, 잘라낼 문자열의 길이);`

