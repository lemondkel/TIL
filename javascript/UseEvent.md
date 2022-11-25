## 1. 이벤트 핸들러 등록하기
**Element.addEventListener('type', 'handler')**
&nbsp;  
&nbsp;


## 2. 이벤트 핸들러 삭제하기
addEventListener 메소드를 활용해 이벤트 핸들러를 등록했다면,  
**Element.removeEventListener('type', 'handler')**를 통해 삭제할 수 있다.  
&nbsp;


### ・ 이벤트 핸들러 예시
```

<body>
  <button id="btn">Click!</button>
</body>

```

```
const btn = document.write('#btn');

function printBtn(){
    console.log(btn.outerHTML);
}

btn.onclick = function() {
    console.log('click!');
};

btn.onclick = printBtn;
btn.removeEventListener('click', printBtn);
```
&nbsp;

### 결과  
```
<button id="btn">Click!</button>
```
&nbsp;  
&nbsp;  

## 3. 이벤트 객체  
이벤트가 발생하면 이벤트 핸들러의 첫 번째 파라미터에는 자동으로 이벤트 객체가 전달된다.  
이벤트 객체는 이벤트 종류마다 가지고 있는 프로퍼가 다르며, 이벤트에 대한 유용한 정보들을 프로퍼티에 가지고 있다.  

```
const myInput = document.querySelector('#myInput');
const myBtn = document.querySelector('#myBtn');

function printEvent(event){
    event.target.style.color = 'red';
}

myInput.addEventListener('keydown', printEvent);
myBtn.addEventListener('click', printEvent);
```
&nbsp;  
&nbsp;  


## 4. 이벤트 버블링  
어떤 요소에서 이벤트가 발생하면 해당 요소에 등록된 이벤트 핸들러가 동작하는 것뿐만 아니라 부모 요소로 이벤트가 게속 전파되면서 각 요소에도 등록된 이벤트 핸들러가 있다면 차례로 이벤트 핸들러가 동작한다. 
이벤트 버블링은 이벤트 객체의 **stopPropagation** 메소드로 전파를 막을 수 있다.  
&nbsp;  

### ・ 이벤트 버블링 예시
&nbsp; 
```
<body>
  <div id="main">
    <h2 id="title">오늘 할 일</h2>
    <ul id="to-do-list">
      <li class="item">자바스크립트 공부하기</li>
      <li class="item">블로그 올리기</li>
      <li class="item">운동하기</li>
    </ul>
  </div>
</body>
```
```
const main = document.querySelector('#main');
const toDoList = main.lastElementChild;

function printCurrentTarget(event) {
  console.log(event.currentTarget);
}

main.addEventListener('click', printCurrentTarget);

for (let child of toDoList.children) {
  child.addEventListener('click', printCurrentTarget);
}
```

&nbsp;  

### 결과  
```
<li class="item"> 자바스크립트 공부하기 </li>
<div id="main">...</div>
```
&nbsp;
### ・ 이벤트 버블링 막는 예시
```
function someHandler(event){
    event.stopPropagation();
}
```
&nbsp;  
&nbsp;


## 5. 이벤트 위임  
자식 요소 각각에 이벤트를 하나씩 등록할 필요 없이 부모 요소에서 한 번에 자식 요소들에 발생한 이벤트를 관리할 수 있다.  
이렇게 이벤트를 다루는 방식을 자식 요소의 이벤트를 부모 요소에 위임한다고 해서 이벤트 위임이라고 한다.  

&nbsp;

## 6. 브라우저의 기본 동작  
브라우저에는 각 태그별 혹은 상황별로 기본적으로 약속된 동작들이 있다.  
이런 동작들을 막고 싶다면 이벤트 객체의 **preventDefault** 메소드를 통해 막을 수 있다.  
&nbsp; 

```
function someHandler(event){
    event.preventDefault(event);
}
```