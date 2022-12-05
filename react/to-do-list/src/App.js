import React from 'react';
import { useEffect, useState } from 'react';

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]); // 여러 개의 toDo 받을거. 빈 배열로 시작
  const onChange = (event) => setToDo(event.target.value);
  const onReset = (event) => setToDo("");
    const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return; //toDo가 비어있다면 함수 작동 노노
    }
    setToDos((currentArray) => [toDo, ...currentArray]);
    // 여기서 currentArray는 먼저 입력한 값, 그 다음에 입력한 값은 toDo로 들어감
    // hello를 적고 bye를 적으면 "hello" =>["bye", "hello"]가 되고,
    // 그 다음 hi를 적는다면 ["bye", "hello"] => ["hi", ["bye", "hello"]]
    setToDo(""); // 안 비어있다면 toDo에 추가
    // JS였으면 toDos.push()로 했겠지만 State는 우리가 직접적으로 수정 불가함
    // 그래서 함수를 사용하거 그 함수는 toDo를 수정하는 역할
    console.log(toDos);
  };


  return (
    <div>
      <h1
        style={{
          color: "skyblue",
          height: "100px",
          margin: 0,
          textAlign: "center",
          paddingTop: "30px",
        }}>My To Do List({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo} // 여기 toDo값 변경하면 input값도 변경되는 거
          type="text"
          placeholder='Write your to do...'
        /><br/>
        <button
          style={{
            backgroundColor: 'skyblue',
            color: 'white'
          }}>Add To Do</button>

      </form>
      <form onClick={onReset}>
        <button
          style={{
            backgroundColor: 'white',
            color: 'skyblue'
          }}>Reset</button>
      </form>
      <hr />
      <ul style={{
        color: 'gray',
      }}>
        {toDos.map((item, index) => (
          <li key={index}>{item}</li>))}

      </ul>
    </div>
    /* map은 하나의 array에 있는 item을 내가 원하는 무엇이든지로 바꿔줌
['there', 'are', 'you', 'hello'].map(() => ":)")
 위처럼 하면 [':)', ':)', ':)', ':)'] 출력 (새로운 array로 리턴)
['there', 'are', 'you', 'hello'].map((item) => item.toUpperCase())
 이렇게 하면 ['THERE', 'ARE', 'YOU', 'HELLO']  */
  );
}

export default App;
