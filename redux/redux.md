## Redux  

### 1) Vanilla Counter
► 자바스크립트 한에서 원하는 어디에서는 쓸 수 있음
► react와 많이 사용함 (react에 의존하는 라이브러리 아님)
► data 관리 도와줌
► store : data를 저장하는 곳
► reducer : 함수 => 내 데이터를 modify하는 (의미 찾고 수정하는)
► 뭐든지 modifier와 reducer이 return하는 건 내 application의 data가 됨
► redux는 data가 기본적으로 한 곳에만 있음 (여기선 counModifier)

► 우리가 countModifier(reducer)과 소통하기 위한 방법엔 action이 있음
action : redux에서 함수를 부를 때 쓰는 두 번째 파라미터 
(action은 object여야 함)

&nbsp; 

### 1) Vanilla ToDo  
► store을 수정할 수 있는 유일한 방법은 action을 보내는 것  
► 절대 state를 mutate 하지 말아야 함  
-> mutate 대신에 new state objects를 리턴해야 함  
```
const friends = ["dal"] 
friends.push("lynn")
```
-> friends를 mutate 한 것  
