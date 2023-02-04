MyBatis Framework
-----

## • MyBatis Framework  
➢ **템플릿 엔진**의 일종으로, html태그에 속성을 추가해 페이지에 동적으로 값을 추가하거나 처리 가능!  

```
<input type="text"
value="test"
th:value="${item}>
```
->`input`태그는 `th:value`를 통해 `item`이라는 변수에 값이 존재하면 해당 값을 세팅!  
-> 만약 `item`이 없다면 `value`의 값 "test"라는 문자열을 세팅!  
-> 타임리프를 통해 렌더링된 html 페이지 열어봐도 웹 브라우저는 `th:` 속성을 알지 못함!!!  

&nbsp;  

### ˚ Thymeleaf 사용하기  
➢ `ThymeleafViewResolver`을 먼저 등록해야 함  
(근데 아래 라이브러리 추가하면 Spring이 이거 해줌)  

#### Gradle - build.gradle  
```
implementation 'org.springframework.boot:spring-boot-starter-thymeleaf'
```

#### Maven - pom.xml  
```
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-thymeleaf</artifactId>
</dependency>
``` 

-> 추가 후 빌드하면 `application.properties`에 아래 코드 자동으로 추가됨!  

```
spring.thymeleaf.prefix=classpath:/templates/
spring.thymeleaf.suffix=.html
```

-> 타임리프 사용할 html 파일에 아래처럼 태그 수정!  
```
<html xmlns:th="http://www.thymeleaf.org">
```
#### 이제 준비 끝!! 문법 알아보장~  

&nbsp;  

### ˚ Thymeleaf 문법  
➢ 대부분의 html 속성을 `th:xxx`로 변경 가능!  
(ex. th:text = "&{변수명}")  
```
➢  @{…} URL 링크 표현식
➢  |…| 리터널 대체
➢  ${…} 변수
➢  th:each 반복 출력
➢  *{…} 선택 변수
➢  #{…} 메세지를 뜻하며 properties 같은 외부 자원에서 해당 코드에 해당하는 문자열을 불러온다.
```
