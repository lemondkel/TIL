
▶ Props
=======

### 컴포넌트에게 전달해 줘야 할 때 사용하는 props
----------------


props는 아래처럼 작성한다.  

```javascript
    function App() {
       return (
           <Welcome name="react" />
        );
    }
```  
&nbsp;

 Welcome 컴포넌트에서 name 값 사용하고 싶을 땐 아래처럼 하면 된다.
```javascript
    function Welcome(props) {
        return <div> 환영해요 {props.name} </div>
    }
```    
  
  
 &nbsp;   
 만약, 여러 개의 props를 Welcome 컴포넌트에 전달할 때는 아래처럼 하면 된다.
```javascript
    function App() {
        return (
             <Welcome name="react" color="pink" />
        );
    }
```    

```javascript
     function Welcome(props) {
         return <div style={{color: props.color }>환영해요 {props.name}</div>
    }
```    
&nbsp;    
 props 내부 값을 조회할 때마다 props.를 입력하는 것보다 **비구조화 할당**이라고 부르는 함수를 사용하면 코드를 더 간결히 작성할 수 있다.
```javascript
    function Welcome({color, name }) {
        return <div style={{ color }}>환영해요 {name}</div>
    }
```    
    
&nbsp;    
 컴포넌트에 props를 지정하지 않았을 때도 기본적으로 사용할 값을 설정하고 싶을 땐 **defaultProps**를 이용한다.
```javascript
    function Welcome({ color, name }) {
        return <div style={{ color }}>환영해요 {name}</div>
    }
    Welcome.defaultProps = {
     name: '이름없음'
    }
```    
    
&nbsp;    
컴포넌트 태그 사이에 넣은 값 조회하고 싶을 땐 **props.children**을 조회하면 된다.

먼저, src 디렉터리에 Wrapper.js를 만들고, 아래와 같이 작성해 보자.
```javascript
    function Wrapper() {
         const style = {
           border: '2px solid blue',
         };
        return {
            <div style={style}>
            </div>
        )
    }
```
```javascript
    import React from 'react';
    import Welcome from './Welcome';
    import Wrapper from './Wrapper';

    function App() {
        return (
             <Wrapper>
                <Welcome name="react" color="pink/>
                <Welcome color="yellow"/>
             </Wrapper>
        );
    }
    export default App;
```    
    
&nbsp;    
 그 뒤, 브라우저를 보면 Welcome 컴포넌트들은 보이지 않을 것이다.

내부의 내용이 보이기 위해선 Wrapper에서 props.children 을 렌더링 해주어야 한다.
```javascript
    function Wrapper({ children }) {
         const style = {
            border: '2px solid blue',
        );
        return (
            <div stylhe={style}>
                {children}
             </div>
         )
    }
```

