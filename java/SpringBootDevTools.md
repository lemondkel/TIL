## Spring Boot DevTools  
➢ DevTools는 Spring Boot에서 코드가 수정되면 어플리케이션을 **재실행 해야 되는 불편한 점을 해결할 수 있도록 제공**되는 모듈!!  
-> 스프링 부트 프로젝트 시작할 때 가장 많이 사용하는 스타트 프레임워크임  

&nbsp;  

### • Spring Boot DevTools 기능  

### ˚ Property Defaults  
➢ Spring Boot에서 지원하는 **라이브러리를 캐시를 사용해 성능을 향상**함  
(ex. 템플릿 엔진)  
-> 이 파일이 반복적으로 구문을 분석하지 않도록 템플릿을 컴파일해 캐시함  
캐싱은 개발 중에는 변경된 파일을 바로 확인 불가 -> 역효과 낼 수도 있음!!  
=> **기본적으로 캐싱 옵션은 비활성화**!! (직접 false로 변경해야 함)  

### ˚ Automatic Restart  
➢ **저장할 때마다 프로젝트를 다시 시작**   
=> 즉각적으로 서버가 재시작하므로 **빠르게 디버깅 가능**!  
-> 코드 변경에 대한 **피드백 짱빨리 확**인 가능!!  
-> **특정 디렉터리만을 트리거로 설정**해 재시작도 가능!!!  
(기존 IDE에서 제공하는 자동 재시작 기능과 유사)  

### ˚ Global Settings  
```
spring-boot-devtools.properties
spring-boot-devtools.yaml
spring-boot-devtools.yml
```
-> 다음 파일 중 하나를 `$HOME/.config/spring-boot`디렉터리에 추가하여 **전역 devtools 설정 구성 가능**!  

### ˚ Remote Applications  
➢ Spring Boot DevTools 사용하면 **원격으로 개발 가능**!  
=> 로컬 개발에만 국한되지 않음  
-> 하지만 원격 지원은 보안 위험!  
-> 신뢰 가능한 네트워크나 SSL에서만 사용하장~~~   

-> 좋은 옵션이지만 여러 문제의 소지 있어서 실무에서는 선호 놉!!   
=> **이 방식 보다는 사무실 컴퓨터를 원격으로 조정해 개발하는거 추천!!**
