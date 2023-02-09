Oracle과 MySQL 차이  
---

## 1. 구조적 차이  
**Oracle** : DB 서버가 통합된 하나의 스토리지를 공유하는 방식 (하나를 공유)  
**MySQL** : DB 서버마다 독립적인 스토리지를 할당하는 방식 (각각 할당)  

## 2. 조인 방식의 차이  
**Oracle** : 중첩 루프 조인, 해시 조인, 소트 머지 조인 방식 제공  
**MySQL** : 중첩 루프 조인 방식 제공  

## 3. 확장성의 차이  
**Oracle** : 별도의 DBMS 설치해 사용 불가  
**MySQL** : 별도의 DBMS 설치해 사용 가능  

## 4. 메모리 사용율의 차이  
**Oracle** : 메모리 사용율 큼 -> 최소 수백MB 이상 되어야 설치 가능  
**MySQL** : 메모리 사용율 낮음 -> 1MB 환경에서도 설치 가능  

## 5. 파티셔닝  
**Oracle** : Local Partion Index, Global Partion Index 지원  
**MySQL** : Local Partion Index만 지원  

## 6. 힌트 방식  
**Oracle** : 힌트에 문법적 오류 있으면 힌트 무시하고 쿼리 수행  
**MySQL** : 힌트에 문법적 오류 있으면 오류 발생시킴  

## 7. SQL 구문의 차이  
### ‣‣ NULL 대체
**Oracle** `NVL(열명, '대체값')`  
**MySQL** `IFNULL(열명, '대체값')`

### ‣‣ SELECT 결과 개수 제한(페이징처리)   
**Oracle** `ROWNUM <= 숫자`  
**MySQL** `LIMIT 시작위치, 가져올 데이터 건수`

### ‣‣ 가상테이블 DUAL  
**Oracle** `SELECT 1 FROM DUAL;`  
**MySQL** `SELECT 1;`

### ‣‣ 현재 날짜  
**Oracle** `SELECT SYSDATE FROM DUAL;`  
**MySQL** `SELECT NOW();`

### ‣‣ 조건식 (IF)  
**Oracle** `SELECT DECODE(칼럼, 값, TRUE일 때 출력할 값, FALSE일 때 출력할 값) FROM TABLE;`   
**MySQL** `SELECT IFNULL(조건식, TRUE일 때 값, FALSE일 때 값) FROM TABLE;`

### ‣‣ 날짜 형식  
**Oracle** `SELECT TO_CHAR(SYSDATE, 'YYYY-MM-FF') FROM DUAL;`  
**MySQL** `SELECT DATE_FORMAT(NOW(), '%Y-%m-%d');`

### ‣‣ 시퀀스  
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

### ‣‣ 문자열 합치기  
**Oracle** 
```
SELECT "A" || "B" FROM DUAL;
SELECT CONCAT("A", "B") FROM DUAL;
```
**MySQL**
` SELECT CONCAT("A", "B") FROM DUAL;`


### ‣‣ 문자열 자르기  
**Oracle** `SELECT SUBSTR(문자열/칼럼, 시작위치, 잘라낼 문자열 길이) FROM DUAL;`  
**MYSQL** `SELECT SUBSTRING(문자열/칼럼, 시작위치, 잘라낼 문자열의 길이);`

