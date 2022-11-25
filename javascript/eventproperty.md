이벤트 객체 프로퍼티
====

### 자주 사용되는 프로퍼티들
&nbsp;  

## ☻ 공통 프로퍼티  
&nbsp;

이벤트 타입과 상관없이 모든 이벤트 객체들이 공통적으로 가지고 있는 프로퍼티  

&nbsp;  

|프로퍼티|설명|
|-----|-----|
|type|이벤트 이름('click'. 'mouseup' 등)|
|target|이벤트가 발생한 요소|  
|currentTarget|이벤트 핸들러가 등록된 요소|
|timeStamp|이벤트 발생 시각|
|bubbles|버블링 단계인지 판단하는 값|  

&nbsp; 

## ☻ 마우스 이벤트  

|프로퍼티|설명|
|-----|----|
|button|누른 마우스의 버튼 (0:왼, 1:휠, 2:오)|
|clientX, clientY|마우스 커서의 브라우저 표시 영역에서의 위치|
|pageX, pageY|마우스 커서의 문서 영역에서의 위치|
|offsetX, offsetY|마우스 커서의 이벤트 발생한 요소에서의 위치|
|screenX, screenY|마우스 커서의 모니터 화면 영역에서의 위치|
|altKey|이벤트 발생할 때 alt키 눌렀는지|
|ctrlKey|이벤트 발생할 때 ctrl키 눌렀는지|
|shiftKey|이벤트 발생할 때 shift키 눌렀는지|
|metaKey|이벤트 발생할 때 meta키 눌렀는지(window키/cmd키)|

&nbsp;  

## ☻ 키보드 이벤트

|프로퍼티|설명|
|-----|----|
|key|누른 키가 가지고 있는 값|
|code|누른 키의 물리적 위치|
|altKey|이벤트 발생할 때 alt키 눌렀는지|
|ctrlKey|이벤트 발생할 때 ctrl키 눌렀는지|
|shiftKey|이벤트 발생할 때 shift키 눌렀는지|
|metaKey|이벤트 발생할 때 meta키 눌렀는지(window키/cmd키)|