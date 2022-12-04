import {useState, useEffect} from "react";
//useEffect는 두 개의 argument를 가지는 function

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev  + 1); 
  const onChange = (event) => setKeyword(event.target.value);
           // keyword에서 set해주고 있어서 input 창에 글자 입력할 때마다 state를 modify 한다.
                                                            //(=I runa ll the time을 계속 출력해준다.)
  console.log("I run all the time");
  // 무언갈 할 때마다 출력되는 코드
  useEffect(() => {
    console.log("CALL THE API...");
  }, []); //이건 그냥 처음 한 번만 출력되는 코드
  // 두 번째 argument인 []를 dependency라고 함
  useEffect(() => {
    if(keyword !== "" && keyword.length > 5) { 
      //keyword 빈값 아니고 5자 이상이면 그 때 keyword 검색
    console.log("SEARCH FOR", keyword);
    }
  }, [keyword]);
    // keyword가 변할 때마다 코드를 실행할 거라고 리액트에게 알려주는 것
    // (= keyword 변할 때마다 SEARCG FOR 어쩌구라고 출력)
    // 결국 빈 array [] 썼을 때는 한 번만 실행되는 이유는
    // 변화하는 거를 기준으로 출력하는데 변화하는 걸 지켜볼게 없으니까 처음 한 번만 실행
  
  return(
    <div>
      <input
        value={keyword}
        onChange={onChange} 
        type="text" 
        placeholder="Search here..." />
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App;
