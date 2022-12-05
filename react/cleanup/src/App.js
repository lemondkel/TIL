import './App.css';
import {useEffect, useState} from 'react';

function Hello(){

  // function destroyFn () {
  //   console.log("destroyed :(");
  // }
  // function createFn () {
  //   console.log("created :)");
  //   return destroyFn;
  // }
  // useEffect(createFn, []);
  // return <h1>Hello</h1>;

// useEffect(() => {
//   console.log("hi :");
//   return () =>
// }, []);

useEffect(() => {
  console.log("hi:)");
  return () => 
    console.log("bye:(");
  }, []);
  return <h1>Hello</h1>;
}



function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
