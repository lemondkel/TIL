import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";

function App() {
  return (
    <Router>
      {/* Switch는 Route 찾는 역할 (Route는 URL을 의미) Route 찾으면 컴포넌트 렌더링함*/}
      {/* 한 번에 하나의 Route만 렌더링 하기 위해 switch 사용 */}
      <Switch>
         <Route path="/hello">
           <h1>Hello</h1>
         </Route>
        {/* : 안 쓰면 유저를 텍스트 /movie/id로 보내버림 */}
        <Route path="/movie">
           <Detail />
         </Route>
         <Route path="/">
           <Home />
         </Route>
        {/* <Router>을 만들고 그 안에 <Route>를 만들어주고  */}
        {/* 누군가 우리 웹사이트의 "/" url에 있다면 우리는 Home 컴포넌트를 보여줄거임 */}
      </Switch>
    </Router>
  );
}

export default App;

// router는 URL을 보고있는 컴포넌트
// Url : localhost:3000/ 이 상태면 router는 우리에게 Home 컴포넌트를 보여주게 됨
// Url : localhost:3000/movie234 이 상태면 router는 Detail 컴포넌트 보여줌
