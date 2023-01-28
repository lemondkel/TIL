## • DOMContentLoaded  
➣ 브라우저가 html을 전부 읽고 DOM 트리를 완성하는 즉시 발생한다.  
(이미지나 스타일시트 등의 기타 자원은 기다리지X)  

➣ DOM 트리 완성 후 DOM에 접근 가능하여, DOM 생성 전 DOM을 조작하는 javascript 코드가 실행되어 원하지 않는 결과 내는 것 막을 수 있다.  

➣ `DOMContentLoaded` 이벤트는 `document` 객체에서 발생한다.  
-> `addEventListener` 사용해야 함  

```
<script>
  function ready() {
    alert('DOM이 준비되었습니다!');

    // 이미지가 로드되지 않은 상태이기 때문에 사이즈는 0x0입니다.
    alert(`이미지 사이즈: ${img.offsetWidth}x${img.offsetHeight}`);
  }

  document.addEventListener("DOMContentLoaded", ready);
</script>

<img id="img" src="https://en.js.cx/clipart/train.gif?speed=1&cache=0">
```  
-> DOMContentLoaded 핸들러는 문서가 로드되었을 때 실행된다.   
따라서 핸들러 아래쪽에 위치한  `<img>`뿐만 아니라 모든 요소에 접근 가능하다.  
하지만 이미지가 로드되는 걸 기다리지 않기 때문에 `alert`창에는 이미지 사이즈가 0이라 뜬다.  

### • DOMContentLoaded와 scripts
➣ 브라우저는 html 문서를 처리하는 도중 `<script>`태그를 만나면 DOM 트리 구성을 멈추고 `<script>`를 실행한다.   
(스크립트 실행이 끝난 후에야 나머지 html 문서를 처리함)  
=> `<script>`에 있는 스크립트가 DOM조작 관련 로직을 담고 있을 수 있어서 그럼  
➣ 즉, DOMContentLoaded 이벤트는 `<script>` 안에 있는 스크립트가 처리되고 난 후에 발생한다.  

```
<script>
  document.addEventListener("DOMContentLoaded", () => {
    alert("DOM이 준비되었습니다!");
  });
</script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.3.0/lodash.js"></script>

<script>
  alert("라이브러리 로딩이 끝나고 인라인 스크립트가 실행되었습니다.");
</script>
``` 
-> 실행하면 "라이브러리 로딩이 ...~"가 먼저 실행되고 "DOM이 준비되었습니다!"가 출력된다.  
(스크립트 모두 실행 후 DOMContentLoaded 이벤트 발생)  

### • DOMContentLoaded와 styles  
➣ 외부 스타일시트는 DOM에 영향 X. DOMContentLoaded는 외부 스타일시트가 로드되기를 기다리지 않는다.   
-> 하지만 스타일시트 다음에 바로 스크립트가 오면 이 스크립트는 스타일시트 로드되기 전까지 실행 X  
(=> 스크립트에서 스타일에 영향을 받는 요소의 프로퍼티를 사용할 수도 있어서)  
```
<link type="text/css" rel="stylesheet" href="style.css">
<script>
  // 이 스크립트는 위 스타일시트가 로드될 때까지 실행되지 않습니다.
  alert(getComputedStyle(document.body).marginTop);
</script>
```
-> 이런 경우에서는 당연히 DOMContentLoaded는 스타일시트 기다림  



### ✓ 내가 이해하기 쉽게 요약  
☛ DOMContentLoaded는 다른 건 다 기다렸다가 로드되면 실행하는데 이미지랑 스타일시트 같은 기타 자원 안 기다려줌 ㅠ  
☛ 스타일시트 바로 다음에 스크립트 오면 스타일시트 기다려줌! -> 스크립트에 스타일시트 영향 받는 프로퍼티 있을 수도 있으니까!  
☛ 스크립트가 짱임 중간에 `<script>`태그 만나면 DOMContentLoaded 멈추고 스크립트 실행 끝나면 이어서 실행함  -> `<script>` 안에 DOM 조작 관련 로직 있을 수도 있어서!


